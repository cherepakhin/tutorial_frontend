import React, { Component } from "react";
import { withRouter } from '../common/with-router';

export class HelpPage extends Component {

  constructor(props) {
    super(props);
    console.log("HelpPage");
  }

  render() {
    return (
        <div>
           <h5>Страница с описанием программы</h5>
        </div>
        )
  }
}

export {
    HelpPage as HelpPageForTest
};

export default withRouter(HelpPage);