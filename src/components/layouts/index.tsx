import React, { Component } from 'react';



import { ScrollTop } from 'primereact/scrolltop';
import { SpeedDial } from 'primereact/speeddial';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import { speedDials } from '../models';
import Footer from './footer';
import Topbar from './topbar';

class Layout extends Component<RouteComponentProps<{}>> {
  render() {
    return (
      <React.Fragment>
        <Topbar />
        {this.props.children}
        <Footer />
        <SpeedDial
          model={speedDials}
          direction="left"
          className="custom-speedial"
          buttonClassName="p-button-success"
          showIcon="pi pi-phone"
          hideIcon="pi pi-times"
        />
        <ScrollTop threshold={200} behavior="smooth" className="custom-scrolltop" />
      </React.Fragment>
    );
  }
}

export default withRouter(Layout);
