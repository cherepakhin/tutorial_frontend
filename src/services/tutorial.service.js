import http from "../http-common";

class TutorialDataService {
  getAll() {
    return http.get("/tutorial/");
  }

  get(n) {
    console.log(n);
    return http.get(`/tutorial/${n}`);
  }

  create(data) {
    return http.post("/tutorial", data);
  }

  update(n, data) {
    console.log(n);
    console.log(data);
    return http.post(`/tutorial/${n}`, data);
  }

  delete(n) {
    return http.delete(`/tutorial/${n}`);
  }

  deleteAll() {
    return http.delete(`/tutorial`);
  }

  findByTitle(title) {
    return http.get(`/tutorial/by_title/${title}`);
  }
}

export default new TutorialDataService();