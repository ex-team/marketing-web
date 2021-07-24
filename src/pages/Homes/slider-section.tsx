import React, { useEffect } from 'react';

import Glide from '@glidejs/glide';
import { Button } from 'primereact/button';

export interface Props {
  data: any;
}
function SliderSection(props: Props) {
  const sliders = props.data;

  const glide = new Glide('#bannerSlider', {
    type: 'carousel',
    startAt: 0,
    autoplay: 10000,
    perView: 1,
    focusAt: 'center',
    hoverpause: true,
    keyboard: true,
    gap: 0,
  });

  useEffect(() => {
    glide.mount();
    // return () => glide.destroy();
  });

  return (
    <div className="home-slider-container">
      <div className="slider-banner">
        <div className="glide-wrapper">
          <div className="glide" id="bannerSlider">
            <div className="glide__track" data-glide-el="track">
              <ul className="glide__slides p-align-center">
                {sliders.map((data, idx) => (
                  <li className="glide__slide text-center" key={idx}>
                    <div className="content p-justify-center">
                      <div className="heading-title centered">
                        <h1>{data.title}</h1>
                        <p>{data.description}</p>
                        {data.url !== '' && (
                          <a href={data.url} target="_blank" rel="noopener noreferrer">
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
  );
}
export default SliderSection;
