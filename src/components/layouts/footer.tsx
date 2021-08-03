import React from 'react';

import { Button } from 'primereact/button';

import { dataFooter } from '../models';

export interface State {
  logo: string;
  logo2: string;
  description: string;
  downloads: any;
  copyrights: string;
  quicklinks: any;
  contacts: any;
  socials: any;
}

class Footer extends React.Component<{}, State> {
  state: State = {
    logo: dataFooter[0].logo,
    logo2: dataFooter[0].logo2,
    description: dataFooter[0].description,
    downloads: dataFooter[0].downloads,
    copyrights: dataFooter[0].copyrights,
    quicklinks: dataFooter[0].quicklinks,
    contacts: dataFooter[0].contacts,
    socials: dataFooter[0].socials,
  };

  componentDidMount() {}

  render() {
    return (
      <React.Fragment>
        <footer className="footer">
          <div className="footer-content container">
            <div className="p-grid">
              <div className="p-col-12 p-lg-4">
                <div className="footer-logo p-pt-0 p-pb-4">
                  <img src={this.state.logo} alt={this.state.copyrights} />
                </div>
                <p className="description">{this.state.description}</p>
                {/* <div className="footer-logo-second p-pt-4 p-pb-0">
                  <a href='https://karomap.com/' target="_blank" rel="noopener noreferrer">
                    <img src={this.state.logo2} alt={this.state.copyrights} />
                  </a>
                </div> */}
              </div>
              <div className="quicklinks p-col-12 p-lg-2">
                <h1>Quick Links</h1>
                <div className="content">
                  <ul>
                    {this.state.quicklinks.map((data, idx) => (
                      <li key={idx}>
                        <a href={data.url} target="_blank" rel="noopener noreferrer">
                          {data.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="contacts p-col-12 p-lg-4">
                <h1>Kontak</h1>
                <div className="content">
                  <ul>
                    {this.state.contacts.map((data, idx) => (
                      <li key={idx}>
                        {data.name} : {data.description}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="downloads p-col-12 p-lg-2">
                <h1>Get the App</h1>
                <div className="content">
                  <div className="logo">
                    {this.state.downloads.map((data, idx) => (
                      <a key={idx} href={data.url} target="_blank" rel="noopener noreferrer">
                        <img className="p-pt-2 p-mx-1" src={data.icon} alt={data.name} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div className="bottom-bar">
          <div className="p-grid container">
            <div className="p-col-12 p-lg-5 copyright">
              <p>
                &copy; {new Date().getFullYear()} {this.state.copyrights}
              </p>
            </div>
            <div className="p-col-12 p-lg-7 social-media p-grid p-justify-end d-none">
              {this.state.socials.map((data, idx) => (
                <a key={idx} href={data.url} target="_blank" rel="noopener noreferrer">
                  <Button className="social p-p-0 p-m-1 p-mx-xl-3">
                    <i className={`pi pi-${data.icon} p-px-2`}></i>
                  </Button>
                </a>
              ))}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Footer;
