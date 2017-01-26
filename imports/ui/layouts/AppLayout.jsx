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
    $('#modal').openModal();
  }
  render() {
    return (
    <div>
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
            <a className="btn-floating btn-large modal-trigger waves-effect waves-light" data-target="modal">
              <span className="fa fa-plus fa-lg"></span>
            </a>
          </div>
        </div>
        
        <div id="modal" className="modal bottom-sheet">
          <div className="modal-content">
            <a href="#!" className="modal-action modal-close default pull-right"><i className="fa fa-remove fa-lg"></i></a>
            <h3>Create</h3>
            <div className="content modal-create">
              <ul className="collection">
                <li className="collection-item avatar">
                  <i className="fa fa-google-plus fa-lg material-icons circle"></i>
                  <span className="title">Idea</span>
                  <p>
                    Для создания amazing стартапа необходима проверенная идея, иначе вы рискуете разработать не востребованный рынком продукт или сервис.
                  </p>
                </li>
              </ul>
            </div>
          </div>
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
