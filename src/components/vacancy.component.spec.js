import React from 'react';
import {render, Simulate, wait, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
// Тут добавляется средство проверки ожиданий
//import 'react-testing-library/extend-expect'
// Mock-объект находится в директории __mocks__
import axiosMock from 'axios'
import { VacancyForTest, Vacancy } from "./vacancy.component";


describe('Try react-testing-library', () => {
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
    let router = {router:{params: {n: "100", name: "NAME_100", description: "DESCRIPTION_100", source: "SOURCE_100"}}};
    const result = render(<VacancyForTest {...router}/>);

    const title_label = result.getByText("Название");
    expect(title_label).toBeInTheDocument();
  });

  test('test title by id', () => {
    let router = {router:{params: {n: "100", name: "NAME_100", description: "DESCRIPTION_100", source: "SOURCE_100"}}};
    const result = render(<VacancyForTest {...router}/>);

    const titleById = result.container.querySelector('#id_title_label');
    expect(titleById).toBeInTheDocument();
    expect(titleById.textContent).toBe("Название");
  });


//    const titleById = result.container.querySelector('#id_title_label');
//    expect(titleById).toBeInTheDocument();
//    expect(titleById.textContent).toBe("Название");
//
//    const titleInput = result.container.querySelector('#title');
//    expect(titleInput).toBeInTheDocument();


  test('test title (render.getByText)', () => {
    let router = {router:{params: {n: "100", name: "NAME_100", description: "DESCRIPTION_100", source: "SOURCE_100"}}};
    const result = render(<VacancyForTest {...router}/>);

    const title_label = result.getByText("Название");
    expect(title_label).toBeInTheDocument();
  });

  test('test title querySelector by ID', () => {
    let router = {router:{params: {n: "100", name: "NAME_100", description: "DESCRIPTION_100", source: "SOURCE_100"}}};
    const result = render(<VacancyForTest {...router}/>);

    const titleById = result.container.querySelector('#id_title_label');
    expect(titleById).toBeInTheDocument();
    expect(titleById.textContent).toBe("Название");
  });

  test('test INPUT for title querySelector by ID', () => {
    let router = {router:{params: {n: "1", name: "NAME_100", description: "DESCRIPTION_100", source: "SOURCE_100"}}};
    const result = render(<VacancyForTest {...router}/>);

    const titleInput = result.container.querySelector('#title');
    expect(titleInput).toBeInTheDocument();
    expect(titleInput.value).toBe("");
  });

  test('button BACK check CLASS', () => {
    let router = {router:{params: {n: "1", name: "NAME_100", description: "DESCRIPTION_100", source: "SOURCE_100"}}};
    const result = render(<VacancyForTest {...router}/>);

    const btnReturn = result.container.querySelector('#id_btn_return');
    expect(btnReturn).toBeInTheDocument();
    expect(btnReturn).toHaveClass("btn btn-warning btn-7em text-center");
  });

  test('button BACK check LABEL', () => {
    let router = {router:{params: {n: "1", name: "NAME_100", description: "DESCRIPTION_100", source: "SOURCE_100"}}};
    const result = render(<VacancyForTest {...router}/>);

    const btnReturn = result.container.querySelector('#id_btn_return');
    expect(btnReturn).toBeInTheDocument();
    expect(btnReturn).toHaveTextContent("Вернуться");
  });

});


