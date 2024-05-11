import express from "express";
import cheerio from "cheerio";
import axios from "axios";

const router = express.Router();
const baseUrl = "https://crawler-test.com";

router.post("/scrape", async (req, res) => {
  console.log("hi");
  console.log(req.body.url);
  const { url } = req.body;

  if (!url.includes(baseUrl)) {
    console.log("Invalid URL");
    return res.status(404).json({
      message: "Invald URL",
    });
  }
  try {
    let data;
    axios.get(url).then((response) => {
      // Load the HTML into cheerio
      data = cheerio.load(response.data);
      console.log(response);
    });
    return res.status(200).json({
      text: "hi",
    });
  } catch (error) {
    console.log(error);
  }
});

export default router;
