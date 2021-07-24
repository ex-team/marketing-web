import React from 'react'
export interface Props {
  dataFeatures: any;
  dataAbouts: any;
}
function AboutSection(props: Props) {
  const abouts = props.dataAbouts;
  return (
    <div className="about-container">
      <div className="container">
        <div className="featured-apps ">
          <div className="p-grid p-justify-center"></div>
        </div>
        <div className="about-description">
          <p className="description">{ abouts.abouts }</p>
        </div>
      </div>
    </div>
  )
}

export default AboutSection
