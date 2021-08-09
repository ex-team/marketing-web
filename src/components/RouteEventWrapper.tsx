import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

class RouteEventWrapper extends React.Component<RouteComponentProps> {
  componentDidUpdate() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  render() {
    return this.props.children;
  }
}
export default withRouter(RouteEventWrapper);
