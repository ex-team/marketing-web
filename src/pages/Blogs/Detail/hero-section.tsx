import React from 'react';


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
}
function HeroSection(props: Props) {
  return (
    <div className="hero-container" style={{ backgroundImage: `url(${props.data.images})` }}>
      <div className="container title-heading p-text-center">
        <h1>{props.data.title}</h1>
        <span className="meta">
          <i className="pi pi-user p-mr-2"></i> {props.data.author} | {new Date(props.data.created_at).toDateString()}
        </span>
      </div>
    </div>
  );
}
export default HeroSection;
