// for React 17
import React from 'react';
import { render, screen } from '@testing-library/react';
import { createRoot } from 'react-dom/client';
import '@testing-library/jest-dom'
// Тут добавляется средство проверки ожиданий
//import 'react-testing-library/extend-expect'
// Mock-объект находится в директории __mocks__
import { VacancyForTest, Vacancy } from "./vacancy.component";

describe('tests vacancy.component FOR REACT 17', () => {
  test('input for LINK in component (React17)', () => {
    let router = {router:{params: {n: "1", name: "NAME_1", description: "DESCRIPTION_1", source: "SOURCE_1"}}};

//    const container = document.getElementById('root');
//    const root = createRoot(container);

    render(<VacancyForTest {...router}/>);
    const linkElement = screen.getByText(/Описание вакансии/i);

    expect(linkElement).toBeInTheDocument();
  });
});
