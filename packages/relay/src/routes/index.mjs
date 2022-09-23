import { routes } from "../express.mjs"
const { default: initGun } = await import('../initGun.mjs')

const { gun } = await initGun([], {})

const htmlNode = gun.get("EXPRESS_RESPONSE_ONE");


routes.get("/", (req, res) =>
  htmlNode.on(({ html, js, css }) => {
    html = html
      .replace("<---REPLACE_JS-->", js)
      .replace("<---REPLACE_CSS-->", css);
    res.send(html);
  })
);

routes.get("/healthcheck", (req, res) => res.json({ ok: true }));

export default routes;
