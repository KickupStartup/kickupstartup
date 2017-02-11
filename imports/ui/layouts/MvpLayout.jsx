import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

class AppMvp extends Component {
	render() {
		return(
			<div className="container shadow main">
				{ this.props.children }
			</div>
		);
	}
}

export default MvpLayout = createContainer(props => {
  return {
  };
}, AppMvp);
