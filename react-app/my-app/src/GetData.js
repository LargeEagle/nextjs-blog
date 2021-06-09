import React, { useState, useEffect } from "react";

export default function GetData(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (responseData) {
        setData(responseData);
      });
  }, [url]);
  return { data };
}
