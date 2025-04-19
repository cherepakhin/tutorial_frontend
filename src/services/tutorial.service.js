import http from "../http-common";

class TutorialDataService {
  getAll() {
    console.log("TutorialDataService.getAll()");
    let tutors = http.get(`/tutorial/`);
    return tutors;
  }

  get(n) {
    console.log("TutorialDataService.get" + n);
    return http.get(`/tutorial/${n}`);
  }

  create(data) {
    console.log("TutorialDataService.create");
    console.log(data);
    return http.post("/tutorial/", data);
  }

  update(n, data) {
    console.log("TutorialDataService.update" + n);
    console.log(data);
    return http.post(`/tutorial/${n}`, data);
  }

  delete(n) {
    console.log("TutorialDataService.delete" + n);
    return http.delete(`/tutorial/${n}`);
  }

  deleteAll() {
    console.log("Delete all");
    return http.delete(`/tutorial`);
  }

  findByTitle(title) {
    console.log("findByTitle: " + title);
    let tutors = http.get(`/tutorial/by_title/${title}`);
    console.log(tutors);
//    tutorials.then(function (response) {
//        console.log("findByTitle received result: " + tutors);
//    }
    return tutors;
  }
}

export default new TutorialDataService();