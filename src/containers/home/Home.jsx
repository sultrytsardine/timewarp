import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { retrieveClientData } from '../../actions/retrieveClientData.js';

class Home extends Component {

  constructor() {
    super();
  }

  componentDidMount() {
    const token = window.localStorage['timewarp-token'];
    if (!token) {
      this.props.history.push('/login');
    } else {
      this.props.retrieveClientData(token);
    }
  }

  render() {
    return this.props.configuration.length > 0 ? (
      <div>
                Welcome home
      </div>
    ) : 'LOADING...';
  }
}

const mapStateToProps = state => ({
  loading: state.loading,
  initialConfiguration: state.initialConfiguration,
  error: state.error,
});

const mapDispatchToProps = {
  retrieveClientData
};

Home.propTypes = {
  configuration: PropTypes.object,
  loading: PropTypes.bool,
  error: PropTypes.object,
  retrieveClientData: PropTypes.func,
  history: PropTypes.object
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);