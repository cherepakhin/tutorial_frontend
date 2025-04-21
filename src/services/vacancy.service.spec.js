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
    const getStub = sandbox.stub(http, 'get');
    VacancyService.getAll();
    expect(getStub.calledOnceWith('/vacancy/')).toBe(true);
  });

  it('VacancyService.get(N) called http get', () => {
    const getStub = sandbox.stub(http, 'get');
    let VACANCY_N = 1;
    VacancyService.get(VACANCY_N);
    expect(getStub.calledOnceWith('/vacancy/1')).toBe(true);
  });

  it('VacancyService.findByTitle. Check service call.', () => {
    const getStub = sandbox.stub(http, 'post');
    VacancyService.findByTitle('Test');
    expect(getStub.calledOnceWith('/vacancy/find')).toBe(true);
  });

  it('VacancyService.create', () => {
    const postStub = sandbox.stub(http, 'post');
    const data = { title: 'Test', description: 'Test' };
    VacancyService.create(data);
    expect(postStub.calledOnceWith('/vacancy/', data)).toBe(true);
  });

  it('VacancyService.update', () => {
    const postStub = sandbox.stub(http, 'post');
    const data = { title: 'Test', description: 'Test' };
    VacancyService.update(1, data);
    expect(postStub.calledOnceWith('/vacancy/1', data)).toBe(true);
  });

  it('VacancyService.delete(1)', () => {
    const deleteStub = sandbox.stub(http, 'delete');
    VacancyService.delete(1);
    expect(deleteStub.calledOnceWith('/vacancy/1')).toBe(true);
  });

  it('VacancyService.deleteAll()', () => {
    const deleteStub = sandbox.stub(http, 'delete');
    VacancyService.deleteAll();
    expect(deleteStub.calledOnceWith('/vacancy')).toBe(true);
  });

});
