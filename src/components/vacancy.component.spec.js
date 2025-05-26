import React from 'react';
import {render, Simulate, wait, screen} from '@testing-library/react'
import axios from "../http-common";
import '@testing-library/jest-dom'
// Тут добавляется средство проверки ожиданий
//import 'react-testing-library/extend-expect'
// Mock-объект находится в директории __mocks__
//import axiosMock from 'axios'
import { VacancyForTest } from "./vacancy.component";
//import Vacancy from "./vacancy.component";
//
import sinon from 'sinon'; // sinon - MOCK for http request

describe('tests vacancy.component', () => {

  let sandbox;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
  });

  afterEach(() => {
    sandbox.restore();
  });

  test('individual test', async () => {
    expect(1).toBe(1);
    await expect("value").toEqual("value");
    await expect(true).toBeTruthy();
  });

  test('test title (render.getByText)', async () => {
    let router = {router:{params: {n: "1", name: "NAME_1", description: "DESCRIPTION_1", source: "SOURCE_1"}}};
    const vacancyComponent = render(<VacancyForTest {...router}/>);

    const title_label =  vacancyComponent.getByText("Название");

    await expect(title_label).toBeInTheDocument();
  });

  test('input with id=#description', async () => {
    console.log("done1");
    let params = {
        router: {
            params:{
                n: "1",
                name: "NAME_1",
                description: "DESCRIPTION_1",
                source: "SOURCE_1"
            }
        }
   };

    let result = render(<VacancyForTest {...params}/>);

    const description = result.container.querySelector('#description');

    await expect(description).toBeInTheDocument();
    await expect(description).toHaveAttribute('id', "description");
    await expect(description).toHaveAttribute('class', "form-control");
    await expect(description).toHaveAttribute('type', "text");
    await expect(description).toHaveAttribute('value', "");
  });


//  test('test title by id (with vacancyComponent)', async () => {
//    let router = {router:{params: {n: "1", name: "NAME_1", description: "DESCRIPTION_1", source: "SOURCE_1"}}};
//    const vacancyComponent = render(<VacancyForTest {...router}/>);
//    const titleById = vacancyComponent.container.querySelector('#id_title_label');
//    await expect(titleById).toBeInTheDocument();
//    await expect(titleById.textContent).toBe("Название");
//  });

//  test('test title by id (with container)', async () => {
//    let router = {router:{params: {n: "1", name: "NAME_1", description: "DESCRIPTION_1", source: "SOURCE_1"}}};
//    const { container } = render(<VacancyForTest {...router}/>);
//    const titleById = container.querySelector('#id_title_label');
//    await expect(titleById).toBeInTheDocument();
//    await expect(titleById.textContent).toBe("Название");
//  });
//
//  test('test title (render.getByText)', async () => {
//    let router = {router:{params: {n: "1", name: "NAME_1", description: "DESCRIPTION_1", source: "SOURCE_1"}}};
//    const vacancyComponent = render(<VacancyForTest {...router}/>);
//
//    const title_label = vacancyComponent.getByText("Название");
//    await expect(title_label).toBeInTheDocument();
//  });
//
//  test('test title querySelector by ID', async () => {
//    let router = {router:{params: {n: "1", name: "NAME_1", description: "DESCRIPTION_1", source: "SOURCE_1"}}};
//    const vacancyComponent = render(<VacancyForTest {...router}/>);
//
//    const titleById = vacancyComponent.container.querySelector('#id_title_label');
//    await expect(titleById).toBeInTheDocument();
//    await expect(titleById.textContent).toBe("Название");
//  });
//
//  test('test INPUT for title querySelector by ID', async () => {
//    let router = {router:{params: {n: "1", name: "NAME_1", description: "DESCRIPTION_1", source: "SOURCE_1"}}};
//    const vacancyComponent = render(<VacancyForTest {...router}/>);
//
//    const titleInput = vacancyComponent.container.querySelector('#title');
//    await expect(titleInput).toBeInTheDocument();
//    await expect(titleInput.value).toBe("");
//  });
//
//  test('button BACK check CLASS', async () => {
//    let router = {router:{params: {n: "1", name: "NAME_1", description: "DESCRIPTION_1", source: "SOURCE_1"}}};
//    const vacancyComponent = render(<VacancyForTest {...router}/>);
//
//    const btnReturn = vacancyComponent.container.querySelector('#id_btn_return');
//    await expect(btnReturn).toBeInTheDocument();
//    await expect(btnReturn).toHaveClass("btn btn-warning btn-7em text-center margin-left-space");
//  });
//
//  test('button BACK check LABEL', async () => {
//    let router = {router:{params: {n: "1", name: "NAME_1", description: "DESCRIPTION_1", source: "SOURCE_1"}}};
//    const vacancyComponent = render(<VacancyForTest {...router}/>);
//
//    const btnReturn = vacancyComponent.container.querySelector('#id_btn_return');
//    await expect(btnReturn).toBeInTheDocument();
//    await expect(btnReturn).toHaveTextContent("Назад");
//  });
//
//  test('check description render vacancy.component (USED let result = render(...))', async () => {
//    let router = {router:{params: {n: "1", name: "NAME_1", description: "DESCRIPTION_1", source: "SOURCE_1"}}};
//
//    let result = render(<VacancyForTest {...router}/>);
//
//    const description = result.container.querySelector('#description');
//    await expect(description).toBeInTheDocument();
//    await expect(description).toHaveAttribute('id', "description");
//    await expect(description).toHaveAttribute('class', "form-control");
//    await expect(description).toHaveAttribute('type', "text");
//    await expect(description).toHaveAttribute('value', "");
//  });
//
//  test('input for LINK in component (USED SCREEN)', async () => {
//    let router = {router: {params: {n: "1", name: "NAME_1", description: "DESCRIPTION_1", source: "SOURCE_1"}}};
//
////    const container = document.getElementById('root');
////    const root = createRoot(container);
//
//    render(<VacancyForTest {...router}/>);
//    const linkElement = screen.getByText(/Описание вакансии/i);
//
//    await expect(linkElement).toBeInTheDocument();
//  });

//  test('find by text', async () => {
//    let router = {router: {params: {n: "1", name: "NAME_1", description: "DESCRIPTION_1", source: "SOURCE_1"}}};
//
//    render(<VacancyForTest {...router}/>);
//
//    await expect(screen.getByText('Описание вакансии')).toBeInTheDocument();
//  });
//
//  test('find by ID', async () => {
//    let router = {router: {params: {n: "1", name: "NAME_1", description: "DESCRIPTION_1", source: "SOURCE_1"}}};
//
//    // Unfortunately, Enzyme is no longer supported as a testing library
//    // for the latest versions of React and the preferred testing library
//    // is react-testing-library.
//    // https://stackoverflow.com/questions/75962520/how-to-shallow-render-in-react-18
//    let result = render(<VacancyForTest {...router}/>);
//
//    const title = result.container.querySelector('#id_title');
//
//    await expect(title).toBeInTheDocument();
//    await expect(title.textContent).toEqual('Описание вакансии');
//  });

//  test('find label by ID', async () => {
//    let router = {router: {params: {n: "1", name: "NAME_1", description: "DESCRIPTION_1", source: "SOURCE_1"}}};
//
//    let result = render(<VacancyForTest {...router}/>);
//
//    const title = result.container.querySelector('#id_title_label');
//
//    await expect(title).toBeInTheDocument();
//    await expect(title.textContent).toEqual('Название');
//  });

// этот тест для React 16.9. Нужно переписать на версии 17+. см vacancy.component17.spec.js
//  test('input for LINK in component', () => {
//    let router = {router:{params: {n: "1", name: "NAME_1", description: "DESCRIPTION_1", source: "SOURCE_1"}}};
//    const vacancyComponent = render(<VacancyForTest {...router}/>);
//
//    const btnReturn = vacancyComponent.container.querySelector('#vacancy_link');
//    expect(btnReturn).toBeInTheDocument();
//  });
});


