import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:8000/api/v1",
    timeout: 10800
})

export default API