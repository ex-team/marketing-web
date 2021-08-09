import React, { Component } from 'react';

import { dataPages } from '../../components/models';
import API from '../../components/services';
import HeroSection from './hero-section';
import MainSection from './main-section';

export interface IndexState {
  pages: any;
  blogs: any[];
  categories: any[];
  totalRecords: number;
}

class Index extends Component<{}, IndexState> {
  state: IndexState = {
    pages: dataPages[2],
    blogs: [],
    categories: [],
    totalRecords: 0,
  };

  private _isMounted = false;

  constructor(props: {}) {
    super(props);
    this.scrollNavigation = this.scrollNavigation.bind(this);
  }

  componentDidMount() {
    this._isMounted = true;
    window.addEventListener('scroll', this.scrollNavigation, true);
    this.getPostAPI();
  }

  componentWillUnmount() {
    this._isMounted = false;
    window.removeEventListener('scroll', this.scrollNavigation, true);
  }

  /**
   * TODO: Use redux for SSR
   */
  getPostAPI = () => {
    API.getCategoryBlogs()
      .then(result => {
        if (this._isMounted)
          this.setState({
            categories: [...result],
          });
      })
      .catch(e => {
        console.error(e);
      });
    API.getBlogs()
      .then(result => {
        if (this._isMounted) {
          const descRes = result.sort((a, b) => a - b).reverse();
          this.setState({
            blogs: [...descRes],
            totalRecords: result.length,
          });
        }
      })
      .catch(e => {
        console.error(e);
      });
  };

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
