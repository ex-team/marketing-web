import React, { useEffect, useState } from 'react';

import { Button } from 'primereact/button';
import { Skeleton } from 'primereact/skeleton';

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
  services: any;
}
function MainSection(props: Props) {
  const [services, setServices] = useState(props.services);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const load = setTimeout(() => {
      setServices(props.services);
      setLoading(false);
    }, 600);
    return () => clearTimeout(load);
  });

  return (
    <div className="main-container">
      <div className="container">
        <div className="content-container">
          {loading ? (
            <div className="heading-section">
              <Skeleton width="30%" height="30px" className="p-mb-2 p-mt-2" />
              <Skeleton width="100%" className="p-mt-2"/>
              <Skeleton width="100%" className="p-mt-2"/>
              <Skeleton width="100%" className="p-mt-2"/>
              <Skeleton width="100%" className="p-mt-2"/>
              <Skeleton width="100%" className="p-mt-2"/>
            </div>
          ) : (
            <div className="heading-section">
              <h1>{props.data.title}</h1>
              <ul className="services-heading">
                {services.map((data, idx) => (
                  <li key={idx}>
                    <i className="pi pi-check-circle"></i> {data.title}
                    <ul>
                      <li>{data.description}</li>
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="content-services">
            <h3>Download Browsur dan Harga</h3>
            <ul className="download-brosur">
              <li>
                <a href="http://google.com">
                  <Button label="Download Brosur" />
                </a>
              </li>
            </ul>
            <h3>Cara pemesanan :</h3>
            <ol className="order">
              <li><a href="mailto:contact@digipeta.com" target="_blank" rel="noopener noreferrer">Send Mail</a></li>
              <li><a href="https://wa.me/6289623498800/" target="_blank" rel="noopener noreferrer">WhatsApps : +62 89623498800 </a></li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MainSection;
