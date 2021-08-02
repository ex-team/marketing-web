import React from 'react';



import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { Paginator } from 'primereact/paginator';
import { Skeleton } from 'primereact/skeleton';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';


export interface Props extends RouteComponentProps {
  data: any;
  categories: any;
  totalRecords: number;
}

class MainSection extends React.Component<Props, {}> {
  state = {
    results: [],
    basicFirst: 0,
    basicRows: 9,
    pageNumber: 0,
    searchKey: '',
    sortKey: '',
    loading: true,
    sortOptions: [],
  };

  componentDidMount() {}

  componentDidUpdate(prevProps: Props) {
    if (prevProps !== this.props) {
      this.updateData();
      this.updateCategory();
      this.setLoading();
    }
  }

  updateData() {
    const slice: any = [...this.props.data].slice(
      this.state.pageNumber * this.state.basicRows,
      this.state.pageNumber * this.state.basicRows + this.state.basicRows
    );
    this.setState({ results: slice });
    // console.log(slice);
  }

  updateCategory() {
    const reValueCategory = this.props.categories.map(function (res) {
      return { id: res.id, label: res.title, value: res.slug };
    });
    this.setState({ sortOptions: [...reValueCategory, { id: 0, label: 'All Category', value: 'all' }] });
  }

  setLoading() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 700);
  }

  componentWillUnmount() {}

  onPageChange = event => {
    this.setState({
      basicFirst: event.first,
      pageNumber: event.page,
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  getSearch = (e: { target: { value: string } }) => {
    const value = e.target.value;
    this.setState({ searchKey: value });
    if (value !== '') {
      const newBlog = [...this.props.data].filter((data: any) => {
        return Object.values(data).join(' ').toLowerCase().includes(value.toLowerCase());
      });
      this.setState({ results: newBlog });
    } else {
      this.setState({ results: this.props.data });
    }
  };

  onSortCategory = event => {
    const value = event.value;
    this.setState({ sortKey: value });

    if (value !== 'all') {
      const updatedItems = [...this.props.data].filter((data: any) => {
        // return Object.values(data.categories).join(' ').toLowerCase().includes(value.toLowerCase());
        // console.log(currentEl);
        // return currentEl.category.toLowerCase() === value.toLowerCase();
        return data.categories.filter((e: any) => {
          return e.slug.toLowerCase() === value.toLowerCase();
        });
      });
      this.setState({ results: updatedItems });
    } else {
      this.setState({ results: this.props.data });
    }
  };

  render() {
    return (
      <div className="main-container">
        <div className="container">
          <div className="filter-section p-grid">
            <div className="category p-col p-xl-4">
              <Dropdown
                options={this.state.sortOptions}
                value={this.state.sortKey}
                placeholder="Select category"
                onChange={this.onSortCategory}
              />
            </div>
            <div className="search-container p-col p-xl-4 p-xl-offset-4">
              <div className="search">
                <span className="p-input-icon-right">
                  <i className="pi pi-search" />
                  <InputText placeholder="Search" id="search" value={this.state.searchKey} onChange={this.getSearch} />
                </span>
              </div>
            </div>
          </div>
          <div className="content-section p-pt-4">
            {this.state.loading ? (
              <div className="p-grid">
                <div className="p-col p-md-6 p-xl-4 blog-box">
                  <div className="blog-cover">
                    <Skeleton width="100%" height="100%" />
                  </div>
                  <div className="blog-heading">
                    <Skeleton width="75%" height="30px" className="p-mb-2 p-mt-2" />
                    <Skeleton width="100%" />
                  </div>
                </div>
                <div className="p-col p-md-6 p-xl-4 blog-box">
                  <div className="blog-cover">
                    <Skeleton width="100%" height="100%" />
                  </div>
                  <div className="blog-heading">
                    <Skeleton width="75%" height="30px" className="p-mb-2 p-mt-2" />
                    <Skeleton width="100%" />
                  </div>
                </div>
                <div className="p-col p-md-6 p-xl-4 blog-box">
                  <div className="blog-cover">
                    <Skeleton width="100%" height="100%" />
                  </div>
                  <div className="blog-heading">
                    <Skeleton width="75%" height="30px" className="p-mb-2 p-mt-2" />
                    <Skeleton width="100%" />
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-grid">
                {this.state.results.map((blog: any, idx) => (
                  <div key={idx} className="p-col p-md-6 p-xl-4 blog-box">
                    <div className="blog-cover p-shadow-3">
                      <ul>
                        {blog.categories.map((category: any, idx) => (
                          <li key={idx}>
                            <div className="btn-label-category p-shadow-3">
                              <span className="label-category">{category.title}</span>
                            </div>
                          </li>
                        ))}
                      </ul>
                      <Link to={`${this.props.match.url}/${blog.slug}`}>
                        <img src={blog.featured_image} alt={blog.title} />
                      </Link>
                    </div>
                    <div className="blog-heading">
                      <h1>
                        <Link to={`${this.props.match.url}/${blog.slug}`}>{blog.title}</Link>
                      </h1>
                      <span className="meta">
                        <i className="pi pi-user p-mr-2"></i>{' '}
                        {blog.author.username != null ? blog.author.username : 'Unknown'} |{' '}
                        {new Date(blog.created_at).toDateString()}
                      </span>
                      <div className="description">
                        <div className="body" dangerouslySetInnerHTML={{ __html: blog.body }}></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="paginator-container">
              <Paginator
                first={this.state.basicFirst}
                rows={this.state.basicRows}
                totalRecords={this.props.totalRecords}
                onPageChange={this.onPageChange}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(MainSection);
