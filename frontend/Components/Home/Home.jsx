import React, { useState } from "react";
import "./Home.css";

function Home() {
  const [url, setURL] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:8080/scrape", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          url: "https://crawler-test.com",
        }),
      });
      const data = await res.json();
      console.log(data.scrapedHTML);
    } catch (error) {
      console.log(error);
    }

    // const response = await fetch("http://localhost:8000/scrape", {
    //   method: "POST",
    //   mode: "cors",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: {
    //     url: "https://crawler-test.com",
    //   },
    // });
    // console.log(response);
  };
  return (
    <div>
      <h1>Let's Scrape!</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="url"
          name="url1"
          id="url1"
          placeholder="Enter URL to scrape"
          required
        />
        <input
          type="url"
          name="url2"
          id="url2"
          placeholder="Enter URL to scrape"
        />
        <input
          type="url"
          name="url3"
          id="url3"
          placeholder="Enter URL to scrape"
        />
        <input
          type="url"
          name="url4"
          id="url4"
          placeholder="Enter URL to scrape"
        />
        <button type="submit">Get Data</button>
      </form>
    </div>
  );
}

export default Home;
