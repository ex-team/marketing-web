import React, { useState, useEffect } from 'react';

import { Button } from 'primereact/button';
import { Skeleton } from 'primereact/skeleton';

export interface Props {
  data: any;
  heading: string;
  subheading: string;
}

function SampleSection(props: Props) {
  // const samples = props.data;
  const sample1 = props.data[0];
  const sample2 = props.data[1];
  const sample3 = props.data[2];

  const [modal, setModal] = useState(false);
  const [tempSrc, setTempSrc] = useState('');
  const [tempTitle, setTempTitle] = useState('');
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const load = setTimeout(() => {
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
          </div>
        )}
        <div className="content-section">
          <div className="p-grid">
            <div className="sample p-col-12 p-md-6">
              <div className="video-embed p-shadow-4">
                <img src={sample1.thumbnail} alt={sample1.title} />
                <div className="play-btn">
                  <Button
                    icon="pi pi-play"
                    className="p-button-rounded p-button-primary"
                    onClick={() => getSrc(sample1.url, sample1.title)}
                  />
                </div>
              </div>
            </div>
            <div className="sample p-col-12 p-md-6">
              <div className="video-embed p-shadow-4">
                <img src={sample2.thumbnail} alt={sample2.title} />
                <div className="play-btn">
                  <Button
                    icon="pi pi-play"
                    className="p-button-rounded p-button-primary"
                    onClick={() => getSrc(sample2.url, sample2.title)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="p-grid d-none">
            <div className="sample row2 p-col-12 p-lg-3"></div>
            <div className="sample  p-col-12 p-lg-6">
              <div className="video-embed p-shadow-4">
                <img src={sample3.thumbnail} alt={sample3.title} />
                <div className="play-btn">
                  <Button
                    icon="pi pi-play"
                    className="p-button-rounded p-button-primary"
                    onClick={() => getSrc(sample3.url, sample3.title)}
                  />
                </div>
              </div>
            </div>
            <div className="sample row2 p-col-12 p-lg-3"></div>
          </div>
          <div className="more p-d-flex p-jc-center">
            <a href="https://wa.me/6289623498800/" target="_blank" rel="noopener noreferrer">
              <Button label="Demo Lainnya Hubungi Kami" />
            </a>
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
