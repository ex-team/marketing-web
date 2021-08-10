import React from 'react';

import { Button } from 'primereact/button';

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
            <div className="services p-grid">
              {props.services.map((data, idx) => (
                <div key={idx} className="item p-col-12 p-sm-6 p-lg-4 p-xl-3">
                  <div className="content">
                    <div className="icon">
                      <img src={data.icon} alt={data.title} />
                    </div>
                    <h3 className="title">{data.title}</h3>
                    <p className="description">{data.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="content-services">
            <h3>Download Brosur dan Harga</h3>
            <ul className="download-brosur">
              <li>
                <a href="https://bit.ly/brosurdigipeta2021">
                  <Button label="Download Brosur" icon="pi pi-cloud-download" />
                </a>
              </li>
            </ul>
            <h3>Cara Pemesanan :</h3>
            <ul className="order">
              <li>
                <a href="mailto:contact.digipeta@gmail.com" target="_blank" rel="noopener noreferrer">
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
