import React, { useEffect } from 'react';

import Glide from '@glidejs/glide';
import { Button } from 'primereact/button';

export interface Props {
  data: any;
  heading: string;
  subheading: string;
}
function FeaturedSection(props: Props) {
  const features = props.data;
  const glide = new Glide('#featuredSlider', {
    type: 'carousel',
    startAt: 0,
    autoplay: 15000,
    perView: 4,
    focusAt: 0,
    hoverpause: true,
    keyboard: true,
    gap: 36,
    breakpoints: {
      768: {
        perView: 1,
      },
      1120: {
        perView: 2,
      },
      1440: {
        perView: 3,
      },
    },
  });

  useEffect(() => {
    glide.mount();
  });

  return (
    <div className="featured-container">
      <div className="container-fluid">
        <div className="slider-banner">
          <div className="glide-wrapper">
            <div className="glide" id="featuredSlider">
              <div className="p-grid">
                <div className="p-col-12 p-md-4">
                  <div className="heading-section">
                    <h1>{props.heading}</h1>
                    <p>{props.subheading}</p>
                  </div>
                </div>
                <div className="p-col-12 p-md-8">
                  <div className="glide__track" data-glide-el="track">
                    <ul className="glide__slides p-align-center">
                      {features.map((data, idx) => (
                        <li className="glide__slide p-shadow-3" key={idx}>
                          <div className="content p-justify-center">
                            <div className="heading-title centered">
                              <h1>{data.title}</h1>
                              <p>{data.description}</p>
                              {data.url !== '' && (
                                <a href={data.url} target="_blank" rel="noopener noreferrer" className="btn-link">
                                  <Button label={data.btn_name} />
                                </a>
                              )}
                            </div>
                            <img className="image-banner" src={data.images} alt={data.title} />
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="glide__arrows container" data-glide-el="controls">
                <Button
                  icon="pi pi-chevron-left"
                  className="p-button-rounded p-button-info glide__arrow glide__arrow--left"
                  data-glide-dir="<"
                />
                <Button
                  icon="pi pi-chevron-right"
                  className="p-button-rounded p-button-info glide__arrow glide__arrow--right"
                  data-glide-dir=">"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FeaturedSection;
