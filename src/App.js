import React, { Component } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom"; // Redux не испольуется. Используется Route.
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddVacancy from "./components/add-vacancy.component"; // Страница ДОБАВЛЕНИЯ вакансии
import Vacancy from "./components/vacancy.component"; // Страница ИЗМЕНЕНИЯ вакансии
import VacancyList from "./components/vacancy-list.component"; // компонент списка вакансий
import HelpPage from "./components/help.component"; // Страница помощи
//import { withRouter } from './common/with-router';

class App extends Component {

  constructor(props) {
    super(props);
    console.log("App this.props:");
    console.log(props); // {}
    this.activeBtn = "1";
  }

  render() {
    console.log(this);
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">

          <div className="navbar-nav mr-auto">
            <button
                id="button-find"
                className="btn btn-primary btn-7em"
                type="button"
                onClick={(e) => {
                      e.preventDefault();
                      window.location.href='/vacancies';
                      }}
                >Вакансии</button>

            <button
                id="button-add"
                className="btn btn-secondary btn-7em margin-left-space"
                type="button"
                onClick={(e) => {
                      e.preventDefault();
                      window.location.href='/vacancies/add';
                      }}
                >Добавить</button>

            <button
                id="button-help"
                className="btn btn-secondary btn-7em margin-left-space"
                type="button"
                onClick={(e) => {
                      e.preventDefault();
                      window.location.href='/vacancies/help';
                      }}
                >Помощь</button>
          </div>
        </nav>

        <div className="container mt-3">
          <BrowserRouter>
              <Routes>
                <Route path="/" element={<VacancyList {...this.props}/>} />
                <Route path="/vacancies" element={<VacancyList {...this.props}/>} />
                <Route path="/vacancies/add" element={<AddVacancy {...this.props}/>} />
                <Route path="/vacancies/:n" element={<Vacancy {...this.props}/>} />
                <Route path="/vacancies/help" element={<HelpPage {...this.props}/>} />
              </Routes>
          </BrowserRouter>
        </div>
      </div>
  );
  }
}

//export default withRouter(App);
export default App;
