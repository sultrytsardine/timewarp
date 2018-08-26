import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FacebookLogin from 'react-facebook-login';
import { GoogleLogin } from 'react-google-login';
import config from '../../config.js';
import { setAuthenticated } from '../../actions/authentication.js';

class Login extends Component {
  constructor() {
    super();
    this.googleResponse = this.googleResponse.bind(this);
    this.facebookResponse = this.facebookResponse.bind(this);
    this.logout = this.logout.bind(this);
  }

  logout() {
    const { setAuthenticated } = this.props;
    window.localStorage.loginToken = '';
    setAuthenticated({ authenticated: false, token: null, user: null });
  }
  
  //TODO: add twitter and FB
  // twitterResponse(response) {}

  // facebookResponse(response) {}

  googleResponse(response) {
    const { setAuthenticated } = this.props;
    const tokenBlob = this.getTokenBlob(response.accessToken);
    const options = {
      method: 'POST',
      body: tokenBlob,
      mode: 'cors',
      cache: 'default'
    };
    fetch('http://localhost:4000/warp-service/auth/google', options).then(r => {
      const token = r.headers.get('x-auth-token');
      r.json().then(user => {
        if (token) {
          setAuthenticated({ authenticated: true, user, token });
          window.localStorage['timewarp-token'] = token;
        }
      });
    });
  }

  getTokenBlob(accessToken) {
    return new Blob(
      [JSON.stringify({ access_token: accessToken }, null, 2)],
      { type : 'application/json' }
    s);
  }

  onFailure(error) {
    alert(error);
  }

  render() {
    const { authenticated, user: { email } } = this.props;
    // TODO: keeps reloading buttons?
    let content = authenticated ?
      (
        <div>
          <p>Authenticated</p>
          <div>
            {email} 
          </div>
          <div>
            <button onClick={this.logout} className="button">
                            Log out
            </button>
          </div>
        </div>
      ) :
      (
        <div>
          <FacebookLogin
            appId="XXXXXXXXXX"
            autoLoad={false}
            fields="name,email,picture"
            callback={this.facebookResponse} />
          <GoogleLogin
            clientId={config.GOOGLE_CLIENT_ID}
            buttonText="Login"
            onSuccess={this.googleResponse}
            onFailure={this.googleResponse}
          />
        </div>
      );

    return (
      <div className="App">
        {content}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authenticated: state.authenticated,
  user: state.user
}); 

const mapDispatchToProps = {
  setAuthenticated
};

Login.propTypes = {
  authenticated: PropTypes.bool,
  setAuthenticated: PropTypes.func,
  user: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);