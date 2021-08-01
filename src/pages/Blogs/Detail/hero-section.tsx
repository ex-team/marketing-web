import React, { useEffect, useState } from 'react';

import { Skeleton } from 'primereact/skeleton';

export interface Props {
  data: {
    id: number;
    title: string;
    slug: string;
    categories: any;
    featured_image: string;
    author: {
      username: string;
    };
    created_at: string;
    updated_at: string;
  };
}
function HeroSection(props: Props) {
  const blog = props.data;
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const load = setTimeout(() => {
      setLoading(false);
    }, 600);
    return () => clearTimeout(load);
  });
  return (
    <div className="hero-container" style={{ backgroundImage: `url(${blog.featured_image})` }}>
      {loading ? (
        <div className="container title-heading p-justify-center">
          <Skeleton width="100%" height="30px" className="p-mb-2 p-mt-2" />
          <Skeleton width="100%" className="p-mb-2 p-mt-2" />
          <Skeleton width="100%" className="p-mb-2 p-mt-2" />
        </div>
      ) : (
        <div className="container title-heading p-text-center">
          <h1>{blog.title}</h1>
          <span className="meta">
            <i className="pi pi-calendar p-mr-2"></i> {new Date(blog.created_at).toDateString()}
          </span>
        </div>
      )}
    </div>
  );
}
export default HeroSection;
