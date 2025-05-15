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
      currentIndex: 0,
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
    this.retrieveVacancies(); // подгрузить вакансии при монтировании
  }

  onChangeSearchName(e) {
    const searchName = e.target.value;

    this.setState({
      searchName: searchName
    });
  }

  // Загрузка вакансий. VacancyService сервис получения вакансий с backend (Redux не используется).
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

  // Удаление всех вакансий. Не используется. Оставлено для примера.
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

  // Отбор вакансий по названию.
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

  translateStatus(status) {
      if(status === 'in_plan') { return "Не откликался"; }
      if(status === 'in_work') { return "В работе"; }
      if(status === 'deleted') { return "Удалена"; }
      return status;
  }

  render() {
    const { searchName, vacancies, currentVacancy, currentIndex } = this.state;
    console.log("searchName");
    console.log(searchName, vacancies, currentVacancy, currentIndex);
    return (
      <div className="list row">
        <div className="ml-0 pl-0 col-md-8">
          <div className="input-group mb-3">
            <input
              id="input-search-by-name"
              type="text"
              className="form-control"
              placeholder="Найти по названию"
              value={searchName}
              onChange={this.onChangeSearchName}
            />
            <div className="input-group-append">
              <button
                id="button-find"
                className="btn btn-primary btn-7em"
                type="button"
                onClick={this.searchName}
              >
                Найти
              </button>
            </div>
          </div>
        </div>
        <div className="ml-0 pl-0 col-md-6">
          <h4>Список вакансий</h4>

          <ul className="list-group">
            {vacancies.map((vacancy, index) => (
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

          <Link to={"/add"} className="ml-0 mt-2 btn btn-danger btn-7em"
            onClick={ ()=> window.location.href='/vacancy/add'}
          >
            Добавить
          </Link>
        </div>
        <div className="col-md-6">
          {currentVacancy ? (
            <div>
              <h4>Описание</h4>
              <div>
                <label>
                  <strong>N:</strong>
                  {" "}
                  {currentVacancy.n}
                </label>
              </div>
              <div>
                <label>
                  <strong>Название:</strong>
                  {" "}
                  {currentVacancy.title}
                </label>
              </div>
              <div>
                <label>
                  <strong>Описание:</strong>
                  {" "}
                  {currentVacancy.description}
                </label>
              </div>
              <div>
                <label>
                  <strong>Источник:</strong>
                  {" "}
                  <a href={currentVacancy.source}
                                     target="_blank" rel="noopener noreferrer">
                                      {currentVacancy.source}</a>
                </label>
              </div>
              <div>
                <label>
                  <strong>Статус:</strong>
                  {" "}
                  {this.translateStatus(currentVacancy.status)}
                </label>
              </div>

              <Link
                to={"/vacancies/" + currentVacancy.n}
                className="btn btn-warning btn-7em"
              >
                Изменить
              </Link>
            </div>
          ) : (
            <div>
              <br />
              <p>Нажми на вакансию...</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}
