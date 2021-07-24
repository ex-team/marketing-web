import React from 'react';

import { Button } from 'primereact/button';

export interface Props {
  video: string;
  title: string;
  description: string;
  button: string;
  url: string;
}
function VideoSection(props: Props) {
  return (
    <div className="home-hero-container">
      <video src={props.video} autoPlay loop muted />
      <div className="container">
        <div className="heading-title">
          <h1>{props.title}</h1>
          <p>{props.description}</p>
          <div className="hero-btn">
            <a href={props.url} target="_blank" rel="noopener noreferrer">
              <Button label={props.button} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default VideoSection;
