import axios from "axios";

const instance = axios.create({
    baseURL: "https://newsapi.org/v2/top-headlines",
});

export default instance;
