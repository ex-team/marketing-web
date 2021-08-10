import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { Paginator } from 'primereact/paginator';
import { Skeleton } from 'primereact/skeleton';
import React from 'react';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';

export interface Props extends RouteComponentProps {
  data: any[];
  categories: any[];
  totalRecords: number;
}

export interface State {
  results: any[];
  basicFirst: number;
  basicRows: number;
  pageNumber: number;
  searchKey: string;
  sortKey: string;
  loading: boolean;
  sortOptions: any[];
}

class MainSection extends React.Component<Props, State> {
  state: State = {
    results: [],
    basicFirst: 0,
    basicRows: 9,
    pageNumber: 0,
    searchKey: '',
    sortKey: '',
    loading: true,
    sortOptions: [],
  };

  componentDidMount() {
    this.updateData();
    this.updateCategory();
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.data !== this.props.data) this.updateData();
    if (prevProps.categories !== this.props.categories) this.updateCategory();
  }

  updateData() {
    const slice = this.props.data.slice(
      this.state.pageNumber * this.state.basicRows,
      this.state.pageNumber * this.state.basicRows + this.state.basicRows
    );
    // console.log(slice)
    this.setState({ results: slice });
  }

  updateCategory() {
    const reValueCategory = this.props.categories.map(function (res) {
      return { id: res.id, label: res.title, value: res.slug };
    });
    this.setState({
      sortOptions: [...reValueCategory, { id: 0, label: 'All Category', value: 'all' }],
      loading: !reValueCategory.length,
    });
  }

  componentWillUnmount() {}

  onPageChange = event => {
    this.setState({
      basicFirst: event.first,
      pageNumber: event.page,
    });

    const newSlice: any = [...this.props.data].slice(
      event.page * this.state.basicRows,
      event.page * this.state.basicRows + this.state.basicRows
    );
    this.setState({ results: newSlice });
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
      const updatedItems = [...this.props.data].filter(data => {
        return !!data.categories.find(c => c.slug === value);
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
            <div className="category p-col-12 p-sm-6 p-lg-4">
              <Dropdown
                options={this.state.sortOptions}
                value={this.state.sortKey}
                placeholder="Pilih Kategori"
                onChange={this.onSortCategory}
              />
            </div>
            <div className="search-container p-col-12 p-sm-6 p-lg-4 p-lg-offset-4">
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
                <div className="p-col-12 p-md-6 p-xl-4 blog-box">
                  <div className="blog-cover">
                    <Skeleton width="100%" height="100%" />
                  </div>
                  <div className="blog-heading">
                    <Skeleton width="75%" height="30px" className="p-mb-2 p-mt-2" />
                    <Skeleton width="100%" />
                  </div>
                </div>
                <div className="p-col-12 p-md-6 p-xl-4 blog-box">
                  <div className="blog-cover">
                    <Skeleton width="100%" height="100%" />
                  </div>
                  <div className="blog-heading">
                    <Skeleton width="75%" height="30px" className="p-mb-2 p-mt-2" />
                    <Skeleton width="100%" />
                  </div>
                </div>
                <div className="p-col-12 p-md-6 p-xl-4 blog-box">
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
                  <div key={idx} className="p-col-12 p-md-6 p-xl-4 blog-box">
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
                        <div
                          className="body"
                          dangerouslySetInnerHTML={{
                            __html: blog.body.replace(/src="\/media\//g, 'src="https://karomap.com/media/'),
                          }}
                        ></div>
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
