import VacancyService from './vacancy.service.js';
import http from '../http-common';
import sinon from 'sinon'; // sinon - MOCK for http request

describe('VacancyService', () => {
  let sandbox;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('VacancyService.getAll called http get', () => {
    const httpStub = sandbox.stub(http, 'get');
    VacancyService.getAll();
    expect(httpStub.calledOnceWith('/vacancy/')).toBe(true);
  });

  it('VacancyService.get(N) called http get', () => {
    const httpStub = sandbox.stub(http, 'get');
    let VACANCY_N = 1;
    VacancyService.get(VACANCY_N);
    expect(httpStub.calledOnceWith('/vacancy/1')).toBe(true);
  });

  it('VacancyService.findByTitle. Check service call.', () => {
    const httpStub = sandbox.stub(http, 'post');
    VacancyService.findByTitle('Test');
    expect(httpStub.calledOnceWith('/vacancy/find')).toBe(true);
  });

  it('VacancyService.create', () => {
    const httpStub = sandbox.stub(http, 'post');
    const data = { title: 'Test', description: 'Test' };
    VacancyService.create(data);
    expect(httpStub.calledOnceWith('/vacancy/', data)).toBe(true);
  });

  it('VacancyService.update', () => {
    const httpStub = sandbox.stub(http, 'post');
    const data = { title: 'Test', description: 'Test' };
    VacancyService.update(1, data);
    expect(httpStub.calledOnceWith('/vacancy/1', data)).toBe(true);
  });

  it('VacancyService.delete(1)', () => {
    const httpStub = sandbox.stub(http, 'delete');
    VacancyService.delete(1);
    expect(httpStub.calledOnceWith('/vacancy/1')).toBe(true);
  });

  it('VacancyService.deleteAll()', () => {
    const deleteStub = sandbox.stub(http, 'delete');
    VacancyService.deleteAll();
    expect(deleteStub.calledOnceWith('/vacancy')).toBe(true);
  });

  it('VacancyService.findByTitle()', () => {
    const httpStub = sandbox.stub(http, 'post');
    let title = "TITLE";
    let criterySearch = {
        "byName": title
    };

    VacancyService.findByTitle(title);
    expect(httpStub.calledOnceWith('/vacancy/find', criterySearch)).toBe(true);
  });

});
