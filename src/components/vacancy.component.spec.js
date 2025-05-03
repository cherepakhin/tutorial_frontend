import React from 'react';
import {render, Simulate, wait, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
// Тут добавляется средство проверки ожиданий
//import 'react-testing-library/extend-expect'
// Mock-объект находится в директории __mocks__
import axiosMock from 'axios'
import { VacancyForTest } from "./vacancy.component";


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
//    let vacancy = {n: "N", name: "NAME", description: "DESCRIPTION", source: "SOURCE"};
//    let prms = {params: {n: "100", name: "NAME_100", description: "DESCRIPTION_100", source: "SOURCE_100"}};
    let router = {router:{params: {n: "100", name: "NAME_100", description: "DESCRIPTION_100", source: "SOURCE_100"}}};
      const result = render(<VacancyForTest {...router}/>);

    const title = result.getByText("Название");
    expect(title).toBeInTheDocument();

    const titleById = result.container.querySelector('#id_title_label');
//    const titleById = getById("#id_title_label");
    expect(titleById).toBeInTheDocument();
  });

//  test('test title (render.querySelector)', () => {
//    let router = {
//      router:{
//        params: {
//          "n": 1,
//          "title": "Title 1",
//          "description": "Description 1",
//          "company": {
//            "n": 10,
//            "name": "Company 1"
//          },
//          "source": "Source1",
//          "comment": "Comment1"
//        }
//      }
//    };
//
//    const component = render (
//        <VacancyForTest {...router}/>,
//    );
//    const title = component.container.querySelector('#id_title_label');
//    expect(title).toBeInTheDocument();
//    expect(title).toBe("");
//  })

});


