import { routes } from "../express.mjs"
import { read } from "fsxx";
const { default: initGun } = await import('../initGun.mjs')

const { gun } = await initGun([], {})

const htmlNode = gun.get("EXPRESS_RESPONSE_ONE");
const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Aminion Network Renderer</title>
  <meta http-equiv="Content-Security-Policy" content="script-src 'self' 'unsafe-inline';" />
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">

</head>
<body>
  <section class="section">
    <h1 class="title">CNXT Relay Browser</h1>
    <h2 class="subtitle">Search the network</h2>
    <input type="text" id="navigator" style="width:100%" placeholder="Enter a URL or keywords to search . . . "/>
    <p id="p"></p>
  </section>
</body>
  <script >
  <%--protocol--%>
  </script>
<script>
let nav = document.getElementById('navigator')
document.addEventListener('keyup', (ev)=>{
  if(ev.code == 'Enter'){
    try{
      let url = new URL(nav.value)
      if(url) window.location.replace(nav.value)
    }
    catch{
      window.location.replace(\`https://duckduckgo.com/?q=\${nav.value}&t=h_&ia=web\`)
    }
  }
})
</script >
</html > `
htmlNode.put({html})
routes.get("/", (req, res) =>{
  htmlNode.on(({ html}) => {
    if(html){
    res.send(html);}
  })}
);

routes.get("/healthcheck", (req, res) => res.json({ ok: true }));

export default routes;
