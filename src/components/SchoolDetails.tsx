import { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../Utils/fetchData";

type SchoolDetailProps = {
  dbn?: string;
}[];

export const SchoolDetails = () => {
  let { dbn } = useParams();
  const [details, setDetails] = useState<SchoolDetailProps | null>(null);

  const data = fetchData(process.env.REACT_APP_NYC_URL + `?dbn=${dbn}`)
    .then((response) => setDetails(response.data))
    .catch((error) => {});

  useMemo(() => data, [data]);

  return (
    <div>
      <div className="w-full rounded overflow-hidden shadow-lg">
        <div className="px-6 py-4">
          <div className="text-gray-700 text-base">
            {details &&
              details.map((detail: any) => (
                <div key={detail.school_name}>
                  <div className="font-bold text-xl mb-2">
                    {detail.school_name}
                  </div>
                  <p>{detail.overview_paragraph}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
