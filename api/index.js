import express from "express";
const app = express();
const port = process.env.port || 8080;
import scrapeProducts from "./scraper.js";
app.use(express.json());
app.use("/", scrapeProducts);
try {
  const httpServer = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
} catch (error) {
  console.log(error);
}
