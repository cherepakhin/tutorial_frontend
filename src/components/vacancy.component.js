import React, { Component } from "react";
import VacancyService from "../services/vacancy.service";
import { withRouter } from '../common/with-router';

class Vacancy extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.getVacancy = this.getVacancy.bind(this);

    this.updateSubmitted = this.updateSubmitted.bind(this);
    this.updateVacancy = this.updateVacancy.bind(this);
    this.deleteVacancy = this.deleteVacancy.bind(this);
    this.onChangeSource = this.onChangeSource.bind(this);

    this.state = {
      currentVacancy: {
        n: null,
        name: "",
        description: "",
        source: "",
        submitted: false
      },
      message: ""
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

  updateSubmitted(status) {
    let data = {
      n: this.state.currentVacancy.n,
      title: this.state.currentVacancy.title,
      link: this.state.currentVacancy.link,
      description: this.state.currentVacancy.description,
      submitted: status
    };

    VacancyService.update(this.state.currentVacancy.n, data)
      .then(response => {
        console.log(response);
        console.log(status);
        this.setState(prevState => ({
          currentVacancy: {
            ...prevState.currentVacancy,
            published: status
          }
        }));
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });

    this.setState(function(newState) {
      return {
        currentVacancy: {
          ...newState.currentVacancy
        }
      };
    });

  }

  updateVacancy() {
    VacancyService.update(
      this.state.currentVacancy.n,
      this.state.currentVacancy
    )
      .then(response => {
        console.log(response.data);
        this.setState({
          message: "The tutorial was updated successfully!"
        });
      })
      .catch(e => {
        console.log(e);
      });
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
            <h4>Vacancy</h4>
            <form>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  value={currentVacancy.title}
                  onChange={this.onChangeTitle}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  value={currentVacancy.description}
                  onChange={this.onChangeDescription}
                />
              </div>
              <div className="form-group">
                <label htmlFor="link">Link</label>
                <input
                  type="text"
                  className="form-control"
                  id="link"
                  value={currentVacancy.source}
                  onChange={this.onChangeSource}
                />
              </div>

              <div className="form-group">
                <label>
                  <strong>Status:&nbsp;&nbsp;</strong>
                </label>
                {currentVacancy.submitted ? "Submitted" : "UnSubmitted"}
              </div>
            </form>

            {currentVacancy.submitted ? (
              <button
                className="btn btn-primary mr-2"
                onClick={() => this.updateSubmitted(false)}
              >
                UnSubmit
              </button>
            ) : (
              <button
                className="btn btn-primary mr-2"
                onClick={() => this.updateSubmitted(true)}
              >
                Submit
              </button>
            )}

            <button
              className="btn btn-danger mr-2"
              onClick={this.deleteVacancy}
            >
              Delete
            </button>

            <button
              type="submit"
              className="btn btn-warning"
              onClick={this.updateVacancy}
            >
              Update
            </button>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Vacancy...</p>
          </div>
        )}
      </div>
    );
  }
}
export {Vacancy};
export default withRouter(Vacancy);