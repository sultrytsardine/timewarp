import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { retrieveClientData } from '../../actions/retrieveClientData.js';
import { setAuthenticated } from '../../actions/authentication.js';

class Home extends Component {

  constructor() {
    super();
  }

  componentDidMount() {
    const { history, retrieveClientData, setAuthenticated, user } = this.props;
    const token = window.localStorage['timewarp-token'];
    if (!token) {
      history.push('/login');
    } else {
      retrieveClientData(token);
      setAuthenticated({ authenticated: true, user, token });
    }
  }

  render() {
    const { initialConfiguration } = this.props;
    return initialConfiguration.length > 0 ? (
      <div>
                Welcome home
      </div>
    ) : 'LOADING...';
  }
}

const mapStateToProps = state => ({
  authenticated: state.authenticated,
  loading: state.loading,
  initialConfiguration: state.initialConfiguration,
  error: state.error,
  user: state.user
});

const mapDispatchToProps = {
  retrieveClientData,
  setAuthenticated
};

Home.propTypes = {
  initialConfiguration: PropTypes.object,
  loading: PropTypes.bool,
  error: PropTypes.object,
  retrieveClientData: PropTypes.func,
  history: PropTypes.object,
  setAuthenticated: PropTypes.func,
  user: PropTypes.object
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);