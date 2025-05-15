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

//  baseURL: "http://localhost:8090/api", - через HTTP РАБОТАЕТ
//  On Your Network:  http://192.168.1.57:8081/vacancy - НЕ РАБОТАЕТ
//  baseURL: "http://v.perm.ru:8090/api",

// для разработки baseURL: "http://127.0.0.1:8080/api",
// для размещения на сайте baseURL: "https://v.perm.ru:8443",
export default axios.create({
  baseURL: "https://v.perm.ru:8443",

  mode: "no-cors",
  headers: {
    "Content-type": "application/json"
  }
});