import React, { Component } from 'react';

import { dataBlogs } from '../../../components/models';
import HeroSection from './hero-section';
import MainSection from './main-section';

export interface IndexDetailState {
  blog: any;
  latest: any;
}

class IndexDetail extends Component<{}, IndexDetailState> {
  private params: any;
  state: IndexDetailState = {
    blog: [],
    latest: dataBlogs,
  };
  constructor(props: any) {
    super(props);
    this.scrollNavigation = this.scrollNavigation.bind(this);
  }
  componentDidMount() {
    this.getData();
    window.addEventListener('scroll', this.scrollNavigation, true);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.history.location.pathname !== this.params.match.url) {
      this.getData();
    }
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

  getData() {
    this.params = this.props;
    const slug = this.params.match.params.slug;
    if (this.params.match && this.params.match.params.slug) {
      // next replace with axios
      const detailBlog = dataBlogs.filter((data: any) => {
        return Object.values(data).join(' ').toLowerCase().includes(slug.toLowerCase());
      });
      this.setState({ blog: detailBlog[0] });
    }
  }

  render() {
    return (
      <React.Fragment>
        <HeroSection data={this.state.blog} />
        <MainSection data={this.state.blog} latest={this.state.latest} />
      </React.Fragment>
    );
  }
}
export default IndexDetail;
