import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import API from '../../../components/services';
import HeroSection from './hero-section';
import MainSection from './main-section';

export interface State {
  blog: any;
  latest: any[];
}

class IndexDetail extends Component<RouteComponentProps<{ slug: string }>, State> {
  state: State = {
    blog: {},
    latest: [],
  };

  componentDidMount() {
    this.getData();
    this.getLatest();
  }

  componentDidUpdate(prevProps: RouteComponentProps) {
    if (prevProps.history.location.pathname !== this.props.match.url) {
      this.getData();
    }
  }

  getData() {
    const slug = this.props.match.params.slug;
    if (this.props.match && slug) {
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
        const descRes = result.sort((a, b) => a - b).reverse();
        this.setState({
          latest: [...descRes],
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
