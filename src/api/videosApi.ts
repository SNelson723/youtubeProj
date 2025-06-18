import axios from "axios";

export const getVideos = async (url: string, key: string, q: string) => {
  const json = await axios({
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    url: url + "maxResults=10",
    params: {
      q,
      key,
    },
  });
  return json;
};
