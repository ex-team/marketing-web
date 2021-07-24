import React, { useEffect } from 'react';

import Glide from '@glidejs/glide';

export interface Props {
  data: any;
}
function PartnerSection(props: Props) {
  const partners = props.data;
  const glide = new Glide('#partnerSlider', {
    type: 'carousel',
    startAt: 0,
    autoplay: 5000,
    perView: 6,
    breakpoints: {
      480: {
        perView: 3,
      },
      320: {
        perView: 2,
      },
    },
  });
  useEffect(() => {
    glide.mount();
    // return () => glide.destroy();
  });
  return (
    <div className="partner-container">
      <div className="container">
        <div className="justify-content-center">
          <div className="glide" id="partnerSlider">
            <div className="glide__track" data-glide-el="track">
              <ul className="glide__slides p-align-center">
                {partners.map((data, idx) => (
                  <li className="glide__slide text-center" key={idx}>
                    <img className="avatar avatar-client" src={data.images} alt="" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PartnerSection;
