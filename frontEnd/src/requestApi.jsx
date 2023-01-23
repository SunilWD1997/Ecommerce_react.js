import axios from "axios";

export const requestApi = axios.create({
    baseURL: process.env.REACT_APP_URL,
    headers: { Authorization: "bearer" + process.env.REACT_APP_TOKEN, }
});

export default requestApi;