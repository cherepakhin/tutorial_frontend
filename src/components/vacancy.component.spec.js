import React from 'react';
import {render, Simulate, wait, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
// Тут добавляется средство проверки ожиданий
//import 'react-testing-library/extend-expect'
// Mock-объект находится в директории __mocks__
import axiosMock from 'axios'
import { VacancyForTest } from "./vacancy.component";
import Vacancy from "./vacancy.component";


describe('tests vacancy.component', () => {
  test('individual test', () => {
    expect(1).toBe(1);
    expect("value").toEqual("value");
    expect(true).toBeTruthy();
  });

  test('array contains item', () => {
    const array = ["item1", "item2"]
    const item = "item1";

    expect(array).toContain(item);
  });

  test('test title (render.getByText)', () => {
    let router = {router:{params: {n: "1", name: "NAME_1", description: "DESCRIPTION_1", source: "SOURCE_1"}}};
    const vacancyComponent = render(<VacancyForTest {...router}/>);

    const title_label = vacancyComponent.getByText("Название");
    expect(title_label).toBeInTheDocument();
  });

  test('test title by id (with vacancyComponent)', () => {
    let router = {router:{params: {n: "1", name: "NAME_1", description: "DESCRIPTION_1", source: "SOURCE_1"}}};
    const vacancyComponent = render(<VacancyForTest {...router}/>);
    const titleById = vacancyComponent.container.querySelector('#id_title_label');
    expect(titleById).toBeInTheDocument();
    expect(titleById.textContent).toBe("Название");
  });

  test('test title by id (with container)', () => {
    let router = {router:{params: {n: "1", name: "NAME_1", description: "DESCRIPTION_1", source: "SOURCE_1"}}};
    const { container } = render(<VacancyForTest {...router}/>);
    const titleById = container.querySelector('#id_title_label');
    expect(titleById).toBeInTheDocument();
    expect(titleById.textContent).toBe("Название");
  });

  test('test title (render.getByText)', () => {
    let router = {router:{params: {n: "1", name: "NAME_1", description: "DESCRIPTION_1", source: "SOURCE_1"}}};
    const vacancyComponent = render(<VacancyForTest {...router}/>);

    const title_label = vacancyComponent.getByText("Название");
    expect(title_label).toBeInTheDocument();
  });

  test('test title querySelector by ID', () => {
    let router = {router:{params: {n: "1", name: "NAME_1", description: "DESCRIPTION_1", source: "SOURCE_1"}}};
    const vacancyComponent = render(<VacancyForTest {...router}/>);

    const titleById = vacancyComponent.container.querySelector('#id_title_label');
    expect(titleById).toBeInTheDocument();
    expect(titleById.textContent).toBe("Название");
  });

  test('test INPUT for title querySelector by ID', () => {
    let router = {router:{params: {n: "1", name: "NAME_1", description: "DESCRIPTION_1", source: "SOURCE_1"}}};
    const vacancyComponent = render(<VacancyForTest {...router}/>);

    const titleInput = vacancyComponent.container.querySelector('#title');
    expect(titleInput).toBeInTheDocument();
    expect(titleInput.value).toBe("");
  });

  test('button BACK check CLASS', () => {
    let router = {router:{params: {n: "1", name: "NAME_1", description: "DESCRIPTION_1", source: "SOURCE_1"}}};
    const vacancyComponent = render(<VacancyForTest {...router}/>);

    const btnReturn = vacancyComponent.container.querySelector('#id_btn_return');
    expect(btnReturn).toBeInTheDocument();
    expect(btnReturn).toHaveClass("btn btn-warning btn-7em text-center margin-left-space");
  });

  test('button BACK check LABEL',() => {
    let router = {router:{params: {n: "1", name: "NAME_1", description: "DESCRIPTION_1", source: "SOURCE_1"}}};
    const vacancyComponent = render(<VacancyForTest {...router}/>);

    const btnReturn = vacancyComponent.container.querySelector('#id_btn_return');
    expect(btnReturn).toBeInTheDocument();
    expect(btnReturn).toHaveTextContent("Назад");
  });

  test('check description render vacancy.component (USED let result = render(...))', () => {
    let router = {router:{params: {n: "1", name: "NAME_1", description: "DESCRIPTION_1", source: "SOURCE_1"}}};

    let result = render(<VacancyForTest {...router}/>);

    const description = result.container.querySelector('#description');
    expect(description).toBeInTheDocument();
    expect(description).toHaveAttribute('id', "description");
    expect(description).toHaveAttribute('class', "form-control");
    expect(description).toHaveAttribute('type', "text");
    expect(description).toHaveAttribute('value', "");
  });

  test('input for LINK in component (USED SCREEN)', () => {
    let router = {router: {params: {n: "1", name: "NAME_1", description: "DESCRIPTION_1", source: "SOURCE_1"}}};

//    const container = document.getElementById('root');
//    const root = createRoot(container);

    render(<VacancyForTest {...router}/>);
    const linkElement = screen.getByText(/Описание вакансии/i);

    expect(linkElement).toBeInTheDocument();
  });

  test('find by text', () => {
    let router = {router: {params: {n: "1", name: "NAME_1", description: "DESCRIPTION_1", source: "SOURCE_1"}}};

    render(<VacancyForTest {...router}/>);

    expect(screen.getByText('Описание вакансии')).toBeInTheDocument();
  });

  test('find by ID', () => {
    let router = {router: {params: {n: "1", name: "NAME_1", description: "DESCRIPTION_1", source: "SOURCE_1"}}};

    // Unfortunately, Enzyme is no longer supported as a testing library
    // for the latest versions of React and the preferred testing library
    // is react-testing-library.
    // https://stackoverflow.com/questions/75962520/how-to-shallow-render-in-react-18
    let result = render(<VacancyForTest {...router}/>);

    const title = result.container.querySelector('#id_title');
    expect(title).toBeInTheDocument();
    expect(title.textContent).toEqual('Описание вакансии');
  });

  test('find label by ID', () => {
    let router = {router: {params: {n: "1", name: "NAME_1", description: "DESCRIPTION_1", source: "SOURCE_1"}}};

    let result = render(<VacancyForTest {...router}/>);

    const title = result.container.querySelector('#id_title_label');
    expect(title).toBeInTheDocument();
    expect(title.textContent).toEqual('Название');
  });

  test('input with id=#description', done => {
    console.log("done1");
    let params = {router: {params:{n: "1", name: "NAME_1", description: "DESCRIPTION_1", source: "SOURCE_1"}}};

    let result = render(<VacancyForTest {...params}/>);

    const description = result.container.querySelector('#description');
    expect(description).toBeInTheDocument();
    expect(description).toHaveAttribute('id', "description");
    expect(description).toHaveAttribute('class', "form-control");
    expect(description).toHaveAttribute('type', "text");
    expect(description).toHaveAttribute('value', "");
    done();
  });

// этот тест для React 16.9. Нужно переписать на версии 17+. см vacancy.component17.spec.js
//  test('input for LINK in component', () => {
//    let router = {router:{params: {n: "1", name: "NAME_1", description: "DESCRIPTION_1", source: "SOURCE_1"}}};
//    const vacancyComponent = render(<VacancyForTest {...router}/>);
//
//    const btnReturn = vacancyComponent.container.querySelector('#vacancy_link');
//    expect(btnReturn).toBeInTheDocument();
//  });
});


