import axios from "axios";
import { useEffect, useState } from "react";

let responseDataCounter = 0;

export default function useFetch<T = unknown>(url: string): T | null {
  const [data, setData] = useState<T | null>(null);

  const api = axios.create({ baseURL: url });

  useEffect(() => {
    const abortController = new AbortController();
    const storageKey = "response-data" + responseDataCounter++;
    (async function () {
      try {
        const response = await api.get("/meals", {
          signal: abortController.signal,
        });
        localStorage.setItem(
          "response-status",
          JSON.stringify(response.status),
        );
        localStorage.setItem(storageKey, JSON.stringify(response.data));

        setData(response.data);
      } catch (error) {
        if (axios.isCancel(error)) {
          localStorage.setItem("response-status", JSON.stringify(499));
          console.log("Request canceled:", error.message);
        } else if (axios.isAxiosError(error) && error.response) {
          localStorage.setItem(
            "response-status",
            JSON.stringify(error.response.status),
          );
          localStorage.setItem(storageKey, JSON.stringify(error.response.data));
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else {
          console.error("Error fetching data:", error);
        }
      }
    })();

    return () => {
      abortController.abort();
    };
  }, []);

  return data;
}
