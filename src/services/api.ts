import axios from "axios";

const api = axios.create({
  baseURL: "https://hmburgueria-v2-db.onrender.com/", 
  timeout: 15000
})

export default api