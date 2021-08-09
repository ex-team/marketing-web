import React from 'react';

export interface Props {
  heading: string;
  subheading: string;
}
function IndustrySection(props: Props) {
  return (
    <div className="industry-container">
      <div className="container">
        <div className="content-section">
          <div className="heading-section">
            <h1>{props.heading}</h1>
            <p>{props.subheading}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndustrySection;
