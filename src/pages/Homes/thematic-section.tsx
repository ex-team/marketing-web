import React, { useState, useEffect } from 'react';

import { Skeleton } from 'primereact/skeleton';

export interface Props {
  data: any;
  heading: string;
  subheading: string;
  thematics_banner1: string;
  thematics_banner2: string;
}

function ThematicSection(props: Props) {
  const [thematics, setThematics] = useState(props.data);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = setTimeout(() => {
      setThematics(props.data);
      setLoading(false);
    }, 600);

    return () => clearTimeout(load);
  });

  return (
    <div className="thematic-container">
      <div className="container">
        <div className="content-section">
          <div className="p-grid">
            <div className="p-col-12 p-lg-4">
              {loading ? (
                <div className="heading-section">
                  <Skeleton width="50%" height="30px" className="p-mb-2 p-mt-2" />
                  <Skeleton width="100%" />
                </div>
              ) : (
                <div className="heading-section">
                  <h1>{props.heading}</h1>
                  <p>{props.subheading}</p>
                  <ul className="thematic-heading">
                    {thematics.map((data, idx) => (
                      <li key={idx}>
                        <i className="pi pi-check-circle"></i> {data.title}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div className="thematics-banner p-col-12 p-lg-8">
              {loading ? (
                <div className="p-grid p-justify-center">
                  <div className="thematics p-col-12 p-md-6">
                    <div className="thematic p-shadow-4">
                      <Skeleton width="100%" height="100%" />
                    </div>
                  </div>
                  <div className="thematics p-col-12 p-md-6">
                    <div className="thematic p-shadow-4">
                      <Skeleton width="100%" height="100%" />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="p-grid p-justify-center">
                  <div className="thematics p-col-12 p-md-6">
                    <div className="thematic p-shadow-4">
                      <img src={props.thematics_banner1} alt="" />
                    </div>
                  </div>
                  <div className="thematics p-col-12 p-md-6">
                    <div className="thematic p-shadow-4">
                      <img src={props.thematics_banner2} alt="" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThematicSection;
