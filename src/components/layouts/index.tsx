import React, { Component } from 'react';

import { ScrollTop } from 'primereact/scrolltop';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import Footer from './footer';
import Topbar from './topbar';

class Layout extends Component<RouteComponentProps<{}>> {
  render() {
    return (
      <React.Fragment>
        <Topbar />
        {this.props.children}
        <Footer />
        <ScrollTop threshold={200} behavior="smooth" className="custom-scrolltop" />
      </React.Fragment>
    );
  }
}

export default withRouter(Layout);
