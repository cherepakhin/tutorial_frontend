// import ShallowRenderer from 'react-test-renderer/shallow'; // Cannot find module 'react-test-renderer/shallow'
//import ShallowRenderer from 'react-shallow-renderer'; // Cannot find module 'react-shallow-renderer'

describe('shallow tests vacancy.component', () => {
  it('individual test shallow', () => {
           expect(1).toBe(1);
           expect("value1").toEqual("value1");
           expect(true).toBeTruthy();
  });

//  it('test title (shallow.getByText)', () => {
//    // enzyme больше не поддерживается. нужно использовать react-testing-library
//    var ShallowRenderer = require('react-test-renderer/shallow');
//    const renderer = new ShallowRenderer();
//    let router = {router:{params: {n: "1", name: "NAME_1", description: "DESCRIPTION_1", source: "SOURCE_1"}}};
//    const vacancyComponent = renderer.render(<VacancyForTest {...router}/>);
//
//    const title_label = vacancyComponent.getByText("Название");
//    expect(title_label).toBeInTheDocument();
//  });

});
