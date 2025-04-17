import TutorialDataService from './tutorial.service.js';
import http from '../http-common';
import sinon from 'sinon';

describe('TutorialDataService', () => {
  let sandbox;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('should call http.get with correct url when getAll is called', () => {
    const getStub = sandbox.stub(http, 'get');
    TutorialDataService.getAll();
    expect(getStub.calledOnceWith('/tutorial/')).toBe(true);
  });

  it('should call http.get with correct url when get is called', () => {
    const getStub = sandbox.stub(http, 'get');
    TutorialDataService.get(1);
    expect(getStub.calledOnceWith('/tutorial/1')).toBe(true);
  });

  it('should call http.get with correct url when findByTitle is called', () => {
    const getStub = sandbox.stub(http, 'get');
    TutorialDataService.findByTitle('Test');
    expect(getStub.calledOnceWith('/tutorial/by_title/Test')).toBe(true);
  });

  it('should call http.post with correct url and data when create is called', () => {
    const postStub = sandbox.stub(http, 'post');
    const data = { title: 'Test', description: 'Test' };
    TutorialDataService.create(data);
    expect(postStub.calledOnceWith('/tutorial/', data)).toBe(true);
  });

  it('should call http.post with correct url and data when update is called', () => {
    const postStub = sandbox.stub(http, 'post');
    const data = { title: 'Test', description: 'Test' };
    TutorialDataService.update(1, data);
    expect(postStub.calledOnceWith('/tutorial/1', data)).toBe(true);
  });

  it('should call http.delete with correct url when delete is called', () => {
    const deleteStub = sandbox.stub(http, 'delete');
    TutorialDataService.delete(1);
    expect(deleteStub.calledOnceWith('/tutorial/1')).toBe(true);
  });

  it('should call http.delete with correct url when deleteAll is called', () => {
    const deleteStub = sandbox.stub(http, 'delete');
    TutorialDataService.deleteAll();
    expect(deleteStub.calledOnceWith('/tutorial')).toBe(true);
  });

});
