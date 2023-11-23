import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "a77a099c90mshb7e9eb6f08cb04cp1cdac5jsn9eba3b7c1cf3",
    },
  });

  return data;
};
