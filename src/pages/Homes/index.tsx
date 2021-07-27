import React from 'react';



import {
  dataHomes,
  dataBlogs,
  dataFeatures,
  dataAbouts,
  dataIndustries,
  dataServices,
  dataThematics,
  dataSamples,
  dataPartners,
  dataSliders,
} from './../../components/models';
import AboutSection from './about-section';
import BlogSection from './blog-section';
import IndustrySection from './industry-section';
import PartnerSection from './partner-section';
import SampleSection from './sample-section';
// import ServiceSection from './service-section';
import SliderSection from './slider-section';
import StaticSection from './static-section';
import ThematicSection from './thematic-section';
import VideoSection from './video-section';

export interface IndexState {
  homes: any;
  sliders: any;
  features: any;
  abouts: any;
  industries: any;
  services: any;
  thematics: any;
  samples: any;
  blogs: any;
  partners: any;
}

class Index extends React.Component<{}, IndexState> {
  state: IndexState = {
    homes: dataHomes,
    sliders: dataSliders,
    features: dataFeatures,
    abouts: dataAbouts,
    industries: dataIndustries,
    services: dataServices,
    thematics: dataThematics,
    samples: dataSamples,
    blogs: dataBlogs,
    partners: dataPartners,
  };

  componentDidMount() {
    window.addEventListener('scroll', this.scrollNavigation, true);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollNavigation, true);
  }
  scrollNavigation = () => {
    const doc = document.documentElement;
    const top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    const topnavEl = document.getElementById('topnav');
    if (top > 80) {
      topnavEl?.classList.add('nav-sticky');
    } else {
      topnavEl?.classList.remove('nav-sticky');
    }
  };

  render() {
    return (
      <React.Fragment>
        {this.state.homes.header_type === 0 ? (
          <StaticSection
            picture={this.state.homes.header_image}
            title={this.state.homes.header_title}
            description={this.state.homes.header_description}
            button={this.state.homes.header_button}
            url={this.state.homes.header_url}
            dataFeatures={this.state.features}
          />
        ) : this.state.homes.header_type === 1 ? (
          <SliderSection data={this.state.sliders} />
        ) : (
          <VideoSection
            video={this.state.homes.header_video}
            title={this.state.homes.header_title}
            description={this.state.homes.header_description}
            button={this.state.homes.header_button}
            url={this.state.homes.header_url}
          />
        )}
        {this.state.homes.abouts && <AboutSection dataFeatures={this.state.features} dataAbouts={this.state.abouts} />}
        {this.state.homes.industries && (
          <IndustrySection
            data={this.state.industries}
            heading={this.state.homes.industries_heading}
            subheading={this.state.homes.industries_subheading}
          />
        )}
        {/* {this.state.homes.services && (
          <ServiceSection
            data={this.state.services}
            heading={this.state.homes.services_heading}
            subheading={this.state.homes.services_subheading}
          />
        )} */}
        {this.state.homes.thematics && (
          <ThematicSection
            data={this.state.thematics}
            heading={this.state.homes.thematics_heading}
            subheading={this.state.homes.thematics_subheading}
            thematics_banner1={this.state.homes.thematics_banner1}
            thematics_banner2={this.state.homes.thematics_banner2}
          />
        )}
        <SampleSection
          data={this.state.samples}
          heading={this.state.homes.samples_heading}
          subheading={this.state.homes.samples_subheading}
        />
        {this.state.homes.blogs && (
          <BlogSection
            data={this.state.blogs}
            heading={this.state.homes.blogs_heading}
            subheading={this.state.homes.blogs_subheading}
          />
        )}
        {this.state.homes.partners && <PartnerSection data={this.state.partners} />}
      </React.Fragment>
    );
  }
}
export default Index;
