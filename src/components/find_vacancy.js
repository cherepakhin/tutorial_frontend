import React, { Component } from "react";
import VacancyService from "../services/vacancy.service";
import { withRouter } from '../common/with-router';

class FindVacancy extends Component {
  constructor(props) {
    super(props);

    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.doSelectVacancy = this.doSelectVacancy.bind(this);
    this.doCancel = this.doCancel.bind(this);
    this.handleChangeStatus = this.handleChangeStatus.bind(this);

    this.state = {
      title: "",
      description: "", 
      status: ""
    };
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  handleChangeStatus(event) {
    console.log('Выбрано: ' + event.target.value);
    this.setState({
      status: event.target.value
    });
  };

  doSelectVacancy() {
    //TODO
    console.log(JSON.stringify(this.state));
    // пример: {"title":"","description":"","status":"in_work"}

    this.props.router.navigate('/vacancies');
  }

  doCancel() {
    console.log("doCancel");
    this.props.router.navigate('/vacancies');
  }

  render() {
    return (
      <div className="submit-form">
          <div>
            <div className="form-group">
              <label htmlFor="title">Название</label>
              <input
                type="text"
                className="form-control"
                id="title"
                required
                value={this.state.title}
                onChange={this.onChangeTitle}
                name="title"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Описание</label>
              <input
                type="text"
                className="form-control"
                id="description"
                required
                value={this.state.description}
                onChange={this.onChangeDescription}
                name="description"
              />
            </div>
            <div className="form-group">
              <label htmlFor="status_select">Состояние:</label>
              <select id="status_select" className="form-control" value={this.state.status} onChange={this.handleChangeStatus}>
                <option value="all">Все</option>
                <option value="in_work">В работе</option>
                <option value="in_plan">Не откликался</option>
                <option value="deleted">Удалена</option>
              </select>
            </div>

            <button
                className="btn btn-success btn-7em"
                onClick={this.doSelectVacancy}>
              Выбрать
            </button>
            <button
                  type="submit"
                  id="id_btn_return"
                  className="btn btn-warning btn-7em text-center margin-left-space"
                  onClick={this.doCancel}
            >Отмена</button>
          </div>
      </div>
    );
  }
}

export {
    FindVacancy as FindVacancyForTest
};

export default withRouter(FindVacancy);