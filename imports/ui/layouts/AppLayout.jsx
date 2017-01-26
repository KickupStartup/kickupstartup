import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { browserHistory, Link } from 'react-router';
import { createContainer } from 'meteor/react-meteor-data';
import Navigation from '../components/navigation/Navigation.jsx';
import JoinUsForm from '../components/common/JoinUsForm.jsx';

import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();

class App extends Component {
  componentDidMount() {
    $("#backButtonMenu").hide();
  }
  render() {
    return (
      <div className="submenu">
        <Navigation />
        <div className="container main">
          <div id="backButtonMenu" className="row">
            <div className="col s12 back clearfix">
              <div className="row">
                <div className="col s12"><Link href="/#!" onClick={browserHistory.goBack}><i className="fa fa-arrow-circle-left"></i><T>layout.backButton</T></Link></div>
              </div>
            </div>
          </div>
          { this.props.user ? '' : <JoinUsForm /> }
          { this.props.children }
        </div>
        <div className="fixed-action-btn">
          <a data-target="modal" className="btn-floating btn-large waves-effect waves-light">
            <span className="fa fa-plus fa-lg"></span>
          </a>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  user: PropTypes.object,
};

export default AppLayout = createContainer(props => {
  return {
    user: Meteor.user(),
  };
}, App);
