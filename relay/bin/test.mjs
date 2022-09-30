import Gun from "gun"

await import("../src/lib/gunlibs.js")
//test locally
// docker run  -p 8085:8085 -p 4000:3000 -v ~/relay_logs:/var/log/supervisord  bresnow/gtk-gun_relay-server:alpine-16v0.0.1

let gun = Gun({peers:["http://fltngmmth.com:4000/gun"]})

let browserCtl = gun.path(["GJS_BROWSER", "WEBSOCKET_CMD_TEST"]), initialize = browserCtl.get("initialize_from_START_URL_ENV")

browserCtl.put({url:"https://google.com"})