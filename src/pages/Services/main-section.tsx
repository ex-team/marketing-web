import { Button } from 'primereact/button';
import React from 'react';

import { ServiceDatum } from '../../components/models';

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
  services: ServiceDatum[];
}
function MainSection(props: Props) {
  return (
    <div className="main-container">
      <div className="container">
        <div className="content-container">
          <div className="heading-section">
            <h1>{props.data.title}</h1>
            <ul className="services-heading">
              {props.services.map((data, idx) => (
                <li key={idx} className="point-top">
                  <i className="pi pi-check-circle"></i> {data.title}
                  <ul>
                    <li>{data.description}</li>
                  </ul>
                </li>
              ))}
            </ul>
          </div>

          <div className="content-services">
            <h3>Download Browsur dan Harga</h3>
            <ul className="download-brosur">
              <li>
                <a href="http://google.com">
                  <Button label="Download Brosur" icon="pi pi-cloud-download" />
                </a>
              </li>
            </ul>
            <h3>Cara pemesanan :</h3>
            <ul className="order">
              <li>
                <a href="mailto:contact@digipeta.com" target="_blank" rel="noopener noreferrer">
                  <Button label="Kirim Email" icon="pi pi-comment" className="p-button-primary" />
                </a>
              </li>
              <li>
                <a href="https://wa.me/6289623498800/" target="_blank" rel="noopener noreferrer">
                  <Button label="Konsultasi" icon="pi pi-phone" className="p-button-success" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MainSection;
