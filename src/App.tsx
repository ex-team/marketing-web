import './App.scss';

import React, { ComponentType } from 'react';
import DocumentMeta, { DocumentMetaProps } from 'react-document-meta';
import { ConnectedProps, connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { fetchPrefs } from './app/reducers/prefs';
import { AppDispatch, RootState } from './app/store';
import RouteEventWrapper from './components/RouteEventWrapper';
import Layout from './components/layouts';
import RedirectToDashboard from './components/redirect';
import IndexBlog from './pages/Blogs';
import IndexDetail from './pages/Blogs/Detail';
import IndexHome from './pages/Homes';
import IndexService from './pages/Services';
import { absoluteUrl } from './utils';

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

function withLayout(WrappedComponent: ComponentType<any>): React.FunctionComponent {
  return (props: any) => (
    <Layout>
      <WrappedComponent {...props}></WrappedComponent>
    </Layout>
  );
}

export interface Props extends ConnectedProps<typeof connector> {
  dispatch: AppDispatch;
}

class App extends React.Component<Props, {}> {
  componentDidMount() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.props.dispatch(fetchPrefs());
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
    const { prefs } = this.props;
    const bannerUrl = absoluteUrl('/assets/images/banner.jpg');
    const meta: DocumentMetaProps = {
      title: prefs.title,
      description: prefs.description,
      meta: {
        name: {
          author: prefs.author,
          keywords: prefs.keywords.join(','),
        },
        property: {
          'og:image': bannerUrl,
        },
      },
      auto: { ograph: true },
    };

    return (
      <React.Fragment>
        <DocumentMeta {...meta} />
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
