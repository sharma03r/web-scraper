import express from "express";
const app = express();
import cluster from "node:cluster";
import cors from "cors";

import scrapeProducts from "./scraper.js";
const corsOptions = {
  origin: "http://localhost:5173",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));
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
