import axios from "axios";
import { useEffect, useState } from "react";

const RESPONSE_DATA_COUNTER = 0;

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
        localStorage.setItem(
          "response-status",
          JSON.stringify(response.status),
        );
        localStorage.setItem(
          "response-data" + RESPONSE_DATA_COUNTER,
          JSON.stringify(response.data),
        );

        setData(response.data);
      } catch (error) {
        if (axios.isCancel(error)) {
          localStorage.setItem("response-status", JSON.stringify(499));
          console.log("Request canceled:", error.message);
        } else if (error.response) {
          localStorage.setItem(
            "response-status",
            JSON.stringify(error.response.status),
          );
          localStorage.setItem(
            "response-data" + RESPONSE_DATA_COUNTER,
            JSON.stringify(error.response.data),
          );
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else {
          console.error("Error fetching data:", error);
        }
      }
      return () => {
        abortController.cancel("Component unmounted");
      };
    })();
  }, []);

  return data;
}
