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

// для разработки baseURL:
// httpie https://127.0.0.1:8443/api/vacancy/ - работает через БРАУЗЕР

// для разработки baseURL: "https://127.0.0.1:8443/api",
// для размещения на сайте baseURL: "https://v.perm.ru:8443/api",
export default axios.create({
  baseURL: "https://v.perm.ru:8443/api",

  mode: "no-cors",
  headers: {
    "Content-type": "application/json"
  }
});