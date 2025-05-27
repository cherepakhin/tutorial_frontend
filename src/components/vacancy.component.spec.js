import {React, act} from 'react';
import {render, fireEvent, wait, screen} from '@testing-library/react';

//import axios from "../http-common";
import ReactDOMClient from 'react-dom/client';
import '@testing-library/jest-dom'
// Тут добавляется средство проверки ожиданий
//import 'react-testing-library/extend-expect'
// Mock-объект находится в директории __mocks__
import {VacancyForTest, Vacancy} from "./vacancy.component";


//import sinon from 'sinon'; // sinon - MOCK for http request
//import axiosMock from 'axios';


describe('tests vacancy.component', () => {

//  let sandbox;

//  beforeEach(() => {
//    sandbox = sinon.createSandbox();
//  });
//
//  afterEach(() => {
//    sandbox.restore();
//  });

  it('demo getByTestId', () => {
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

    const { getByTestId } = render(<VacancyForTest {...params}/>);

    const titleElement = getByTestId('title');
    expect(titleElement).toBeInTheDocument();
    expect(titleElement.textContent).toBe("Описание вакансии");

    const labelName = getByTestId('label_name');
    expect(labelName).toBeInTheDocument();
    expect(labelName.textContent).toBe("Название");

    const labelNameById = getByTestId('label_name');
    expect(labelNameById).toBeInTheDocument();
    expect(labelNameById.textContent).toBe("Название");
  });

  it('demo querySelector', () => {
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

    const element = render(<VacancyForTest {...params}/>);
    const titleElement = element.container.querySelector('#id_title_label');

    expect(titleElement.textContent).toBe("Название");
  });

  test('ACT input with id=#description. NOT ASYNC', () => {
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
    let container = document.createElement('div');
    document.body.appendChild(container);

    // ✅ Render the component inside act().
    act(() => {
        ReactDOMClient.createRoot(container).render(<VacancyForTest {...params}/>);
    });
    const description = container.querySelector('#description');

    expect(description).toBeInTheDocument();
    expect(description).toHaveAttribute('id', "description");
    expect(description).toHaveAttribute('class', "form-control");
    expect(description).toHaveAttribute('type', "text");
    expect(description).toHaveAttribute('value', "");
  });

// https://spec-zone.ru/react~18/reference/react/act
//  test('test title (render.getByText)', async () => {
//    let params = {
//        router: {
//            params:{
//                n: "1",
//                name: "NAME_1",
//                description: "DESCRIPTION_1",
//                source: "SOURCE_1"
//            }
//        }
//    };
//
//    let container = document.createElement('div');
//    document.body.appendChild(container);
//
//    await act(() => {
//        ReactDOMClient.createRoot(container).render(<VacancyForTest {...params}/>);
//    });
//
//    const title_label =  container.getByText("Название");
//
//    expect(title_label).toBeInTheDocument();
//  });

  test('ACT input with id=#description', async () => {
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
    let container = document.createElement('div');
    document.body.appendChild(container);

    // ✅ Render the component inside act().
    // await потому что тест async () =>. Можно и без него (смю тесты выше).
    await act(() => {
        ReactDOMClient.createRoot(container).render(<VacancyForTest {...params}/>);
    });
    const description = container.querySelector('#description');

    expect(description).toBeInTheDocument();
    expect(description).toHaveAttribute('id', "description");
    expect(description).toHaveAttribute('class', "form-control");
    expect(description).toHaveAttribute('type', "text");
    expect(description).toHaveAttribute('value', "");

// Example use  container.querySelector
//    const button = container.querySelector('button');
//    const label = container.querySelector('p');
//    expect(label.textContent).toBe('You clicked 0 times');
//    expect(document.title).toBe('You clicked 0 times');
  });

  test('input with id=#description', async () => {

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

    let container = document.createElement('div');
    document.body.appendChild(container);
    await act(() => {
        ReactDOMClient.createRoot(container).render(<VacancyForTest {...params}/>);
    });

    const description = container.querySelector('#description');

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


