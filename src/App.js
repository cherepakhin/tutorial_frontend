import React, { Component } from "react";
import { Routes, Route, BrowserRouter, useNavigate, useHistory } from "react-router-dom"; // Redux не испольуется. Используется Route.
//import { Link } from "react-router-dom"; // need for variants use case
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddVacancy from "./components/add-vacancy.component"; // Страница ДОБАВЛЕНИЯ вакансии
import FindVacancy from "./components/find_vacancy"; // Страница ОТБОРА вакансии
import Vacancy from "./components/vacancy.component"; // Страница ИЗМЕНЕНИЯ вакансии
import VacancyList from "./components/vacancy-list.component"; // компонент списка вакансий
import HelpPage from "./components/help.component"; // Страница помощи
//import { withRouter } from './common/with-router';


export default class App extends Component {

  constructor(props) {
    super(props);
    console.log("App this.props:");
    console.log(props);
    this.activeBtn = "1"; // TODO: подсвеченная кнопка.
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

{/*Переход работает. ОБЯЗАТЕЛЬНО НУЖЕН файл public/.htaccess*/}
            <a
                    className="btn btn-secondary btn-7em margin-left-space"
                    href="/vacancies/page/add">Добавить</a>


            <button
                id="button-add"
                className="btn btn-secondary btn-7em margin-left-space"
                type="button"
                onClick={(e) => {
                      e.preventDefault();
{/*Клмментарий не удалять.*/}
{/*Переход работает. ОБЯЗАТЕЛЬНО НУЖЕН файл public/.htaccess*/}
{/* В App.js переход через this.props.router.navigate не сработает. */}
{/* И поэтому нужно использовать "window.location.href" */}
{/*                     this.props.router.navigate('/vacancies/add');*/}
                      window.location.href='/vacancies/page/find';
                      }}
                >Выбрать</button>

            <a className="btn btn-secondary btn-7em margin-left-space"
                type="button"
                href="/vacancies/page/help">Помощь</a>



{/*         Неработающие варианты

            <button
                id="button-add"
                className="btn btn-secondary btn-7em margin-left-space"
                type="button"
                onClick={(e) => {
                      e.preventDefault();
                      this.props.router.navigate('/vacancies/page/help');
                      }}
                >Помощь (btn, navigate)</button>

            <button className="button-help"
                onClick={(e) => {
                                  e.preventDefault();
                                  console.log("click Help1 (ok note)");
                                  window.location.href='/vacancies/page/help';
                                  }}>Help1 (ok note)</button>
            <button className="button-help"
                onClick={(e) => {
                                  e.preventDefault();
                                  console.log("Help2 (bad)");
                                  useNavigate('/vacancies/page/help');
                                  }}>Help2 (bad)</button>

            <button className="button-help"
                onClick={this.handleClickHelp3}>Help3 (bad)</button>
            <Link to={"/add"} className="ml-0 mt-2 btn btn-danger btn-7em"
                onClick={ ()=> {window.location.href='/vacancies/page/add';}}
            >Help3</Link>

            <Link to={"/vacancies/page/help"} className="nav-link">Tutorials</Link>
            <button className="button-help" href="/vacancies/page/help">a help</button>

*/}

          </div>
        </nav>

        <div className="container mt-3">
          <BrowserRouter>
              <Routes>
                <Route path="/" element={<VacancyList {...this.props}/>} />
                <Route path="/vacancies" element={<VacancyList {...this.props}/>} />
                <Route path="/vacancies/page/add" element={<AddVacancy {...this.props}/>} />
                <Route path="/vacancies/page/find" element={<FindVacancy {...this.props}/>} />
                <Route path="/vacancies/page/edit/:n" element={<Vacancy {...this.props}/>} />
                <Route path="/vacancies/page/help" element={<HelpPage {...this.props}/>} />
              </Routes>
          </BrowserRouter>
        </div>
      </div>
  );
  }
}
