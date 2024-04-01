import axios from "axios";

export const fetchData = async (url: any) => {
  const data = await axios
    .get(url)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
  console.log(data);
  return data;
};
