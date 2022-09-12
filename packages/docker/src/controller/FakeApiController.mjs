import Api from "../utils/api/api.mjs";

class FakeApiController {
  // Language: javascript
  async getFakeData(req, res) {
    try {
      const { data: posts } = await Api.get("/posts");
      return res.json({ posts });
    } catch (error) {
      return res.status(400).json({ error: "Error getting fake data" });
    }
  }
}
export default new FakeApiController();
