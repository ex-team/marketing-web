import React, { Component } from 'react';
import DocumentMeta, { DocumentMetaProps } from 'react-document-meta';
import { ConnectedProps, connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import { RootState } from '../../app/store';
import { dataPages } from '../../components/models';
import API from '../../components/services';
import { absoluteUrl } from '../../utils';
import HeroSection from './hero-section';
import MainSection from './main-section';

type ExtraProps = RouteComponentProps & ConnectedProps<typeof connector>;
export interface Props extends ExtraProps {}

export interface State {
  pages: any;
  blogs: any[];
  categories: any[];
  totalRecords: number;
}

class Index extends Component<Props, State> {
  state: State = {
    pages: dataPages[2],
    blogs: [],
    categories: [],
    totalRecords: 0,
  };

  private _isMounted = false;

  componentDidMount() {
    this._isMounted = true;
    this.getPostAPI();
  }

  componentWillUnmount() {
    this._isMounted = false;
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

  render() {
    const { prefs } = this.props;
    const meta: DocumentMetaProps = {
      title: ['Blogs', prefs.title].join(' | '),
      canonical: absoluteUrl(this.props.match.url),
      extend: true,
    };

    return (
      <React.Fragment>
        <DocumentMeta {...meta} />
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

const connector = connect((state: RootState) => ({ prefs: state.prefs }));
export default connector(withRouter(Index));
