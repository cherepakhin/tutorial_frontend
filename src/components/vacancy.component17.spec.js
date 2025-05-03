// Эти тесты для for React 17
import React from 'react';
import { render, screen, document } from '@testing-library/react';
//import { createRoot, hydrateRoot } from 'react-dom/client';
import '@testing-library/jest-dom'
// Тут добавляется средство проверки ожиданий
//import 'react-testing-library/extend-expect'
// Mock-объект находится в директории __mocks__
import { VacancyForTest, Vacancy } from "./vacancy.component";

describe('tests vacancy.component FOR REACT 17', () => {
  test('check description render vacancy.component FOR REACT 17', () => {
    let params = {router: {params:{n: "1", name: "NAME_1", description: "DESCRIPTION_1", source: "SOURCE_1"}}};

    let result = render(<VacancyForTest {...params}/>);

    const description = result.container.querySelector('#description');
    expect(description).toBeInTheDocument();
    expect(description).toHaveAttribute('id', "description");
    expect(description).toHaveAttribute('class', "form-control");
    expect(description).toHaveAttribute('type', "text");
    expect(description).toHaveAttribute('value', "");
  });

  test('input for LINK in component (React17)', () => {
    let router = {router: {params: {n: "1", name: "NAME_1", description: "DESCRIPTION_1", source: "SOURCE_1"}}};

//    const container = document.getElementById('root');
//    const root = createRoot(container);

    render(<VacancyForTest {...router}/>);
    const linkElement = screen.getByText(/Описание вакансии/i);

    expect(linkElement).toBeInTheDocument();
  });

  test('find by text (React17)', () => {
    let router = {router: {params: {n: "1", name: "NAME_1", description: "DESCRIPTION_1", source: "SOURCE_1"}}};

    render(<VacancyForTest {...router}/>);

    expect(screen.getByText('Описание вакансии')).toBeInTheDocument();
  });

  test('find by ID (React17)', () => {
    let router = {router: {params: {n: "1", name: "NAME_1", description: "DESCRIPTION_1", source: "SOURCE_1"}}};

    let result = render(<VacancyForTest {...router}/>);

    const title = result.container.querySelector('#id_title');
    expect(title).toBeInTheDocument();
    expect(title.textContent).toEqual('Описание вакансии');
  });

  test('find label by ID (React17)', () => {
    let router = {router: {params: {n: "1", name: "NAME_1", description: "DESCRIPTION_1", source: "SOURCE_1"}}};

    let result = render(<VacancyForTest {...router}/>);

    const title = result.container.querySelector('#id_title_label');
    expect(title).toBeInTheDocument();
    expect(title.textContent).toEqual('Название');
  });

  test('input with id=#description (React17)', () => {
    let params = {router: {params:{n: "1", name: "NAME_1", description: "DESCRIPTION_1", source: "SOURCE_1"}}};

    let result = render(<VacancyForTest {...params}/>);

    const description = result.container.querySelector('#description');
    expect(description).toBeInTheDocument();
    expect(description).toHaveAttribute('id', "description");
    expect(description).toHaveAttribute('class', "form-control");
    expect(description).toHaveAttribute('type', "text");
    expect(description).toHaveAttribute('value', "");
  });
});
