import express from "express";
const app = express();
import cluster from "node:cluster";

import scrapeProducts from "./scraper.js";

const port = process.env.port || 8080;
app.use(express.json());
app.use("/", scrapeProducts);
if (cluster.isPrimary) {
  // Fork workers
  for (let i = 0; i < 4; i++) {
    cluster.fork();
  }
} else {
  // Worker process
  // Create an HTTP server
  try {
    const httpServer = app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
}
