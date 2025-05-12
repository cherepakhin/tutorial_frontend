import { Routes, Route, BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddVacancy from "./components/add-vacancy.component";
import Vacancy from "./components/vacancy.component";
import VacancyList from "./components/vacancy-list.component";
import HelpPage from "./components/help.component";

function App() {

  return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">

          <div className="navbar-nav mr-auto">
            <button
                id="button-find"
                className="btn btn-primary btn-8em"
                type="button"
                onClick={(e) => {
                      e.preventDefault();
                      window.location.href='/vacancy';
                      }}
                >Вакансии</button>

            <button
                id="button-add"
                className="btn btn-secondary btn-8em margin-left-space"
                type="button"
                onClick={(e) => {
                      e.preventDefault();
                      window.location.href='/vacancy/add';
                      }}
                >Добавить</button>

            <button
                id="button-help"
                className="btn btn-secondary btn-8em margin-left-space"
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
                <Route path="/vacancy" element={<VacancyList/>} />
                <Route path="/vacancy/add" element={<AddVacancy/>} />
                <Route path="/vacancies/:n" element={<Vacancy/>} />
                <Route path="/vacancy/help" element={<HelpPage/>} />
              </Routes>
          </BrowserRouter>
        </div>
      </div>
  );
}


export default App;
