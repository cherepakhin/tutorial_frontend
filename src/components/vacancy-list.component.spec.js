import React from 'react';
import {render, Simulate, wait, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
// Тут добавляется средство проверки ожиданий
//import 'react-testing-library/extend-expect'
// Mock-объект находится в директории __mocks__
import axiosMock from 'axios'
import { Vacancy } from "./vacancy.component";
import { VacancyList } from "./vacancy-list.component";


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

  test('test title', () => {
    let vacancy = {n: "N", name: "NAME", description: "DESCRIPTION", source: "SOURCE"};
    let prms = {params: {n: "100", name: "NAME_100", description: "DESCRIPTION_100", source: "SOURCE_100"}};
    let router = {router:{params: {n: "100", name: "NAME_100", description: "DESCRIPTION_100", source: "SOURCE_100"}}};
      const {
        getByText
      } = render(<Vacancy {...router}/>);

//      console.log(getById); // undefined
//      console.log(screen.getById); // undefined
//      console.log(screen.getById('title')); //  _react2.screen.getById is not a function
//      screen.getById('title');
//      expect(getById('title')).toHaveBeenCalledWith({n:"", name:"", description:"", source:""});
//    const inputElement = getById('description');
    const title=getByText("Название");
    expect(title).toBeInTheDocument();
  })
});


