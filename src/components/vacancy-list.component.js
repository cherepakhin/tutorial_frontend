import React, { Component } from "react";
import VacancyService from "../services/vacancy.service";
import { Link } from "react-router-dom";

export default class VacancyList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchName = this.onChangeSearchName.bind(this);
    this.retrieveVacancies = this.retrieveVacancies.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveVacancy = this.setActiveVacancy.bind(this);
    this.removeAllVacancies = this.removeAllVacancies.bind(this);
    this.searchName = this.searchName.bind(this);

    this.state = {
      vacancies: [],
      currentVacancy: null,
      currentIndex: -1,
      searchName: ""
    };

    console.log("VacancyList.constructor");
    console.log("VacancyList.props:");
    console.log(props);
    this.refreshList();
    console.log(props);
  }

  componentDidMount() {
    console.log("mount");
    this.retrieveVacancies();
  }

  onChangeSearchName(e) {
    const searchName = e.target.value;

    this.setState({
      searchName: searchName
    });
  }

  retrieveVacancies() {
     VacancyService.getAll().then(response => {
          console.log(response.data);
          this.setState({
            vacancies: response.data
          });
       }).catch(e => {
         console.log(e);
       });
  }

  refreshList() {
    this.retrieveVacancies();
  }

  setActiveVacancy(vacancy, index) {
    this.setState({
      currentVacancy: {...vacancy},
      currentIndex: index
    });
  }

  removeAllVacancies() {
    VacancyService.deleteAll()
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }

  searchName() {
    this.setState({
      currentVacancy: null,
      currentIndex: -1
    });

    if(this.state.searchName === '') {
        return this.retrieveVacancies();
    }
    VacancyService.findByTitle(this.state.searchName) // http.get(`/tutorial/by?name=${name}`)
      .then(response => {
        this.setState({
          vacancies: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { searchName, vacancies, currentVacancy, currentIndex } = this.state;

    return (
      <div className="list row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by name"
              value={searchName}
              onChange={this.onChangeSearchName}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.searchName}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h4>Vacancies List</h4>

          <ul className="list-group">
            {vacancies &&
              vacancies.map((vacancy, index) => (
                <div
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveVacancy(vacancy, index)}
                  key={index}
                >
                  {vacancy.n}. {vacancy.title}
                </div>
              ))}
          </ul>

          <button
            className="ml-0 mt-2 btn btn-danger"
            onClick={this.removeAllVacancies}
          >
            Remove All
          </button>
        </div>
        <div className="col-md-6">
          {currentVacancy ? (
            <div>
              <h4>Vacancy</h4>
              <div>
                <label>
                  <strong>N:</strong>
                </label>{" "}
                {currentVacancy.n}
              </div>
              <div>
                <label>
                  <strong>Title:</strong>
                </label>{" "}
                {currentVacancy.title}
              </div>
              <div>
                <label>
                  <strong>Description:</strong>
                </label>{" "}
                {currentVacancy.description}
              </div>
              <div>
                <label>
                  <strong>Source:</strong>
                </label>{" "}
                <a href={currentVacancy.source}
                   target="_blank" rel="noopener noreferrer">
                    {currentVacancy.source}</a>
              </div>
              <div>
                <label>
                  <strong>Status:</strong>
                </label>{" "}
                {currentVacancy.submitted ? "Submitted" : "Not submitted"}
              </div>

              <Link
                to={"/vacancies/" + currentVacancy.n}
                className="m-0 btn btn-warning"
              >
                Edit
              </Link>
            </div>
          ) : (
            <div>
              <br />
              <p>Please click on a Vacancy...</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}
