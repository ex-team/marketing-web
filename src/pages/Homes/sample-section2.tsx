import React, { useState, useEffect } from 'react';

import Glide from '@glidejs/glide';
import { Button } from 'primereact/button';
import { Skeleton } from 'primereact/skeleton';

export interface Props {
  data: any;
  heading: string;
  subheading: string;
}

function SampleSection(props: Props) {
  const samples = props.data;
  const [modal, setModal] = useState(false);
  const [tempSrc, setTempSrc] = useState('');
  const [tempTitle, setTempTitle] = useState('');
  const [loading, setLoading] = useState(true);

  const glide = new Glide('#sampleSlider', {
    type: 'carousel',
    startAt: 0,
    autoplay: 6000,
    perView: 1,
    focusAt: 'center',
    hoverpause: true,
    keyboard: true,
    gap: 0,
  });

  useEffect(() => {
    const load = setTimeout(() => {
      glide.mount();
      setLoading(false);
    }, 600);
    return () => clearTimeout(load);
  });

  const getSrc = (src, title) => {
    setTempSrc(src);
    setTempTitle(title);
    setModal(true);
  };

  return (
    <div className="sample-container">
      <div className="container">
        {loading ? (
          <div className="heading-section">
            <Skeleton width="30%" height="30px" className="p-mb-2 p-mt-2" />
            <Skeleton width="50%" />
          </div>
        ) : (
          <div className="heading-section">
            <h1>{props.heading}</h1>
            <p>{props.subheading}</p>
            <div className="more p-d-flex p-jc-center">
              <a href="https://wa.me/6289623498800/" target="_blank" rel="noopener noreferrer">
                <Button label="Demo Sistem" />
              </a>
            </div>
          </div>
        )}
        <div className="content-section">
          <div className="sample-slider">
            <div className="slider-banner">
              <div className="glide-wrapper">
                <div className="glide" id="sampleSlider">
                  <div className="glide__track" data-glide-el="track">
                    <ul className="glide__slides p-align-center">
                      {samples.map((data, idx) => (
                        <li className="glide__slide text-center" key={idx}>
                          <div className="content p-justify-center">
                            <div className="p-grid">
                              <div className="sample p-col-12 p-lg-6">
                                <img className="image-banner p-shadow-4" src={data.thumbnail} alt={data.title} />
                              </div>
                              <div className="sample p-col-12 p-lg-6">
                                <div className="heading-title centered">
                                  <h1>{data.title}</h1>
                                  <p>{data.description}</p>
                                  <ul className="sample-heading">
                                    {data.features.map((feature, idx) => (
                                      <li key={idx}>
                                        <i className="pi pi-check-circle"></i> {feature.title}
                                        <ul>
                                          <li>{feature.description}</li>
                                        </ul>
                                      </li>
                                    ))}
                                  </ul>
                                  {data.url !== '' && (
                                    <Button label="View Projects" onClick={() => getSrc(data.url, data.title)} />
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="glide__arrows" data-glide-el="controls">
                    <button className="glide__arrow glide__arrow--left" data-glide-dir="<">
                      <i className="pi pi-chevron-left" />
                    </button>
                    <button className="glide__arrow glide__arrow--right" data-glide-dir=">">
                      <i className="pi pi-chevron-right" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={modal ? 'modal open' : 'modal'}>
            <iframe src={tempSrc} allow="autoplay; encrypted-media" title="video" />
            <Button icon="pi pi-times" className="p-button-rounded p-button-danger" onClick={() => setModal(false)} />
            <div className="description p-justify-center p-text-center">
              <h1>{tempTitle}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SampleSection;
