import React from 'react';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';

import logoDark from '../../assets/images/logo_digipeta.svg';
import logoLight from '../../assets/images/logo_light_digipeta.svg';

type TopbarState = {
  logo: any;
  navLinks: any;
  isLight: boolean;
  isOpen: boolean;
};

class Topbar extends React.Component<RouteComponentProps<{}>, TopbarState> {
  state: TopbarState = {
    navLinks: [],
    logo: logoLight,
    isLight: true,
    isOpen: false,
  };

  checkDarkListener = this.checkDark.bind(this);

  get isDark() {
    const topnavEl = document.getElementById('topnav');
    return window.innerWidth > 768 && topnavEl && topnavEl.classList.contains('.nav-dark');
  }
  get isDesktop() {
    return window.innerWidth > 768;
  }
  checkDark() {
    // const logo = this.isDark ? logoLight : logoDark;
    const logo = this.state.isLight && this.isDesktop ? logoLight : logoDark;
    if (logo !== this.state.logo) this.setState({ logo });
  }
  listenScrollEvent = () => {
    if (window.scrollY > 80) {
      this.setState({ isLight: false });
    } else {
      this.setState({ isLight: true });
    }
  };
  componentDidMount() {
    this.checkActiveMenu();
    window.addEventListener('scroll', this.listenScrollEvent);
    window.addEventListener('resize', this.checkDarkListener);
    window.addEventListener('load', () => {
      this.checkDark();
    });
  }
  componentDidUpdate() {
    this.checkActiveMenu();
    this.checkDark();
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenScrollEvent);
    window.removeEventListener('resize', this.checkDarkListener);
  }
  toggleLine = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  };
  absoluteUri(uri: any) {
    if (/^(https?:\/)?\//.test(uri)) return uri;
    return '/' + uri;
  }
  checkActiveMenu() {
    const ul = document.getElementById('top-menu');
    const items = ul?.querySelectorAll('a');
    // Clear active items
    ul?.querySelectorAll('.active').forEach(el => el.classList.remove('active'));
    items?.forEach(item => {
      const pathname = item.href.endsWith('#') ? '#' : item.pathname;
      if (this.props.location.pathname === pathname) {
        let parent = item.parentElement;
        while (parent) {
          parent.classList.add('active');
          parent = parent.parentElement;
          if (parent === ul) break;
        }
      }
    });
  }
  render() {
    return (
      <React.Fragment>
        <header id="topnav" className="defaultscroll sticky">
          <div className="container-fluid container-md">
            <div className="logo">
              <Link className="logo" to="/">
                {this.isDesktop ? (
                  <img src={this.state.logo} className="brandLogo" alt="brand-logo" />
                ) : (
                  <img src={logoDark} className="brandLogo" alt="brand-logo" />
                )}
              </Link>
            </div>
            <div className="menu-extras">
              <div className="menu-item">
                <button
                  onClick={this.toggleLine}
                  className={this.state.isOpen ? 'navbar-toggle open' : 'navbar-toggle'}
                  style={{ background: 'inherit' }}
                >
                  <div className="lines">
                    <span />
                    <span />
                    <span />
                  </div>
                </button>
              </div>
            </div>

            <div id="navigation" className="navigation" style={{ display: this.state.isOpen ? 'block' : 'none' }}>
              <ul id="top-menu" className="navigation-menu">
                <li>
                  <Link style={{ color: this.state.isLight && this.isDesktop ? '#fff' : '#000' }} to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    style={{ color: this.state.isLight && this.isDesktop ? '#fff' : '#000' }}
                    to={this.absoluteUri('services')}
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    style={{ color: this.state.isLight && this.isDesktop ? '#fff' : '#000' }}
                    to={this.absoluteUri('blogs')}
                  >
                    Blogs
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </header>
      </React.Fragment>
    );
  }
}
export default withRouter(Topbar);
