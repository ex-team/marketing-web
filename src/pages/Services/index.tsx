import React, { Component } from 'react';



import DocumentMeta, { DocumentMetaProps } from 'react-document-meta';
import { ConnectedProps, connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';



import { RootState } from '../../app/store';
import { dataPages, dataServices } from '../../components/models';
import { absoluteUrl } from '../../utils';
import HeroSection from './hero-section';
// import MainSection from './main-section';
import MainSection from './new';


type ExtraProps = RouteComponentProps & ConnectedProps<typeof connector>;
export interface Props extends ExtraProps {}

export interface State {
  pages: any;
  services: any[];
}

class Index extends Component<Props, State> {
  state: State = {
    pages: dataPages[1],
    services: dataServices,
  };

  render() {
    const { prefs } = this.props;
    const meta: DocumentMetaProps = {
      title: ['Services', prefs.title].join(' | '),
      canonical: absoluteUrl(this.props.match.url),
      extend: true,
    };

    return (
      <React.Fragment>
        <DocumentMeta {...meta} />
        <HeroSection data={this.state.pages} />
        <MainSection data={this.state.pages} services={this.state.services} />
      </React.Fragment>
    );
  }
}

const connector = connect((state: RootState) => ({ prefs: state.prefs }));
export default connector(withRouter(Index));
