import React, { Component } from 'react';



import { RouteComponentProps } from 'react-router-dom';



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
    latest: [],
  };
  constructor(props: any) {
    super(props);
    this.scrollNavigation = this.scrollNavigation.bind(this);
  }
  componentDidMount() {
    this.getData();
    this.getLatest();
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
      });
    }
  }

  getLatest = () => {
    API.getBlogs()
      .then(result => {
        this.setState({
          latest: [...result],
        });
      })
      .catch(e => {
        console.error(e);
      });
  };

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
