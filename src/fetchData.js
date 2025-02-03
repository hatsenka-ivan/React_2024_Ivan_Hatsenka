import axios from "axios";

const api = axios.create({
  baseURL: "https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1",
});

export default async function fetchData(token) {
  try {
    const response = await api.get("/meals", {
      cancelToken: token,
    });
    this.setState({
      isLoading: false,
      data: response.data,
    });
  } catch (error) {
    if (axios.isCancel(error)) {
      console.log("Request canceled:", error.message);
    } else {
      console.error("Error fetching data:", error);
      this.setState({
        isLoading: false,
      });
    }
  }
}
