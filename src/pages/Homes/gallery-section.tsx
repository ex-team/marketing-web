import React, { useEffect, useState } from 'react';



import { Button } from 'primereact/button';
import { Skeleton } from 'primereact/skeleton';
import { Link } from 'react-router-dom';


export interface Props {
  data: any;
  heading: string;
  subheading: string;
}
function GallerySection(props: Props) {
  const [galleries, setGalleries] = useState(props.data);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const load = setTimeout(() => {
      setGalleries(props.data);
      setLoading(false);
    }, 600);
    return () => clearTimeout(load);
  });
  return (
    <div className="gallery-container">
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
          </div>
        )}
        <div className="content-section">
          <div className="gallery p-grid">
            {galleries.slice(0, 6).map((data, idx) => {
              if (loading) {
                return (
                  <div key={idx} className="picture p-col p-md-6 p-xl-4">
                    <Skeleton width="100%" height="100%" />
                  </div>
                );
              } else {
                return (
                  <div key={idx} className="picture p-col p-md-6 p-xl-4">
                    <img src={data.src} alt={data.title} className="p-shadow-3" />
                  </div>
                );
              }
            })}
          </div>
        </div>
        <div className="more p-d-flex p-jc-center">
          <Link to="/galleries">
            {loading ? <Skeleton width="20%" height="30px" /> : <Button label="Explore Gallery" />}
          </Link>
        </div>
      </div>
    </div>
  );
}
export default GallerySection;
