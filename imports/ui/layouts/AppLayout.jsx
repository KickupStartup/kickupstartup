import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import { Link } from 'react-router';
import { createContainer } from 'meteor/react-meteor-data';

import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();

import TopBar from '../components/navigation/TopBar';
import JoinUsForm from '../components/common/JoinUsForm';
import ThirdPartyLoginButtons from '../components/common/ThirdPartyLoginButtons';

import Person from '../../api/people/Person';

class App extends Component {
  constructor(props) {
    super(props);

    // auto show idea create modal only once
    this.state = {
      modalLoggedinShown: false,
      modalUnauthorizedShown: false
    }

    this.handleIdeaCreate = this.handleIdeaCreate.bind(this);
  }
  componentDidUpdate() {
    if (this.props.location.query.new === null && !this.props.loading) {
      if (Meteor.userId()) {
        if (!this.state.modalLoggedinShown) {
          this.setState({modalLoggedinShown: true});
          this.openCreateIdeaModal();
        }
      } else {
        if (!this.state.modalUnauthorizedShown) {
          this.setState({modalUnauthorizedShown: true});
          this.openCreateIdeaModal();
        }
      }
    }
  }
  openCreateIdeaModal() {
    $('.modal').modal();
    $('#createidea').modal('open');
  }
  handleIdeaCreate(event) {
    event.preventDefault();
    const router = this.props.router;

    // create new idea
    Meteor.call("idea.new", function(error, newIdea){
      if(error) {
        console.log("idea.new error ", error);
      }
      if(newIdea) {
        router.push('/idea/' + newIdea._id);
      }
    });
  }
  renderCreateIdeaLink() {
    return (
      <div className="content modal-create modal-action modal-close" onClick={this.handleIdeaCreate}>
        <ul className="collection">
          <li className="collection-item avatar">
            <i className="fa fa-lightbulb-o circle"></i>
            <span className="title">Идею</span>
            <p>
              Для создания классного стартапа необходима проверенная идея, иначе вы рискуете разработать не востребованный рынком продукт или сервис.
            </p>
          </li>
        </ul>
      </div>
    );
  }
  renderLoginLink() {
    return (
      <div className="content modal-create modal-action modal-close modal-unauthorized">
        <ul className="collection">
          <li className="collection-item avatar">
            <i className="fa fa-lightbulb-o circle"></i>
            <h3 className="title"><T>joinus.shortText</T></h3>
            <T>joinus.signupRequest</T>
            <ThirdPartyLoginButtons/>
          </li>
        </ul>
      </div>
    );
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
          { Meteor.userId() ? '' : <div className="container main joinUsForm"><JoinUsForm /></div> }
          { this.props.children }
          <div className="fixed-action-btn">
            <a className="btn-floating btn-large waves-effect waves-light modal-trigger" href="#!" onClick={this.openCreateIdeaModal}>
              <span className="fa fa-lightbulb-o fa-lg"></span>
            </a>
          </div>
        </div>
        <div id="createidea" className="modal bottom-sheet">
          <div className="modal-content">
            <a href="#!" className="modal-action modal-close default pull-right"><i className="fa fa-remove fa-lg"></i></a>
            <h3>{Meteor.userId() ? 'Добавить' : <T>joinus.header</T>}</h3>
            {Meteor.userId() ? this.renderCreateIdeaLink() : this.renderLoginLink()}
          </div>
        </div>
      </div>
      );
    }
  }
}

App.propTypes = {
  profile: PropTypes.object
};

export default AppLayout = createContainer(props => {
  const profileHandle = Meteor.subscribe("profile");
  const userId = Meteor.userId();
  const loading = !profileHandle.ready();
  const profile = (!loading && userId) ? Person.findOne({userId: userId}) : undefined;
  return {
    loading,
    profile,
  };
}, App);
