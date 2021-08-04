import React, { useEffect, useState } from 'react';



// import Glide from '@glidejs/glide';
// import { Button } from 'primereact/button';
import { Skeleton } from 'primereact/skeleton';


export interface Props {
  data: any;
  dataSlider: any;
  heading: string;
  subheading: string;
  thematics_banner: string;
  thematics_slider: boolean;
}

function ThematicSection(props: Props) {
  const thematics = props.data;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = setTimeout(() => {
      setLoading(false);
    }, 600);
    return () => clearTimeout(load);
  });

  return (
    <div className="thematic-container" style={{ backgroundImage: `url(${props.thematics_banner})` }}>
      <div className="container">
        {loading ? (
          <div className="heading-section">
            <Skeleton width="50%" height="30px" className="p-mb-2 p-mt-2" />
            <Skeleton width="100%" className="p-mt-2" />
          </div>
        ) : (
          <div className="heading-section">
            <h1>{props.heading}</h1>
            <p>{props.subheading}</p>
          </div>
        )}
        <div className="content-section">
          <div className="thematic-description p-justify-center">
            <div className="p-grid">
              <div className="p-col-10 p-offset-1 p-justify-center">
                <div className="p-grid p-justify-between">
                  <div className="theme p-col-12 p-md-4 p-justify-center">
                    <ul>
                      {thematics.slice(0, 4).map((data, idx) => {
                        if (loading) {
                          return (
                            <li key={idx}>
                              <Skeleton width="100%" className="p-mt-2" />
                            </li>
                          );
                        } else {
                          return (
                            <li key={idx}>
                              <i className="pi pi-check-circle"></i>
                              {data.title}
                            </li>
                          );
                        }
                      })}
                    </ul>
                  </div>
                  <div className="theme p-col-12 p-md-4 p-justify-center">
                    <ul>
                      {thematics.slice(4, 8).map((data, idx) => {
                        if (loading) {
                          return (
                            <li key={idx}>
                              <Skeleton width="100%" className="p-mt-2" />
                            </li>
                          );
                        } else {
                          return (
                            <li key={idx}>
                              <i className="pi pi-check-circle"></i>
                              {data.title}
                            </li>
                          );
                        }
                      })}
                    </ul>
                  </div>
                  <div className="theme p-col-12 p-md-4 p-justify-center">
                    <ul>
                      {thematics.slice(8, 12).map((data, idx) => {
                        if (loading) {
                          return (
                            <li key={idx}>
                              <Skeleton width="100%" className="p-mt-2" />
                            </li>
                          );
                        } else {
                          return (
                            <li key={idx}>
                              <i className="pi pi-check-circle"></i>
                              {data.title}
                            </li>
                          );
                        }
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThematicSection;
