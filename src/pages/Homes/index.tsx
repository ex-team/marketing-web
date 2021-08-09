import React from 'react';

import {
  dataAbouts,
  dataBlogs,
  dataFeatures,
  dataHomes,
  dataPartners,
  dataSamples,
  dataServices,
  dataSliders,
  dataThematicSliders,
  dataThematics
} from '../../components/models';
import BlogSection from './blog-section';
import IndustrySection from './industry-section';
import PartnerSection from './partner-section';
// import SampleSection from './sample-section';
import SampleSection2 from './sample-section2';
import SliderSection from './slider-section';
import StaticSection from './static-section';
import ThematicSection from './thematic-section';
import VideoSection from './video-section';

export interface IndexState {
  homes: any;
  sliders: any;
  features: any;
  abouts: any;
  services: any;
  thematics: any;
  thematicSliders: any;
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
    services: dataServices,
    thematics: dataThematics,
    thematicSliders: dataThematicSliders,
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
            button_wa={this.state.homes.header_button_wa}
            url_wa={this.state.homes.header_url_wa}
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
        {this.state.homes.industries && (
          <IndustrySection
            heading={this.state.homes.industries_heading}
            subheading={this.state.homes.industries_subheading}
          />
        )}

        {this.state.homes.thematics && (
          <ThematicSection
            data={this.state.thematics}
            dataSlider={this.state.thematicSliders}
            heading={this.state.homes.thematics_heading}
            subheading={this.state.homes.thematics_subheading}
            thematics_banner={this.state.homes.thematics_banner}
            thematics_slider={this.state.homes.thematics_slider}
          />
        )}
        <SampleSection2
          data={this.state.samples}
          heading={this.state.homes.samples_heading}
          subheading={this.state.homes.samples_subheading}
        />
        {/* <SampleSection
          data={this.state.samples}
          heading={this.state.homes.samples_heading}
          subheading={this.state.homes.samples_subheading}
        /> */}
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
