import http from "../http-common";

class TutorialDataService {
  getAll() {
    return http.get("/tutorial/");
  }

  get(n) {
    console.log("Get");
    console.log(n);
    return http.get(`/tutorial/${n}`);
  }

  create(data) {
    console.log("Create");
    console.log(data);
    return http.post("/tutorial", data);
  }

  update(n, data) {
    console.log("Update");
    console.log(n);
    console.log(data);
    return http.post(`/tutorial/${n}`, data);
  }

  delete(n) {
    console.log("Delete");
    console.log(n);
    return http.delete(`/tutorial/${n}`);
  }

  deleteAll() {
    console.log("Delete all");
    return http.delete(`/tutorial`);
  }

  findByTitle(title) {
    console.log("findByTitle: " + title);
    let tutors = http.get(`/tutorial/by_title/${title}`);
    return tutors;
  }
}

export default new TutorialDataService();