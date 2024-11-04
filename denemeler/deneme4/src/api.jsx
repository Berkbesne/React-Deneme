import axios from "axios";
import React from "react";
const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID u6GoNMMVdVnFi10IEijbr2sqJsnA5npMs4SSDx9FAq0", //
    },
    params: { query: term },
  });

  return response.data.results;
  console.log("aaaa");
};
export default searchImages;
