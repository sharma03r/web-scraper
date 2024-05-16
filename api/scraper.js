import express from "express";
import { load } from "cheerio";
import axios from "axios";

const router = express.Router();
const baseUrl = "https://crawler-test.com";

router.post("/scrape", async (req, res) => {
  console.log(`Process running on worker process with id ${process.pid}`);
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
      data = load(response.data);
      return res.status(200).json({
        text: "hi",
        process_Id: process.pid,
      });
    });
  } catch (error) {
    console.log(error);
  }
});

export default router;
