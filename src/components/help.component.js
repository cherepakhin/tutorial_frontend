import React, { Component } from "react";
import { withRouter } from '../common/with-router';

export class HelpPage extends Component {

  render() {
    return (
        <div>Страница с описанием программы</div>
        )
    }
}

export default withRouter(HelpPage);