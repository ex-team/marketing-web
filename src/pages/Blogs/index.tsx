import React, { Component } from 'react';



import { dataBlogs, dataPages } from '../../components/models';
import API from '../../components/services';
import HeroSection from './hero-section';
import MainSection from './main-section';

export interface IndexState {
  pages: any;
  blogs: any;
  categories: any;
  totalRecords: number;
}

class Index extends Component<{}, IndexState> {
  state: IndexState = {
    pages: dataPages[2],
    blogs: [],
    categories: [],
    totalRecords: 0,
  };
  constructor(props: {}) {
    super(props);

    this.scrollNavigation = this.scrollNavigation.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.scrollNavigation, true);
    this.getPostAPI();
  }

  getPostAPI = () => {
    API.getCategoryBlogs().then(result => {
      this.setState({
        categories: result,
      });
    });
    API.getBlogs().then(result => {
      this.setState({
        blogs: result,
        totalRecords: result.length,
      });
      console.log(result);
    });
  };

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
        <MainSection
          data={this.state.blogs}
          categories={this.state.categories}
          totalRecords={this.state.blogs.length}
        />
      </React.Fragment>
    );
  }
}
export default Index;
