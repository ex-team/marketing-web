import React from 'react';



import { connect } from 'react-redux';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';



import './App.scss';
import { fetchPrefs } from './app/reducers/prefs';
import RouteEventWrapper from './components/RouteEventWrapper';
import Layout from './components/layouts';
import RedirectToDashboard from './components/redirect';
import IndexBlog from './pages/Blogs';
import IndexDetail from './pages/Blogs/Detail';
import IndexHome from './pages/Homes/index';
import IndexService from './pages/Services/index';

const routes = [
  { path: '/', component: IndexHome, exact: true },
  { path: '/services', component: IndexService, exact: true },
  { path: '/blogs', component: IndexBlog, exact: true },
  { path: '/blogs/:slug', component: IndexDetail, exact: true },
  { path: '/dashboard', component: RedirectToDashboard, isWithoutLayout: true, exact: true },
];

function withLayout(WrappedComponent) {
  return class extends React.Component {
    render() {
      return (
        <Layout>
          <WrappedComponent {...this.props}></WrappedComponent>
        </Layout>
      );
    }
  };
}

export interface Props {
  prefs: any;
  dispatch: any;
}

class App extends React.Component<Props, {}> {
  _setMeta() {
    // document.title = this.props.prefs.title;
    // let metaDescription = document.head.querySelector('meta[name="description"]');
    // if (!metaDescription) {
    //   metaDescription = document.createElement('meta');
    //   metaDescription.name = 'description';
    //   document.head.append(metaDescription);
    // }
    // metaDescription.content = this.props.prefs.description;
  }

  componentDidMount() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this._setMeta();
    this.props.dispatch(fetchPrefs());
  }

  componentDidUpdate() {
    this._setMeta();
  }

  render() {
    return (
      <React.Fragment>
        {/* <Router basename="/marketing-web"> */}
        <Router>
          <RouteEventWrapper>
            <TransitionGroup className="transition-group">
              <CSSTransition timeout={{ enter: 300, exit: 300 }} classNames="fade">
                <Switch>
                  {routes.map((route, idx) =>
                    route.isWithoutLayout ? (
                      <Route path={route.path} exact={route.exact} component={route.component} key={idx} />
                    ) : (
                      <Route path={route.path} exact={route.exact} component={withLayout(route.component)} key={idx} />
                    )
                  )}
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          </RouteEventWrapper>
        </Router>
      </React.Fragment>
    );
  }
}

export default connect((state: any) => ({ prefs: state.prefs }))(App);
