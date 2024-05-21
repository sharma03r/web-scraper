import React from "react";

function Result({ result }) {
  console.log(result);
  return (
    <div
      className="result-div"
      dangerouslySetInnerHTML={{ __html: result.scrapedHTML }}
    />
  );
}

export default Result;
