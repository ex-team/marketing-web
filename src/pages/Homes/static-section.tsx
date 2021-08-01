import React from 'react';



import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';

export interface Props {
  picture: string;
  title: string;
  description: string;
  button: string;
  url: string;
  dataFeatures: any;
}

function StaticSection(props: Props) {
  const features = props.dataFeatures;
  return (
    <div className="home-hero-container" style={{ backgroundImage: `url(${props.picture})` }}>
      <div className="container">
        <div className="heading-title">
          <h1>{props.title}</h1>
          <p>{props.description}</p>
          <div className="features p-grid p-justify-start">
            {features.map((data, idx) => (
              <div key={idx} className="p-col-12 p-md-3 p-lg-2">
                <p>
                  <i className="pi pi-check-circle"></i>
                  {data.title}
                </p>
              </div>
            ))}
          </div>
          <div className="hero-btn">
            <Link to={props.url}>
              <Button label={props.button} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StaticSection;
