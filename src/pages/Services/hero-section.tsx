import React from "react";

export interface Props {
  data: {
    id: number;
    name: string;
    heading: string;
    subheading: string;
    banner: string;
    title: string;
    description: string;
  }
}

function HeroSection(props: Props) {
  return (
    <div className="hero-container" style={{ backgroundImage: `url(${props.data.banner})` }}>
      <div className="container title-heading p-text-center">
        <h1>{props.data.heading}</h1>
        <p>{props.data.subheading}</p>
      </div>
    </div>
  );
}
export default HeroSection;
