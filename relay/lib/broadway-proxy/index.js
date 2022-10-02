import util from 'util';
import events from 'events'
import { spawn } from 'child_process'
import { WebSocket } from 'websocket-client'
let currentport = 8005;

class Broadway extends events.EventEmitter {
	constructor(options) {
		super();
		this.options = options || {};
		events.EventEmitter.call(this);
	}


	getPort() {
		let _bway = Number(process.env.DISPLAY.replace(":","")), port = _bway + 8080
		return port;
	}

	getGtkApp() {
		// TODO: Default application process if no app available in options
		return this.options.app || `gtk4.0-demo`;
	};
	getGtkAppArgs() {
		return this.options.args || [];
	};
	connect() {
		// TODO: Copy parent process env?
		var self = this,
			processStartDelay = 1000;

		this.process = spawn(`nohup broadwayd \"${this.getGtkApp()} ${this.getGtkAppArgs()}\"`);

		this.process.stderr.on('data', function onBroadwayError(data) {
			console.log(this.getPort() + ': BROADWAY PROXY STDERR: ' + data);
			self.disconnect();
		});
		this.process.stdout.on('data', function onBroadwayOutput(data) {
			console.log(this.getPort() + ': BROADWAY PROXY STDOUT: ' + data);
		});

		setTimeout(function () {
			var self = self;
			console.log(self.getPort() + 'CONNECTED');
			self.webSocket = new WebSocket('ws://localhost:' + self.getPort() + '/socket', "broadway");
			self.webSocket.onmessage = function socketDataReceived(event) {
				self.emit('message', event.data);
			};
		}, processStartDelay);
	};
}
/*
 * Exports
 */
export { Broadway as BroadwayProxy };
