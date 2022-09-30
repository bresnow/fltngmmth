/*
 * keybinder.js
 */

const gi = require('node-gtk')
const Gtk = gi.require('Gtk', '3.0')
const Keybinder = gi.require('Keybinder', '3.0')

function callback(keystring) {
  console.log("In callback for", keystring)
  console.log("Event time:", Keybinder.getCurrentEventTime())
  Keybinder.unbind(keystring)
  Gtk.mainQuit()
}

Gtk.init()
Keybinder.init()
Keybinder.bind("<Control>A", callback)
console.log("Press <Control>A to activate keybinding and quit");
Gtk.main()
