import http from "../http-common";
//import axios from "axios";

class VacancyService {
  getAll() {
    console.log("VacancyService.getAll()");
    let vacancies = [
                        {
                            "comment": "",
                            "company": {
                                "n": 1,
                                "name": "Company 1"
                            },
                            "description": "Description Vacancy 1 Company 1",
                            "n": 1,
                            "source": "",
                            "title": "Vacancy 1 Company 1"
                        },
                        {
                            "comment": "",
                            "company": {
                                "n": 1,
                                "name": "Company 1"
                            },
                            "description": "Description Vacancy 2 Company 1",
                            "n": 2,
                            "source": "",
                            "title": "Vacancy 2 Company 1"
                        },
                        {
                            "comment": "",
                            "company": {
                                "n": 2,
                                "name": "Company 2"
                            },
                            "description": "Description Vacancy 1 Company 2",
                            "n": 3,
                            "source": "",
                            "title": "Vacancy 1 Company 2"
                        },
                        {
                            "comment": "",
                            "company": {
                                "n": 2,
                                "name": "Company 2"
                            },
                            "description": "Description Vacancy 2 Company 2",
                            "n": 4,
                            "source": "",
                            "title": "Vacancy 2 Company 2"
                        }
                    ];
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
//TODO: uncomment
//    let vacancies = http.get(`/vacancy/by_title/${title}`);
    let vacancies = http.get(`/vacancy/`);
    console.log(vacancies);
//    vacancys.then(function (response) {
//        console.log("findByTitle received result: " + vacancies);
//    }
    return vacancies;
  }
}

export default new VacancyService();