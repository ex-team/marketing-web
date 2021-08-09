import React from 'react';



import { Skeleton } from 'primereact/skeleton';
import { Link } from 'react-router-dom';


export interface Props {
  data: {
    author: any;
    body: string;
    categories: any;
    comment_count: number;
    configs: string;
    created_at: string;
    deleted_at: string;
    description: string;
    featured_image: string;
    id: number;
    published: boolean;
    published_at: string;
    slug: string;
    tags: any;
    title: string;
    type: string;
    updated_at: string;
  };
  latest: any;
}
class MainSection extends React.Component<Props, {}> {
  state = {
    tags: [],
    latest: [],
    loading: true,
  };

  componentDidUpdate(prevProps: Props) {
    if (prevProps !== this.props) {
      this.updateData();
      this.setLoading();
      this.updateLatest();
    }
  }

  updateData() {
    const data = this.props.data;
    this.setState({
      tags: data.tags,
    });
  }

  updateLatest() {
    const data = this.props.latest;
    this.setState({
      latest: data,
    });
  }

  setLoading() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 700);
  }

  render() {
    return (
      <div className="main-container">
        <div className="container">
          <div className="content-container p-grid">
            <div className="left-content p-col p-lg-8">
              {this.state.loading ? (
                <div className="heading p-mb-4">
                  <Skeleton width="75%" height="30px" className="p-mb-2 p-mt-2" />
                  <Skeleton width="50%" height="10px" />
                </div>
              ) : (
                <div className="heading p-mb-4">
                  <h1>{this.props.data.title}</h1>
                  <div className="meta">
                    <i className="pi pi-user p-mr-2"></i> {this.props.data.author.username} |{' '}
                    <i className="pi pi-tags"></i>
                    <ul>
                      {this.state.tags.map((data: any, idx) => (
                        <li className="tags" key={idx}>
                          {data.title},
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
              <div className="featured-image">
                {this.state.loading ? (
                  <Skeleton width="100%" height="100%" />
                ) : (
                  <img className="p-shadow-3" src={this.props.data.featured_image} alt={this.props.data.title} />
                )}
              </div>
              {this.state.loading ? (
                <div>
                  <Skeleton width="100%" className="p-mt-2" />
                  <Skeleton width="100%" className="p-mt-2" />
                  <Skeleton width="100%" className="p-mt-2" />
                </div>
              ) : (
                <p
                  className="p-text-justify"
                  dangerouslySetInnerHTML={{
                    __html: this.props.data.body.replace(/src="\/media\//g, 'src="https://karomap.com/media/'),
                  }}
                ></p>
              )}
            </div>
            <div className="right-content p-col p-lg-4">
              <h5>Recent Blogs</h5>
              <div className="custom-skeleton p-pt-4">
                <ul className="p-m-0 p-p-0">
                  {this.state.latest.slice(0, 5).map((data: any, idx) => {
                    if (this.state.loading) {
                      return (
                        <li key={idx} className="p-mb-3">
                          <div className="p-d-flex">
                            <Skeleton shape="circle" size="4rem" className="p-mr-2" />
                            <div style={{ flex: '1' }}>
                              <Skeleton width="100%" className="p-mb-2" />
                              <Skeleton width="75%" />
                            </div>
                          </div>
                        </li>
                      );
                    } else {
                      return (
                        <li key={idx} className="p-mb-3">
                          <div className="p-grid blogs">
                            <div className="p-col-3">
                              <div className="thumbnail-blog p-shadow-3">
                                <img src={data.featured_image} alt={data.title} />
                              </div>
                            </div>
                            <div className="p-col-9">
                              <div className="heading-blogs" style={{ flex: '1' }}>
                                <h1>
                                  <Link to={data.slug}>{data.title}</Link>
                                </h1>
                                <div className="body" dangerouslySetInnerHTML={{ __html: data.body }}></div>
                              </div>
                            </div>
                          </div>
                        </li>
                      );
                    }
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default MainSection;
