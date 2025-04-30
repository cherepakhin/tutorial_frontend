import React, { Component } from "react";
import VacancyService from "../services/vacancy.service";
import { withRouter } from '../common/with-router';

class Vacancy extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.getVacancy = this.getVacancy.bind(this);

    this.updateVacancy = this.updateVacancy.bind(this);
    this.deleteVacancy = this.deleteVacancy.bind(this);
    this.onChangeSource = this.onChangeSource.bind(this);
    this.onChangeStatus = this.onChangeStatus.bind(this);
    this.handleChangeStatus = this.handleChangeStatus.bind(this);

    this.state = {
      currentVacancy: {
        n: null,
        name: "",
        description: "",
        source: "",
      },
      message: "",
      fruit: 'coconut'
    };
  }

  componentDidMount() {
    console.log(this.props);
    this.getVacancy(this.props.router.params.n);
  }

  onChangeTitle(e) {
    console.log(e.target.value);
    const name = e.target.value;

    this.setState(function(prevState) {
      return {
        currentVacancy: {
          ...prevState.currentVacancy,
          title: name
        }
      };
    });
  }

  onChangeDescription(e) {
    const description = e.target.value;
    
    this.setState(prevState => ({
      currentVacancy: {
        ...prevState.currentVacancy,
        description: description
      }
    }));
  }

  onChangeSource(e) {
    console.log(e);
    const source = e.target.value;

    this.setState(prevState => ({
      currentVacancy: {
        ...prevState.currentVacancy,
        source: source
      }
    }));
  }

  getVacancy(n) {
    console.log(n);
    VacancyService.get(n)
      .then(response => {
        this.setState({
          currentVacancy: response.data
        });
//        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  onChangeStatus(status) {
    console.log("status");
    console.log(status);
//        const source = e.target.value;

    this.setState(prevState => ({
      currentVacancy: {
        ...prevState.currentVacancy,
        status: status
      }
    }));

//    let data = {
//      n: this.state.currentVacancy.n,
//      title: this.state.currentVacancy.title,
//      link: this.state.currentVacancy.link,
//      description: this.state.currentVacancy.description,
//      submitted: status
//    };

//    VacancyService.update(this.state.currentVacancy.n, data)
//      .then(response => {
//        console.log(response);
//        console.log(status);
//        this.setState(prevState => ({
//          currentVacancy: {
//            ...prevState.currentVacancy,
//            published: status
//          }
//        }));
//        console.log(response.data);
//      })
//      .catch(e => {
//        console.log(e);
//      });
//
//    this.setState(function(newState) {
//      return {
//        currentVacancy: {
//          ...newState.currentVacancy
//        }
//      };
//    });

  }

  updateVacancy() {
    VacancyService.update(
      this.state.currentVacancy.n,
      this.state.currentVacancy
    )
      .then(response => {
        console.log(response.data);
        this.setState({
          message: "Обновлено."
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  handleChangeStatus(event) {
//    this.setState({
//      status: event.target.value
//    });
//    alert('Выбрано: ' + event.target.value);
    console.log('Выбрано: ' + event.target.value)
    event.preventDefault();
    this.setState(prevState => ({
      currentVacancy: {
        ...prevState.currentVacancy,
        status: event.target.value
      }
    }));

  }

  deleteVacancy() {
    VacancyService.delete(this.state.currentVacancy.n)
      .then(response => {
        console.log(response.data);
        // Переход на страницу со списком
        this.props.router.navigate('/vacancy');
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { currentVacancy } = this.state;

    return (
      <div>
        {currentVacancy ? (
          <div className="edit-form">
            <h4>Описание вакансии</h4>
            <form>
              <div className="form-group">
                <label htmlFor="title">Название</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  value={currentVacancy.title}
                  onChange={this.onChangeTitle}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Описание</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  value={currentVacancy.description}
                  onChange={this.onChangeDescription}
                />
              </div>
              <div className="form-group">
                <label htmlFor="link">Источник</label>
                <input
                  type="text"
                  className="form-control"
                  id="link"
                  value={currentVacancy.source}
                  onChange={this.onChangeSource}
                />
              </div>
              <div className="form-group">
                <label htmlFor="status_select">Состояние:</label>
                 <select id="status_select" className="form-control" value={this.state.status} onChange={this.handleChangeStatus}>
                   <option value="in_work">В работе</option>
                   <option value="in_plan">Не откликался</option>
                   <option value="deleted">Удалена</option>
                 </select>
              </div>
            </form>
            <div className="btn-toolbar">
                <button
                  className="btn btn-danger mr-2 btn-7em"
                  onClick={this.deleteVacancy}
                >
                  Удалить
                </button>

                <button
                  type="submit"
                  className="btn btn-primary btn-7em"
                  onClick={this.updateVacancy}
                >
                  Сохранить
                </button>
            </div>
            <div className="mt-2">{this.state.message}</div>
          </div>
        ) : (
          <div>
            <br />
            <p>Выбери вакансию...</p>
          </div>
        )}
      </div>
    );
  }
}
export {Vacancy};
export default withRouter(Vacancy);