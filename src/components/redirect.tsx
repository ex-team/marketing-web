import React from 'react';

class RedirectToDashboard extends React.Component {
  componentDidMount() {
    window.location.replace('https://www.google.com');
  }
  render() {
    return (
      <div className="redirect p-align-center p-justify-center">
        <h1>Redirect to dashboard...</h1>
      </div>
    );
  }
}

export default RedirectToDashboard;
