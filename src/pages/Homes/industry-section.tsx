import React, {useEffect} from 'react'
import { Button } from 'primereact/button';
import Glide from '@glidejs/glide';

export interface Props {
  data: any;
  heading: string;
  subheading: string;
}

function IndustrySection(props: Props) {
  const industries = props.data;
  const glide = new Glide('#industrySlider', {
    type: 'slider',
    startAt: 0,
    autoplay: 15000,
    perView: 2,
    focusAt: 0,
    bound: true,
    gap: 26,
    rewind: true,
    breakpoints: {
      768: {
        perView: 1,
      },
      1120: {
        perView: 1,
      },
      1440: {
        perView: 2,
      },
    },
  });

  useEffect(() => {
    glide.mount();
  });

  return (
    <div className="industry-container">
      <div className="container">
        <div className="content-section">
          <div className="p-grid">
            <div className="p-col-12 p-md-6 p-lg-4 industry-description">
              <div className="heading-section">
                <h1>{ props.heading }</h1>
                <p>{ props.subheading }</p>
              </div>
              <ul>
                {industries.map((data, idx) => (
                  <li key={idx}><i className="pi pi-check-circle"></i>{ data.title }</li>
                ))}
              </ul>
            </div>
            <div className="p-col-12 p-md-6 p-lg-8 industry-picture">
              <div className="slider-banner">
                <div className="glide-wrapper">
                  <div className="glide" id="industrySlider">
                    <div className="glide__track" data-glide-el="track">
                      <ul className="glide__slides p-align-center">
                        {industries.map((data, idx) => (
                          <li className="glide__slide p-shadow-3" key={idx}>
                            <div className="content p-justify-center">
                              <div className="heading-title centered">
                                <h1>{data.title}</h1>
                                <p>{data.description}</p>
                              </div>
                              <img className="image-banner" src={data.images} alt={data.title} />
                            </div>
                          </li>
                        ))}
                      </ul>
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
        </div>
      </div>
    </div>
  )
}

export default IndustrySection
