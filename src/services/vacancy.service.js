import http from "../http-common";
// Не удалять комментарий. Пример запроса.
// import axios from "axios";

class VacancyService {
  getAll() {
    console.log("VacancyService.getAll()");

// Не удалять комментарий. Это пример запроса.
//    let req= axios.create({
//      baseURL: "http://127.0.0.1:8080/api",
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

    let vacancies = http.get(`/vacancy/`);
    console.log("getAll received result: " + vacancies);
    console.log(vacancies);
    return vacancies;
  }

  get(n) {
    console.log("VacancyService.get" + n);
    return http.get(`/vacancy/${n}`);
  }

  create(data) {
    console.log("VacancyService.create");
    console.log(data);
    return http.post("/vacancy/", data);
  }

  update(n, data) {
    console.log("VacancyService.update" + n);
    console.log(data);
    return http.post(`/vacancy/${n}`, data);
  }

  delete(n) {
    console.log("VacancyService.delete" + n);
    return http.delete(`/vacancy/${n}`);
  }

  deleteAll() {
    console.log("Delete all");
    return http.delete(`/vacancy`);
  }

  findByTitle(title) {
    console.log("findByTitle: " + title);
    let critery = {
        "byName": title
    }
    let vacancies = http.post(`/vacancy/find`, critery);
    console.log(vacancies);
    return vacancies;
  }
}

export default new VacancyService();