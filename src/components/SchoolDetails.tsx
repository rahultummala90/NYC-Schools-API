import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

type SchoolDetailsProps = {
  dbn?: string;
};

export const SchoolDetails = () => {
  let { dbn } = useParams();
  const [details, setDetails] = useState([]);

  const getData = async () => {
    await axios
      .get(`https://data.cityofnewyork.us/resource/s3k6-pzi2.json?dbn=${dbn}`)
      .then((response) => {
        setDetails(response.data);
      })
      .catch((error) => {});
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className="w-full rounded overflow-hidden shadow-lg">
        <div className="px-6 py-4">
          <p className="text-gray-700 text-base">
            {details.map((detail: any) => (
              <div>
                <div className="font-bold text-xl mb-2">
                  {detail.school_name}
                </div>
                {/* <p>{detail.school_name}</p> */}
                <p>{detail.overview_paragraph}</p>
              </div>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};
