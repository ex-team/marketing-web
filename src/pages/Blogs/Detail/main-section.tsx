import React, { useState, useEffect } from 'react';

import { Skeleton } from 'primereact/skeleton';
import { Link } from 'react-router-dom';

export interface Props {
  data: {
    id: number;
    title: string;
    slug: string;
    category: string;
    images: any;
    description: string;
    author: string;
    created_at: string;
    updated_at: string;
  };
  latest: any;
}
function MainSection(props: Props) {
  const blogs = props.data;
  const [blog, setBlog] = useState({ title: '', description: '' });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const data = blogs;
      setBlog(data);
    };
    const load = setTimeout(() => {
      setLoading(false);
    }, 600);

    getData();
    return () => clearTimeout(load);
  }, [blogs]);

  return (
    <div className="main-container">
      <div className="container">
        <div className="content-container p-grid">
          <div className="left-content p-col p-lg-8">
            <div className="heading p-mb-4">
              {loading ? <Skeleton width="75%" height="30px" className="p-mb-2 p-mt-2" /> : <h1>{blog.title}</h1>}
            </div>
            {loading ? <Skeleton width="100%" /> : <p className="p-text-justify">{blog.description}</p>}
          </div>
          <div className="right-content p-col p-lg-4">
            <h5>Recent Blogs</h5>
            <div className="custom-skeleton p-pt-4">
              <ul className="p-m-0 p-p-0">
                {props.latest.slice(0, 5).map((data, idx) => {
                  if (loading) {
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
                        <div className="p-d-flex blogs">
                          <div className="thumbnail-blog p-shadow-3">
                            <img src={data.images} alt={data.title} />
                          </div>
                          <div className="heading-blogs" style={{ flex: '1' }}>
                            <h1>
                              <Link to={data.slug}>{data.title}</Link>
                            </h1>
                            <p>
                              {data.description.length > 100 ? data.description.slice(0, 100) + ',' : data.description}
                            </p>
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
export default MainSection;
