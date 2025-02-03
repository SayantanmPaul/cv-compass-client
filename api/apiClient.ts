import { FormInput } from "@/lib/types";
import axios from "axios";

const isDevMode = false;

const BASE_URL = "http://localhost:4001/api/";

const PRODUCTION_URL = "https://cv-compass-server.onrender.com/api/";

if (isDevMode) {
  axios
    .get(PRODUCTION_URL + "health")
    .then((res) => {
      if (res.status === 200) {
        console.log("Server is up and running");
      }
    })
    .catch((error) => {
      console.error("Error pinging backend:", error);
    });
}

export const axiosCLient = axios.create({
  baseURL: isDevMode ? BASE_URL : PRODUCTION_URL,
  withCredentials: true,
});

export const generateFeedback = async (data: FormInput) => {
  try {
    const res = await axiosCLient.post("/upload", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return res.data;
  } catch (err) {
    throw err;
  }
};

export const getVisitsCount = async () => {
  try {
    const res = await axiosCLient.get("/visits");
    return res.data;
  } catch (err) {
    throw err;
  }
};
