import axios from "axios";
import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);

  const api = axios.create({
    baseURL: url,
  });
  const abortController = axios.CancelToken.source();
  useEffect(() => {
    (async function () {
      try {
        const response = await api.get("/meals", {
          cancelToken: abortController.token,
        });
        setData(response.data);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Request canceled:", error.message);
        } else {
          console.error("Error fetching data:", error);
        }
      }
      return () => {
        abortController.cancel("Component unmounted");
      };
    })();
  }, [abortController, api, url]);

  return [data];
}
