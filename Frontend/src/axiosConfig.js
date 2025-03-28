// frontend/src/axiosConfig.js
import axios from "axios";

axios.defaults.withCredentials = true; // Ensure cookies are sent with every request

export default axios;