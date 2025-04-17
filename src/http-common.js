import axios from "axios";

axios.interceptors.request.use(request => {
  console.log('Starting Request', JSON.stringify(request, null, 2))
  return request
})

axios.interceptors.response.use(response => {
  console.log('Response:', JSON.stringify(response, null, 2))
  return response
})

export default axios.create({
  baseURL: "http://127.0.0.1:8980/api",
  headers: {
    "Content-type": "application/json"
  }
});