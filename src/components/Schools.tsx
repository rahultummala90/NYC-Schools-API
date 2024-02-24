import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { SchoolDetails } from "./SchoolDetails";

// type SchoolsList = Object[];

type SchoolsList = {
  school_name?: string;
  dbn?: string;
}[];

export const Schools = () => {
  const [schools, setSchools] = useState<SchoolsList | null>(null);

  //  TODO: Create common componenet for this
  const getData = async () => {
    await axios
      .get("https://data.cityofnewyork.us/resource/s3k6-pzi2.json")
      .then((response) => {
        setSchools(response.data);
      })
      .catch((error) => {});
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="bg-white">
      <div className="bg-gray shadow"></div>
      <div className="w-full rounded overflow-hidden shadow-lg">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">NYC High Schools</div>
          <div className="pt-4">
            {schools?.map((school: any) => (
              <div className="border-radius-2 block rounded-lg bg-gray-200 mb-2 p-6 dark:bg-neutral-700">
                <Link to={"school/" + school.dbn}>
                  <p>School Name: {school.school_name}</p>
                  <p>DBN: {school.dbn}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
