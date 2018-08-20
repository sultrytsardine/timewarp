import React, {Component} from 'react';
import { connect } from 'react-redux';

class Home extends Component {
	render() {
		return(
			<div>
                Welcome home
			</div>
		);
	}
}

const mapStateToProps = state => ({
	...state
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);