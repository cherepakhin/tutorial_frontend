import { Routes, Route, BrowserRouter } from "react-router-dom"; // Redux не испольуется. Используется Route.
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddVacancy from "./components/add-vacancy.component"; // Страница ДОБАВЛЕНИЯ вакансии
import Vacancy from "./components/vacancy.component"; // Страница ИЗМЕНЕНИЯ вакансии
import VacancyList from "./components/vacancy-list.component"; // компонент списка вакансий
import HelpPage from "./components/help.component"; // Страница помощи

function App() {

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
                      window.location.href='/vacancy/help';
                      }}
                >Помощь</button>
          </div>
        </nav>

        <div className="container mt-3">
          <BrowserRouter>
              <Routes>
                <Route path="/" element={<VacancyList/>} />
                <Route path="/vacancies" element={<VacancyList/>} />
                <Route path="/vacancies/add" element={<AddVacancy/>} />
                <Route path="/vacancies/:n" element={<Vacancy/>} />
                <Route path="/vacancies/help" element={<HelpPage/>} />
              </Routes>
          </BrowserRouter>
        </div>
      </div>
  );
}


export default App;
