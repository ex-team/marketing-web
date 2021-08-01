import React, { useState, useEffect } from 'react';

import { Skeleton } from 'primereact/skeleton';

export interface Props {
  heading: string;
  subheading: string;
}
function IndustrySection(props: Props) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const load = setTimeout(() => {
      setLoading(false);
    }, 600);
    return () => clearTimeout(load);
  });
  return (
    <div className="industry-container">
      <div className="container">
        <div className="content-section">
          {loading ? (
            <div className="heading-section">
              <Skeleton width="50%" height="30px" className="p-mb-2 p-mt-2" />
              <Skeleton width="100%" />
            </div>
          ) : (
            <div className="heading-section">
              <h1>{props.heading}</h1>
              <p>{props.subheading}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default IndustrySection;
