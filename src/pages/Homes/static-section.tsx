import React from 'react';



import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';



import DEVICE from './../../assets/images/device.png';

export interface Props {
  picture: string;
  title: string;
  description: string;
  button: string;
  url: string;
  button_wa: string;
  url_wa: string;
  dataFeatures: any;
}

function StaticSection(props: Props) {
  const features = props.dataFeatures;
  return (
    <div className="home-hero-container" style={{ backgroundImage: `url(${props.picture})` }}>
      <div className="overlay"></div>
      <div className="devices">
        <img src={DEVICE} alt="" />
      </div>
      <div className="container" style={{ zIndex: 90 }}>
        <div className="heading-title">
          <h1>{props.title}</h1>
          <p>{props.description}</p>
          <div className="features p-grid p-justify-start">
            {features.map((data, idx) => (
              <div key={idx} className="item p-py-1 p-col-12 p-md-3 p-lg-2">
                <p className="p-0 p-m-0">
                  <i className="pi pi-check-circle"></i>
                  {data.title}
                </p>
              </div>
            ))}
          </div>
          <div className="hero-btn">
            <Link to={props.url}>
              <Button label={props.button} icon="pi pi-chevron-circle-right" />
            </Link>
            <a href={props.url_wa} target="_blank" rel="noopener noreferrer">
              <Button label={props.button_wa} icon="pi pi-phone" className="p-button-success" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StaticSection;
