import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { browserHistory, Link } from 'react-router';
import { createContainer } from 'meteor/react-meteor-data';
import TopBar from '../components/navigation/TopBar.jsx';
import JoinUsForm from '../components/common/JoinUsForm.jsx';

import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();

import Person from '../../api/people/Person';

class App extends Component {
  handlePlusButtonClick(event) {
    event.preventDefault();
    $('#modal').openModal();
  }
  handleIdeaCreate(event) {
    console.log(event);

    event.preventDefault();
    // create new idea
    Meteor.call("idea.new", function(error, newIdea){
      if(error) {
        console.log("idea.new error ", error);
      }
      if(newIdea) {
        console.log("idea.new result ", newIdea);
        $('#modal').closeModal();
        browserHistory.push('/ideas/' + newIdea._id);
      }
    });
  }
  render() {
    if (this.props.loading) {
      return (
        <div></div>
      );
    } else {
      return (
      <div>
        <div className="submenu">
          <TopBar profile={this.props.profile} />
          <div className="container main">
            <div id="backButtonMenu" className="row hidden">
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
            <a onClick={this.handlePlusButtonClick} className="btn-floating btn-large modal-trigger waves-effect waves-light" href="!#">
              <span className="fa fa-plus fa-lg"></span>
            </a>
          </div>
        </div>

          <div id="modal" className="modal bottom-sheet">
            <div className="modal-content">
              <a href="#!" className="modal-action modal-close default pull-right"><i className="fa fa-remove fa-lg"></i></a>
              <h3>Create</h3>
              <div className="content modal-create" onClick={this.handleIdeaCreate}>
                <ul className="collection">
                  <li className="collection-item avatar">
                    <i className="fa fa-lightbulb-o circle"></i>
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
}

App.propTypes = {
  user: PropTypes.object,
  profile: PropTypes.object
};

export default AppLayout = createContainer(props => {
  const profileHandle = Meteor.subscribe("person.byuserid", Meteor.userId());
  const loading = !profileHandle.ready();
  return {
    loading,
    user: Meteor.user(),
    profile: Person.findOne({userId: Meteor.userId()})
  };
}, App);
