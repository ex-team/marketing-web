import { Button } from 'primereact/button';
import React from 'react';
import { Link } from 'react-router-dom';

export interface Props {
  data: any[];
  heading: string;
  subheading: string;
}
function BlogSection(props: Props) {
  return (
    <div className="blog-container">
      <div className="container">
        <div className="heading-section">
          <h1>{props.heading}</h1>
          <p>{props.subheading}</p>
        </div>
        <div className="content-section">
          <div className="p-grid">
            {props.data?.slice(0, 6).map((data, idx) => {
              return (
                <div key={idx} className="p-col p-md-6 p-xl-4 blog-box">
                  <div className="blog-cover p-shadow-4">
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
            })}
          </div>
        </div>
        <div className="more p-d-flex p-jc-center">
          <Link to="/blogs">
            <Button label="Explore Blog" />
          </Link>
        </div>
      </div>
    </div>
  );
}
export default BlogSection;
