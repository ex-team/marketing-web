import React, { useEffect, useState } from 'react';

import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { Paginator } from 'primereact/paginator';
import { Skeleton } from 'primereact/skeleton';
import { Link, useRouteMatch } from 'react-router-dom';

export interface Props {
  data: any;
  categories: any;
  totalRecords: number;
}
function MainSection(props: Props) {
  const blogs = props.data;
  const [results, setResults] = useState([]);
  const [basicFirst, setBasicFirst] = useState(0);
  const [basicRows] = useState(9);
  const [pageNumber, setPageNumber] = useState(0);
  const [searchKey, setSearchKey] = useState('');
  const [sortKey, setSortKey] = useState('');
  const [loading, setLoading] = useState(true);
  const match = useRouteMatch();

  useEffect(() => {
    const getData = async () => {
      const data = [...blogs];
      const slice: any = data.slice(pageNumber * basicRows, pageNumber * basicRows + basicRows);
      setResults(slice);
    };
    const load = setTimeout(() => {
      setLoading(false);
    }, 600);

    getData();
    return () => clearTimeout(load);
  }, [blogs, basicRows, pageNumber]);

  const onPageChange = event => {
    setBasicFirst(event.first);
    setPageNumber(event.page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getSearch = (e: { target: { value: string } }) => {
    const value = e.target.value;
    setSearchKey(value);
    if (value !== '') {
      const newBlog = blogs.filter((data: any) => {
        return Object.values(data).join(' ').toLowerCase().includes(value.toLowerCase());
      });
      setResults(newBlog);
    } else {
      setResults(blogs);
    }
  };

  const sortOptions = [...props.categories, { id: 0, label: 'All Category', value: 'all' }];
  const onSortCategory = event => {
    const value = event.value;
    setSortKey(value);
    if (value !== 'all') {
      const updatedItems = blogs.filter(currentEl => {
        return currentEl.category.toLowerCase() === value.toLowerCase();
      });
      setResults(updatedItems);
    } else {
      setResults(blogs);
    }
  };

  return (
    <div className="main-container">
      <div className="container">
        <div className="filter-section p-grid">
          <div className="category p-col p-xl-4">
            <Dropdown options={sortOptions} value={sortKey} placeholder="Select category" onChange={onSortCategory} />
          </div>
          <div className="search-container p-col p-xl-4 p-xl-offset-4">
            <div className="search">
              <span className="p-input-icon-right">
                <i className="pi pi-search" />
                <InputText placeholder="Search" id="search" value={searchKey} onChange={getSearch} />
              </span>
            </div>
          </div>
        </div>
        <div className="content-section p-pt-4">
          <div className="p-grid">
            {results.map((blog: any, idx) => {
              if (loading) {
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
                      <Link to={`${match.url}/${blog.slug}`}>
                        <img src={blog.images} alt={blog.title} />
                      </Link>
                    </div>
                    <div className="blog-heading">
                      <h1>
                        <Link to={`${match.url}/${blog.slug}`}>{blog.title}</Link>
                      </h1>
                      <span className="meta">
                        <i className="pi pi-user p-mr-2"></i> {blog.author} | {new Date(blog.created_at).toDateString()}
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
              first={basicFirst}
              rows={basicRows}
              totalRecords={props.totalRecords}
              onPageChange={onPageChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default MainSection;
