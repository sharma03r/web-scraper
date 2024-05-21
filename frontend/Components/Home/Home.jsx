import React, { useState } from "react";
import "./Home.css";
import Result from "../Result/Result";

function Home() {
  const [formData, setFormData] = useState({
    url1: "",
    url2: "",
    url3: "",
    url4: "",
  });
  const [showForm, setShowForm] = useState(true);
  const [resData, setResData] = useState([]);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(formData);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const [res1, res2, res3, res4] = await Promise.all([
        fetch("http://localhost:8080/scrape", {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            url: formData.url1,
          }),
        }),
        fetch("http://localhost:8080/scrape", {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            url: formData.url2,
          }),
        }),
        fetch("http://localhost:8080/scrape", {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            url: formData.url3,
          }),
        }),
        fetch("http://localhost:8080/scrape", {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            url: formData.url4,
          }),
        }),
      ]);
      const [data1, data2, data3, data4] = await Promise.all([
        res1.json(),
        res2.json(),
        res3.json(),
        res4.json(),
      ]);
      console.log("data1:", data1);
      console.log("data2:", data2);
      console.log("data3:", data3);
      console.log("data4:", data4);
      setResData([data1, data2, data3, data4]);
      setShowForm(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      {showForm ? (
        <div>
          <h1>Let's Scrape!</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="url"
              name="url1"
              value={formData.url1}
              onChange={handleChange}
              placeholder="Enter URL to scrape"
              required
            />
            <input
              type="url"
              name="url2"
              value={formData.url2}
              onChange={handleChange}
              placeholder="Enter URL to scrape"
            />
            <input
              type="url"
              name="url3"
              value={formData.url3}
              onChange={handleChange}
              placeholder="Enter URL to scrape"
            />
            <input
              type="url"
              name="url4"
              value={formData.url4}
              onChange={handleChange}
              placeholder="Enter URL to scrape"
            />
            <button type="submit">Get Data</button>
          </form>
        </div>
      ) : (
        <div className="result">
          {resData.map((result) => (
            <div dangerouslySetInnerHTML={{ __html: result.scrapedHTML }} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
