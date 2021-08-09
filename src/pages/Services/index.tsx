import React, { Component } from 'react';

import { dataPages, dataServices } from '../../components/models';
import HeroSection from './hero-section';
import MainSection from './main-section';

export interface IndexState {
  pages: any;
  services: any;
}

class Index extends Component<{}, IndexState> {
  state: IndexState = {
    pages: dataPages[1],
    services: dataServices,
  };

  constructor(props: {}) {
    super(props);
    this.scrollNavigation = this.scrollNavigation.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.scrollNavigation, true);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollNavigation, true);
  }
  scrollNavigation = () => {
    const doc = document.documentElement;
    const top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    const topnavEl = document.getElementById('topnav');
    if (top > 80) {
      topnavEl?.classList.add('nav-sticky');
    } else {
      topnavEl?.classList.remove('nav-sticky');
    }
  };
  render() {
    return (
      <React.Fragment>
        <HeroSection data={this.state.pages} />
        <MainSection data={this.state.pages} services={this.state.services} />
      </React.Fragment>
    );
  }
}
export default Index;
