import React from "react";
import axios from "axios";

export const fetchData = async () => {
  const response = await axios
    .get("https://data.cityofnewyork.us/resource/s3k6-pzi2.json")
    .then((response) => {})
    .catch((error) => {});

  return response;
};
