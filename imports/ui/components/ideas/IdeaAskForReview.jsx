import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();

export default class IdeaAskForReview extends Component {
  constructor(props) {
    super(props);
    this.publishIdea = this.publishIdea.bind(this);
    this.unpublishIdea = this.unpublishIdea.bind(this);
  }
  publishIdea() {
    Meteor.call("idea.publish", this.props.idea._id, function(error, result){
      if(error){
        console.log("error", error);
      }
      if(result){}
    });
  }
  unpublishIdea() {
    Meteor.call("idea.unpublish", this.props.idea._id, function(error, result){
      if(error){
        console.log("error", error);
      }
      if(result){}
    });
  }
  renderPrivateCard() {
    return (
      <div className="white row-border clearfix">
        <div className="modal-header">
          <h3 className="modal-title"><T>ideas.publish.header.close</T></h3>
        </div>
        <div className="modal-body">
          <p><T>ideas.publish.text.close</T></p>
          <div className="col s12 right">
            <a onClick={this.publishIdea} href="#!" className="activator waves-effect waves-light orange-text btn-flat btn-margin">
              <span className="fa fa-eye"></span>
              <span><T>ideas.publish.button.close</T></span>
            </a>
          </div>
        </div>
    </div>);
  }
  renderPublicCard() {
    return (
      <div className="white row-border clearfix">
        <div className="modal-header">
          <h3 className="modal-title"><T>ideas.publish.header.open</T></h3>
        </div>
        <div className="modal-body">
          <p><T>ideas.publish.text.open</T></p>
          <div className="col s12 right">
            <a onClick={this.unpublishIdea} href="#!" className="activator waves-effect waves-light orange-text btn-flat btn-margin">
              <span className="fa fa-eye-slash"></span>
              <span><T>ideas.publish.button.open</T></span>
            </a>
          </div>
        </div>
    </div>);
  }
  render () {
    return (
      <div>
        {this.props.idea.isPublic() ?
          this.renderPublicCard() :
          this.renderPrivateCard()}
      </div>
    );
  }
}
