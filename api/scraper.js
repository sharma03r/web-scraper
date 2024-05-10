import express from "express";
import cheerio from "cheerio";
import axios from "axios";

const router = express.Router();
const baseUrl = "https://www.amazon.com";

router.post("/scrape", async (req, res) => {
  const { url } = req.body;
  if (!url.includes(baseUrl)) {
    console.log("Invalid URL");
    return res.status(404).json({
      message: "Invald URL",
    });
  }
});
