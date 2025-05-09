import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter } from 'react-router-dom';

import AddVacancy from "./components/add-vacancy.component";
import Vacancy from "./components/vacancy.component";
import VacancyList from "./components/vacancy-list.component";

function App() {
  return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">

          <div className="navbar-nav mr-auto">
            <li className="nav-item">
            </li>
            <li className="nav-item">
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <BrowserRouter>
              <Routes>
                <Route path="/" element={<VacancyList/>} />
                <Route path="/vacancy" element={<VacancyList/>} />
                <Route path="/add" element={<AddVacancy/>} />
                <Route path="/vacancies/:n" element={<Vacancy/>} />
              </Routes>
          </BrowserRouter>
        </div>
      </div>
  );
}


export default App;
