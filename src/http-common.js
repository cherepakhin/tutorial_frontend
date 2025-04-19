import axios from "axios";

//TODO: realise log
//axios.interceptors.request.use(request => {
//  console.log('Starting Request', JSON.stringify(request, null, 2))
//  return request
//})
//
//axios.interceptors.response.use(response => {
//  console.log('Response:', JSON.stringify(response, null, 2))
//  return response
//})

export default axios.create({
  baseURL: "https://127.0.0.1:8980/api",

  mode: "no-cors",
  headers: {
    "Content-type": "application/json"
  }
});