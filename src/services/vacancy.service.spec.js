import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import VacancyService from './vacancy.service';

// Нужно запустить backend. Это !!!ИНТЕГАЦИОННЫЙ ТЕСТ!!!
describe('VacancyService Integration test', () => {
  it('should get all vacancies', async () => {
    const expectedData =  [
                                 {
                                   n: 1,
                                   title: 'Vacancy 1 Company 1',
                                   description: 'Description Vacancy 1 Company 1',
                                   company: { n: 1, name: 'Company 1' },
                                   source: '',
                                   comment: ''
                                 },
                                 {
                                   n: 2,
                                   title: 'Vacancy 2 Company 1',
                                   description: 'Description Vacancy 2 Company 1',
                                   company: { n: 1, name: 'Company 1' },
                                   source: '',
                                   comment: ''
                                 },
                                 {
                                   n: 3,
                                   title: 'Vacancy 1 Company 2',
                                   description: 'Description Vacancy 1 Company 2',
                                   company: { n: 2, name: 'Company 2' },
                                   source: '',
                                   comment: ''
                                 },
                                 {
                                   n: 4,
                                   title: 'Vacancy 2 Company 2',
                                   description: 'Description Vacancy 2 Company 2',
                                   company: { n: 2, name: 'Company 2' },
                                   source: '',
                                   comment: ''
                                 }
                               ];
    const result = await VacancyService.getAll();
    console.log("--------------------");
    console.log(result.data);
    console.log("--------------------");
    expect(result.data).toEqual(expectedData);
  });

  it('should get a vacancy by id', async () => {
    const expectedData = {
                             "n": 2,
                             "title": "Vacancy 2 Company 1",
                             "description": "Description Vacancy 2 Company 1",
                             "comment": "",
                             "source": "TODO",
                             "company": {
                                 "n": 1,
                                 "name": "Company 1"
                             }
                         };
    const result = await VacancyService.get(2);
    expect(result.data).toEqual(expectedData);
  });

  it('should find vacancies by title', async () => {
//    mock.onPost('/vacancy/find').reply(200, expectedData);

    const result = await VacancyService.findByTitle('Vacancy 2 Company 1');
    console.log(result);
    const expectedData = [{
                             "n": 2,
                             "title": "Vacancy 2 Company 1",
                             "description": "Description Vacancy 2 Company 1",
                             "comment": "",
                             "source": "",
                             "company": {
                                 "n": 1,
                                 "name": "Company 1"
                             }
    }];
    expect(result.data).toEqual(expectedData);
  });
});
