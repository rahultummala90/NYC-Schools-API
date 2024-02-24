import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { SchoolDetails } from "./SchoolDetails";
import ReactPaginate from "react-paginate";
import InfiniteScroll from "react-infinite-scroller";

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

  const itemsPerPage = 20;
  const [hasMore, setHasMore] = useState(true);
  const [records, setrecords] = useState(itemsPerPage);

  const loadMore = () => {
    if (records === schools?.length) {
      setHasMore(false);
    } else {
      setTimeout(() => {
        setrecords(records + itemsPerPage);
      }, 2000);
    }
  };

  const showItems = (schools: any) => {
    var items = [];
    for (var i = 0; i < records; i++) {
      schools &&
        items.push(
          <div
            className="border-radius-2 block rounded-lg bg-gray-200 mb-2 p-6 dark:bg-neutral-700"
            key={schools[i].dbn}
          >
            <Link to={"school/" + schools[i].dbn}>
              <p>School Name: {schools[i].school_name}</p>
              <p>DBN: {schools[i].dbn}</p>
            </Link>
          </div>
        );
    }
    return items;
  };

  return (
    <InfiniteScroll
      pageStart={0}
      loadMore={loadMore}
      hasMore={hasMore}
      loader={<h4 className="loader">Loading...</h4>}
      useWindow={false}
    >
      <div className="bg-white">
        <div className="bg-gray shadow"></div>
        <div className="w-full rounded overflow-hidden shadow-lg">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">NYC High Schools</div>
            <div className="pt-4">{showItems(schools)}</div>
          </div>
        </div>
      </div>
    </InfiniteScroll>
  );
};
