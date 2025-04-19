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

  it('should call http.get with correct url when getAll is called', () => {
    const getStub = sandbox.stub(http, 'get');
    VacancyService.getAll();
    expect(getStub.calledOnceWith('/vacancy/')).toBe(true);
  });

  it('should call http.get with correct url when get is called', () => {
    const getStub = sandbox.stub(http, 'get');
    VacancyService.get(1);
    expect(getStub.calledOnceWith('/vacancy/1')).toBe(true);
  });

  it('should call http.get with correct url when findByTitle is called', () => {
    const getStub = sandbox.stub(http, 'get');
    VacancyService.findByTitle('Test');
    expect(getStub.calledOnceWith('/vacancy/by_title/Test')).toBe(true);
  });

  it('should call http.post with correct url and data when create is called', () => {
    const postStub = sandbox.stub(http, 'post');
    const data = { title: 'Test', description: 'Test' };
    VacancyService.create(data);
    expect(postStub.calledOnceWith('/vacancy/', data)).toBe(true);
  });

  it('should call http.post with correct url and data when update is called', () => {
    const postStub = sandbox.stub(http, 'post');
    const data = { title: 'Test', description: 'Test' };
    VacancyService.update(1, data);
    expect(postStub.calledOnceWith('/vacancy/1', data)).toBe(true);
  });

  it('should call http.delete with correct url when delete is called', () => {
    const deleteStub = sandbox.stub(http, 'delete');
    VacancyService.delete(1);
    expect(deleteStub.calledOnceWith('/vacancy/1')).toBe(true);
  });

  it('should call http.delete with correct url when deleteAll is called', () => {
    const deleteStub = sandbox.stub(http, 'delete');
    VacancyService.deleteAll();
    expect(deleteStub.calledOnceWith('/vacancy')).toBe(true);
  });

});
