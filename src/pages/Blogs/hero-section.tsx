import React, { useEffect, useState } from 'react';

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
}
function HeroSection(props: Props) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const load = setTimeout(() => {
      setLoading(false);
    }, 600);
    return () => clearTimeout(load);
  });
  return (
    <div className="hero-container" style={{ backgroundImage: `url(${props.data.banner})` }}>
      {loading ? (
        <div className="container title-heading p-justify-center">
          <Skeleton width="100%" height="30px" className="p-mb-2 p-mt-2" />
          <Skeleton width="100%" className="p-mb-2 p-mt-2" />
          <Skeleton width="100%" className="p-mb-2 p-mt-2" />
        </div>
      ) : (
        <div className="container title-heading p-text-center">
          <h1>{props.data.heading}</h1>
          <p>{props.data.subheading}</p>
        </div>
      )}
    </div>
  );
}
export default HeroSection;
