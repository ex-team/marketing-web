import React, { useState, useEffect } from 'react';

import { Skeleton } from 'primereact/skeleton';

export interface Props {
  dataFeatures: any;
  dataAbouts: any;
}
function AboutSection(props: Props) {
  const [abouts, setAbouts] = useState(props.dataAbouts);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const load = setTimeout(() => {
      setAbouts(props.dataAbouts);
      setLoading(false);
    }, 600);
    return () => clearTimeout(load);
  });
  return (
    <div className="about-container">
      <div className="container">
        <div className="featured-apps ">
          <div className="p-grid p-justify-center"></div>
        </div>
        <div className="about-description">
          {loading ? <Skeleton width="100%" height="50px" /> : <p className="description">{abouts.abouts}</p>}
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
