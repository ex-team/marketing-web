import React, { Component } from 'react';



import { RouteComponentProps } from 'react-router-dom';

import { dataBlogs } from '../../../components/models';
import API from '../../../components/services';
import HeroSection from './hero-section';
import MainSection from './main-section';

export interface IndexDetailState {
  blog: any;
  latest: any;
}

class IndexDetail extends Component<RouteComponentProps, IndexDetailState> {
  private params: any;
  state: IndexDetailState = {
    blog: {},
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

  componentDidUpdate(prevProps: RouteComponentProps) {
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
    if (this.params.match && slug) {
      API.getDetailPost(slug).then(result => {
        this.setState({
          blog: result,
        });
        console.log(result);
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        {/* <HeroSection data={this.state.blog} /> */}
        {/* <div className="hero-container" style={{ backgroundImage: `url(${this.state.blog.featured_image})` }}>
          <div className="container title-heading p-text-center">
            <h1>{this.state.blog.title}</h1>
            <span className="meta">
              <i className="pi pi-user p-mr-2"></i> {this.state.blog.author.username} |{' '}
              {new Date(this.state.blog.created_at).toDateString()}
            </span>
          </div>
        </div> */}
        <MainSection data={this.state.blog} latest={this.state.latest} />
      </React.Fragment>
    );
  }
}
export default IndexDetail;
