import axios from "../http-common";
// Не удалять комментарий. Пример запроса.
// import axios from "axios";

class VacancyService {
  getAll() {
    console.log("VacancyService.getAll()");

// Не удалять комментарий. Это пример запроса.
//    let req= axios.create({
//      baseURL: "axios://127.0.0.1:8080/api",
//
//      mode: "no-cors",
//      headers: {
//        "Content-type": "application/json"
//      }
//    });
//    let vacancies = req.get("/vacancy/");

//    vacancies.then(function (response) {
//                      console.log("findByTitle received result: " + vacancies);
//                  });
//

    let vacancies = axios.get(`/vacancy/`);
    console.log("getAll received result: " + vacancies);
    console.log(vacancies);
    return vacancies;
  }

  get(n) {
    console.log("VacancyService.get n=" + n);
    return axios.get(`/vacancy/${n}`);
  }

  create(data) {
    console.log("VacancyService.create");
    console.log(data);
    return axios.post("/vacancy/", data);
  }

  update(n, data) {
    console.log("VacancyService.update: n=" + n);
    console.log(data);
    return axios.post(`/vacancy/`, data);
  }

  delete(n) {
    console.log("VacancyService.delete n=" + n);
    return axios.delete(`/vacancy/${n}`);
  }

  deleteAll() {
    console.log("Delete all");
    return axios.delete(`/vacancy`);
  }

  findByTitle(title) {
    console.log("findByTitle: " + title);
    let critery = {
        "byName": title
    }
    let vacancies = axios.post(`/vacancy/find`, critery);
    console.log(vacancies);
    return vacancies;
  }
}

export default new VacancyService();