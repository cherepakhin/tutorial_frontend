import React, { Component } from "react";
import { withRouter } from '../common/with-router';

class HelpPage extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>Help</div>
        )
    }
}

export {
    HelpPage as HelpPageForTest
};

export default withRouter(HelpPage);