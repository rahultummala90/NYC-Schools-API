import axios from "axios";

export const fetchData = async (url: any) => {
  const response = await axios
    .get(url)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });

  return response;
};
