import axios from "axios";

export function sleep(ms = 2000): Promise<void> {
  console.log("Simulate a delay in the API response to display loader");
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const axiosClient = axios.create();

// Simulate a delay in the API response to display loader
axiosClient.interceptors.response.use(async (response) => {
  await sleep(1000);
  return response;
});
