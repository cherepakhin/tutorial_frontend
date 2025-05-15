import React, { Component } from "react";
import VacancyService from "../services/vacancy.service";
import { withRouter } from '../common/with-router';

class AddVacancy extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeSource = this.onChangeSource.bind(this);
    this.saveVacancy = this.saveVacancy.bind(this);
    this.newVacancy = this.newVacancy.bind(this);
    this.goBack = this.goBack.bind(this);

    this.state = {
      n: -1,
      title: "",
      description: "", 
      published: false,
      source: "",
      submitted: false
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

  onChangeSource(e) {
    this.setState({
      source: e.target.value
    });
  }

  saveVacancy() {
    let data = {
      title: this.state.title,
      description: this.state.description,
      source: this.state.source,
      published: this.state.published,
      submitted: this.state.submitted
    };

    VacancyService.create(data)
      .then(response => {
        this.setState({
          n: response.data.n,
          title: response.data.title,
          description: response.data.description,
          link: response.data.link,
          published: response.data.published,
          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newVacancy() {
    this.setState({
      n: null,
      title: "",
      description: "",
      link: "",
      published: false,
      submitted: false
    });
  }

  goBack() {
    console.log("goBack");
    this.props.router.navigate('/vacancies');
  }

  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newVacancy}>
              Add
            </button>
          </div>
        ) : (
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
              <label htmlFor="link">Источник</label>
              <input
                type="text"
                className="form-control"
                id="sourceVacancy"
                required
                value={this.state.source}
                onChange={this.onChangeSource}
                name="sourceVacancy"
              />
            </div>

            <button
                className="btn btn-success btn-7em"
                onClick={this.saveVacancy}>
              Сохранить
            </button>
            <button
                  type="submit"
                  id="id_btn_return"
                  className="btn btn-warning btn-7em text-center margin-left-space"
                  onClick={this.goBack}
            >Вернуться</button>
          </div>
        )}
      </div>
    );
  }
}

export {
    AddVacancy as AddVacancyForTest
};

export default withRouter(AddVacancy);