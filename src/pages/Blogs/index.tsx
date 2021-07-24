import React, { Component } from 'react';

import { dataBlogs, dataPages } from '../../components/models';
import HeroSection from './hero-section';
import MainSection from './main-section';

export interface IndexState {
  pages: any;
  blogs: any;
  categories: any;
}

class Index extends Component<{}, IndexState> {
  state: IndexState = {
    pages: dataPages[2],
    blogs: dataBlogs,
    categories: [
      { id: 1, label: 'Articles', value: 'articles' },
      { id: 2, label: 'Blogs', value: 'blogs' },
      { id: 3, label: 'News', value: 'news' },
    ],
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
        <MainSection data={this.state.blogs} categories={this.state.categories} totalRecords={dataBlogs.length} />
      </React.Fragment>
    );
  }
}
export default Index;
