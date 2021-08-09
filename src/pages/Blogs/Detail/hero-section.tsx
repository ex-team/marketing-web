import React from 'react';

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

  return (
    <div className="hero-container" style={{ backgroundImage: `url(${blog.featured_image})` }}>
      <div className="container title-heading p-text-center">
        <h1>{blog.title}</h1>
        <span className="meta">
          <i className="pi pi-calendar p-mr-2"></i> {new Date(blog.created_at).toDateString()}
        </span>
      </div>
    </div>
  );
}
export default HeroSection;
