import http from "../http-common";

class VacancyService {
  getAll() {
    console.log("VacancyService.getAll()");
    let vacancies = http.get(`/vacancy/`);
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
    let vacancies = http.get(`/vacancy/by_title/${title}`);
    console.log(vacancies);
//    vacancys.then(function (response) {
//        console.log("findByTitle received result: " + vacancies);
//    }
    return vacancies;
  }
}

export default new VacancyService();