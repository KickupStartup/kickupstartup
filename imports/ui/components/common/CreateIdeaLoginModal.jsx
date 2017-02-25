import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';

import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();

import SwitchLocaleLinks from '../locale/SwitchLocaleLinks';
import ThirdPartyLoginButtons from './ThirdPartyLoginButtons';

export default class CreateIdeaLoginModal extends Component {
  constructor(props) {
    super(props);

    // auto show idea create modal only once
    this.state = {
      modalLoggedinShown: false,
      modalUnauthorizedShown: false
    }

    this.handleIdeaCreate = this.handleIdeaCreate.bind(this);
  }
  handleIdeaCreate(event) {
    event.preventDefault();
    const router = this.context.router;

    // create new idea
    Meteor.call("idea.new", function(error, newIdea){
      if(error) {
        console.log("idea.new error ", error);
      }
      if(newIdea) {
        $('#createidea').modal('close');
        router.push('/idea/' + newIdea._id);
      }
    });
  }
  componentDidMount() {
    if ('new' in this.props.urlQuery) {
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
  openCreateIdeaModal(event) {
    $('.modal').modal();
    $('#createidea').modal('open');
  }
  closeCreateIdeaModal(event) {
    $('#createidea').modal('close');
  }
  renderCreateIdeaLink() {
    return (
      <div className="content modal-create modal-action">
        <ul className="collection">
          <li className="collection-item avatar clearfix">
            <i className="fa fa-lightbulb-o circle"></i>
            <h3 className="title"><T>ideas.new.header</T></h3>
            <p><T>ideas.new.text</T></p>
            <div className="card-footer clearfix right">
              <a href="#!" onClick={this.closeCreateIdeaModal} className="modal-action modal-close modal-link">
                <i className="fa fa-remove fa-lg" title="Cancel"></i>Cancel
              </a>
              <a href="#!" onClick={this.handleIdeaCreate} className="waves-effect waves-light orange btn modal-btn">
                <i className="fa fa-check-circle fa-lg" title="Create"></i>Create
              </a>
            </div>
          </li>
        </ul>
      </div>
    );
  }
  renderLoginLink() {
    return (
      <div className="content modal-create modal-action modal-unauthorized">
        <ul className="collection">
          <li className="collection-item avatar clearfix">
            <i className="fa fa-lightbulb-o circle"></i>
            <h3 className="title"><T>joinus.shortText</T></h3>
            <T>joinus.signupRequest</T>
            <ThirdPartyLoginButtons/>
          </li>
        </ul>
      </div>
    );
  }
  render () {
    return (
      <div>
        <div className="fixed-action-btn">
          <a href="#!"
            className="btn-floating btn-large waves-effect waves-light modal-trigger"
            onClick={this.openCreateIdeaModal}>
            <span className="fa fa-lightbulb-o fa-lg"></span>
          </a>
        </div>
        <div id="createidea" className="modal bottom-sheet">
          <div className="modal-content">
            <a href="#!" className="modal-action modal-close default right"><i className="fa fa-remove fa-lg"></i></a>
            <h3>{Meteor.userId() ? <T>joinus.addHeader</T> : <T>joinus.header</T>}</h3>
            {Meteor.userId() ? this.renderCreateIdeaLink() : this.renderLoginLink()}
          </div>
        </div>
      </div>
    );
  }
}

CreateIdeaLoginModal.contextTypes = {
  router: PropTypes.shape({
    push: PropTypes.func.isRequired
  })
}
