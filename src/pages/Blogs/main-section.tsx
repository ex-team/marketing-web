import React, { useEffect, useState } from 'react';



import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { Paginator } from 'primereact/paginator';
import { Skeleton } from 'primereact/skeleton';
import { Link, RouteComponentProps, useRouteMatch, withRouter } from 'react-router-dom';

export interface Props extends RouteComponentProps {
  data: any;
  categories: any;
  totalRecords: number;
}

class MainSection extends React.Component<Props, {}> {
  // const blogs = this.props.data;
  // const [results, setResults] = useState([]);
  // const [basicFirst, setBasicFirst] = useState(0);
  // const [basicRows] = useState(9);
  // const [pageNumber, setPageNumber] = useState(0);
  // const [searchKey, setSearchKey] = useState('');
  // const [sortKey, setSortKey] = useState('');
  // const [loading, setLoading] = useState(false);
  // const match = useRouteMatch();
  state = {
    results: [],
    basicFirst: 0,
    basicRows: 9,
    pageNumber: 0,
    searchKey: '',
    sortKey: '',
    loading: false,
    reValueBlog: [] as any[],
  };

  componentDidMount() {}

  componentDidUpdate(prevProps: Props) {
    console.log(this.props);
    if (prevProps.data !== this.props.data) {
      const reValueBlog = this.props.data.map(function (res) {
        return {
          id: res.id,
          title: res.title,
          slug: res.slug,
          category: res.categories[0],
          images: res.featured_image,
          description: res.body,
          author: res.author.username,
          created_at: res.created_at,
        };
      });
      const slice: any = Array.from(reValueBlog).slice(
        this.state.pageNumber * this.state.basicRows,
        this.state.pageNumber * this.state.basicRows + this.state.basicRows
      );
      this.setState({ results: slice, reValueBlog });
    }
  }

  // console.log(reValueBlog);

  // useEffect(() => {
  // const getData = async () => {
  //   const data = [...reValueBlog];
  //   const slice: any = data.slice(pageNumber * basicRows, pageNumber * basicRows + basicRows);
  //   setResults(slice);
  // };
  // const load = setTimeout(() => {
  //   setLoading(false);
  // }, 600);
  // getData().then();
  // return () => clearTimeout(load);
  // });

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
      const newBlog = this.state.reValueBlog.filter((data: any) => {
        return Object.values(data).join(' ').toLowerCase().includes(value.toLowerCase());
      });
      this.setState({ results: newBlog });
    } else {
      this.setState({ results: this.state.reValueBlog });
    }
  };

  reValueCategory = this.props.categories.map(function (res) {
    return { id: res.id, label: res.title, value: res.slug };
  });

  sortOptions = [...this.reValueCategory, { id: 0, label: 'All Category', value: 'all' }];
  onSortCategory = event => {
    const value = event.value;
    this.setState({ sortKey: value });

    if (value !== 'all') {
      const updatedItems = this.state.reValueBlog.filter(currentEl => {
        return currentEl.category.toLowerCase() === value.toLowerCase();
      });
      this.setState({ results: updatedItems });
    } else {
      this.setState({ results: this.state.reValueBlog });
    }
  };

  render() {
    return (
      <div className="main-container">
        <div className="container">
          <div className="filter-section p-grid">
            <div className="category p-col p-xl-4">
              <Dropdown
                options={this.sortOptions}
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
            <div className="p-grid">
              {this.state.results.map((blog: any, idx) => {
                if (this.state.loading) {
                  return (
                    <div key={idx} className="p-col p-md-6 p-xl-4 blog-box">
                      <div className="blog-cover">
                        <Skeleton width="100%" height="100%" />
                      </div>
                      <div className="blog-heading">
                        <Skeleton width="75%" height="30px" className="p-mb-2 p-mt-2" />
                        <Skeleton width="100%" />
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <div key={idx} className="p-col p-md-6 p-xl-4 blog-box">
                      <div className="blog-cover p-shadow-3">
                        <div className="btn-label-category p-shadow-3">
                          <span className="label-category">{blog.category}</span>
                        </div>
                        <Link to={`${this.props.match.url}/${blog.slug}`}>
                          <img src={blog.images} alt={blog.title} />
                        </Link>
                      </div>
                      <div className="blog-heading">
                        <h1>
                          <Link to={`${this.props.match.url}/${blog.slug}`}>{blog.title}</Link>
                        </h1>
                        <span className="meta">
                          <i className="pi pi-user p-mr-2"></i> {blog.author} |{' '}
                          {new Date(blog.created_at).toDateString()}
                        </span>
                        <div className="description">
                          <p>
                            {blog.description.length > 100 ? blog.description.slice(0, 100) + '...' : blog.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
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
