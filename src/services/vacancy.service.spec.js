import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import VacancyService from './vacancy.service';

describe('VacancyService', () => {
  let mock;

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.reset();
  });

  it('should get all vacancies', async () => {
    const expectedData = [
                         	{
                         		"n": 1,
                         		"title": "Vacancy 1",
                         		"comment": "",
                         		"company": {
                         		  "n": 1,
                         		  "name": "Company 1",
                         		},
                         		"description": "Description Vacancy 2 Company 1",
                         		"n": 2,
                         		"source": "",
                         		"title": "Vacancy 2 Company 1",
                         	},
                         	{
                         		"n": 2,
                         		"title": "Vacancy 2",
                         		"comment": "",
                         		"company": {
                         		  "n": 2,
                         		  "name": "Company 2",
                         		},
                         		"description": "Description Vacancy 1 Company 2",
                         		"n": 3,
                         		"source": "",
                         		"title": "Vacancy 1 Company 2",
                         	},
                         ];
    mock.onGet('/vacancy/').reply(200, expectedData);

    const result = await VacancyService.getAll();
    console.log("--------------------");
    console.log(result.data);
    console.log("--------------------");
    expect(result.data).toEqual(expectedData);
  });

//  it('should get a vacancy by id', async () => {
//    const expectedData = { id: 1, title: 'Vacancy 1' };
//    mock.onGet('/vacancy/1').reply(200, expectedData);
//
//    const result = await VacancyService.get(1);
//    expect(result.data).toEqual(expectedData);
//  });
//
//  it('should create a vacancy', async () => {
//    const vacancyData = { title: 'New Vacancy' };
//    const expectedData = { id: 3, title: 'New Vacancy' };
//    mock.onPost('/vacancy/').reply(201, expectedData);
//
//    const result = await VacancyService.create(vacancyData);
//    expect(result.data).toEqual(expectedData);
//  });
//
//  it('should update a vacancy', async () => {
//    const vacancyData = { id: 1, title: 'Updated Vacancy' };
//    const expectedData = { id: 1, title: 'Updated Vacancy' };
//    mock.onPost('/vacancy/').reply(200, expectedData);
//
//    const result = await VacancyService.update(1, vacancyData);
//    expect(result.data).toEqual(expectedData);
//  });
//
//  it('should delete a vacancy', async () => {
//    mock.onDelete('/vacancy/1').reply(204);
//
//    const result = await VacancyService.delete(1);
//    expect(result.status).toEqual(204);
//  });
//
//  it('should delete all vacancies', async () => {
//    mock.onDelete('/vacancy').reply(204);
//
//    const result = await VacancyService.deleteAll();
//    expect(result.status).toEqual(204);
//  });

//  it('should find vacancies by title', async () => {
//    const expectedData = [{ id: 1, title: 'Vacancy 1' }, { id: 2, title: 'Vacancy 2' }];
//    mock.onPost('/vacancy/find').reply(200, expectedData);
//
//    const result = await VacancyService.findByTitle('Vacancy');
//    expect(result.data).toEqual(expectedData);
//  });
});
