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
