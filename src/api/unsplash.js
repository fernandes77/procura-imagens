import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 24cghB97qytO95Nwn5WQ2couhBa7uZ1RwD_N0us5aeY",
  },
});
