import VacancyService from './vacancy.service';
import httpMyParam from '../http-common';
import sinon from 'sinon'; // sinon - MOCK for http request

// НЕ нужно запускать backend. Сделан mock на sinon.
describe('VacancyService', () => {
  let sandbox;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('http.get /vacancy/1', () => {
    // Создание stub для http запросов
    // МОКИРУЕТСЯ только HTTP запрос GET с параметрами запроса (адрес, cors) httpMyParam
    // из 'http-common'
    const getStub = sandbox.stub(httpMyParam, 'get');

    // ТЕСТ (parameter 111)
    // VacancyService:
    // get(n) {
    //   console.log("VacancyService.get n=" + n);
    //   return axios.get(`/vacancy/${n}`);
    // }
    VacancyService.get(111);

    // Проверяется что HTTP запрос /vacancy/1 был вызван
    // console.log отработает
    // axios.get(`/vacancy/${n}`) - замокан
    expect(getStub.calledOnceWith('/vacancy/111')).toBe(true);
  });

  it('http.get /vacancy/', async () => {
    const getStub = sandbox.stub(httpMyParam, 'get');
    VacancyService.getAll();
    expect(getStub.calledOnceWith('/vacancy/')).toBe(true);
  });

  it('should get a vacancy by id', async () => {
    const getStub = sandbox.stub(httpMyParam, 'get');

    VacancyService.get(2);

    // Проверка
//    getStub.onCall(0).yields(null, expectedData);
//    getStub.onCall(0).yields(null, {});

    // Проверяется что HTTP запрос /vacancy/2 был вызван
    expect(getStub.calledOnceWith('/vacancy/2')).toBe(true);
  });

  it('create /vacancy/', () => {
    // postStub - mock,stub для http.
    // в vacancy.create использован axios. Axios в http-common.js СОЗДАЕТ http запросчик.
    // И sandbox.stub мокирует именно http requester.
    const postStub = sandbox.stub(httpMyParam, 'post');
    const vacancy = "{n: 100}";
    // Тест VacancyService.create
    VacancyService.create(vacancy);
    // POST запрос был выполнен с параметром "vacancy"
    expect(postStub.calledOnceWith('/vacancy/', vacancy)).toBe(true);
  });

  it('create /vacancy/ with example fakevacancy', () => {
    // postStub - mock,stub для http.
    // в vacancy.create использован axios. Axios в http-common.js СОЗДАЕТ http запросчик.
    // И sandbox.stub мокирует именно http requester.
    const postStub = sandbox.stub(httpMyParam, 'post');
    const vacancy = "{n: 100}";
    // Тест VacancyService.create
    VacancyService.create(vacancy);
    // POST запрос был выполнен с параметром "vacancy"
    expect(postStub.calledOnceWith('/vacancy/', vacancy)).toBe(true);

    // Для примера. С vacancyFake вызовов не было.
    const vacancyFake = "{n: 1}"
    expect(postStub.calledOnceWith('/vacancy/', vacancyFake)).toBe(false);
  });

});
