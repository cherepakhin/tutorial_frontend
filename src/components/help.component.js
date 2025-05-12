import React, { Component } from "react";
import { withRouter } from '../common/with-router';

class HelpPage extends Component {

  render() {
    return (
        <div>Страница с описанием программы</div>
        )
    }
}

export {
    HelpPage as HelpPageForTest
};

export default withRouter(HelpPage);