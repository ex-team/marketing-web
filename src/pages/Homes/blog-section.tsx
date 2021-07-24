import React, { useEffect, useState } from 'react';



import { Button } from 'primereact/button';
import { Skeleton } from 'primereact/skeleton';
import { Link } from 'react-router-dom';


export interface Props {
  data: any;
  heading: string;
  subheading: string;
}
function BlogSection(props: Props) {
  const [blogs, setBlogs] = useState(props.data);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const load = setTimeout(() => {
      setBlogs(props.data);
      setLoading(false);
    }, 600);
    return () => clearTimeout(load);
  });
  return (
    <div className="blog-container">
      <div className="container">
        {loading ? (
          <div className="heading-section">
            <Skeleton width="30%" height="30px" className="p-mb-2 p-mt-2" />
            <Skeleton width="50%" />
          </div>
        ) : (
          <div className="heading-section">
            <h1>{props.heading}</h1>
            <p>{props.subheading}</p>
          </div>
        )}
        <div className="content-section">
          <div className="p-grid">
            {blogs.slice(0, 6).map((data, idx) => {
              if (loading) {
                return (
                  <div key={idx} className="p-col p-md-6 p-xl-4 blog-box">
                    <div className="blog-cover">
                      <Skeleton width="100%" height="100%" />
                    </div>
                    <div className="blog-heading">
                      <Skeleton width="100%" height="30px" className="p-mb-2 p-mt-2" />
                      <Skeleton width="75%" />
                    </div>
                  </div>
                );
              } else {
                return (
                  <div key={idx} className="p-col p-md-6 p-xl-4 blog-box">
                    <div className="blog-cover p-shadow-3">
                      <Link to={'/blogs/' + data.slug}>
                        <img src={data.images} alt={data.title} />
                      </Link>
                    </div>
                    <div className="blog-heading">
                      <h1>
                        <Link to={'/blogs/' + data.slug}>{data.title}</Link>
                      </h1>
                      <p>{data.description.length > 120 ? data.description.slice(0, 120) + '...' : data.description}</p>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
        <div className="more p-d-flex p-jc-center">
          <Link to="/blogs">{loading ? <Skeleton width="20%" height="30px" /> : <Button label="Explore Blog" />}</Link>
        </div>
      </div>
    </div>
  );
}
export default BlogSection;
