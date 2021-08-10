import { Button } from 'primereact/button';
import React from 'react';

export interface Props {
  data: {
    id: number;
    name: string;
    heading: string;
    subheading: string;
    banner: string;
    title: string;
    description: string;
  };
}

function HeroSection(props: Props) {
  return (
    <div className="hero-container" style={{ backgroundImage: `url(${props.data.banner})` }}>
      <div className="container title-heading p-text-center">
        <h1>{props.data.heading}</h1>
        <p>{props.data.subheading}</p>
        <a href="https://bit.ly/brosurdigipeta2021">
          <Button label="Download Brosur" icon="pi pi-cloud-download" />
        </a>
        <a href="https://wa.me/6289623498800/">
          <Button label="Konsultasi" icon="pi pi-phone" className="p-button-success" />
        </a>
      </div>
    </div>
  );
}
export default HeroSection;
