import './App.scss';

import React, { ComponentType } from 'react';
import { ConnectedProps, connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { fetchPrefs } from './app/reducers/prefs';
import { AppDispatch, RootState } from './app/store';
import Layout from './components/layouts';
import RedirectToDashboard from './components/redirect';
import RouteEventWrapper from './components/RouteEventWrapper';
import IndexBlog from './pages/Blogs';
import IndexDetail from './pages/Blogs/Detail';
import IndexHome from './pages/Homes';
import IndexService from './pages/Services';

/**
 * SSR window polyfill
 */
if (typeof window === 'undefined') {
  global.window = {} as any;
}

// const IndexHome = React.lazy(() => import('./pages/Homes'));
// const IndexService = React.lazy(() => import('./pages/Services'));
// const IndexDetail = React.lazy(() => import('./pages/Blogs/Detail'));
// const IndexBlog = React.lazy(() => import('./pages/Blogs'));

const routes = [
  { path: '/', component: IndexHome, exact: true },
  { path: '/services', component: IndexService, exact: true },
  { path: '/blogs', component: IndexBlog, exact: true },
  { path: '/blogs/:slug', component: IndexDetail, exact: true },
  { path: '/dashboard', component: RedirectToDashboard, isWithoutLayout: true, exact: true },
];

function withLayout(WrappedComponent: ComponentType<any>) {
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

export interface Props extends ConnectedProps<typeof connector> {
  dispatch: AppDispatch;
}

class App extends React.Component<Props, {}> {
  _setMeta() {
    document.title = this.props.prefs.title;
    let metaDescription = document.head.querySelector('meta[name="description"]');
    if (!metaDescription) {
      let meta = document.createElement('meta');
      meta.name = 'description';
      document.head.append(meta);
      meta.content = this.props.prefs.description;
    }
    metaDescription?.setAttribute('content', this.props.prefs.description);
  }

  componentDidMount() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this._setMeta();
    this.props.dispatch(fetchPrefs());
    // console.log(this.props);
    // console.log(this.props.dispatch(fetchPrefs()));
  }

  componentDidUpdate() {
    this._setMeta();
  }

  render() {
    return (
      <React.Fragment>
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
      </React.Fragment>
    );
  }
}

const connector = connect((state: RootState) => ({ prefs: state.prefs }));
export default connector(App);
