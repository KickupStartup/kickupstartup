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
          <h3 className="modal-title">Общий доступ к идее закрыт.</h3>
        </div>
        <div className="modal-body">
          <div className="col s12 text-center">
            <a onClick={this.publishIdea} href="#!" className="activator waves-effect waves-light orange accent-3 btn btn-margin">
              <span className="fa fa-eye"></span>
              <span>Открыть идею для всех</span>
            </a>
          </div>
        </div>
    </div>);
  }
  renderPublicCard() {
    return (
      <div className="white row-border clearfix">
        <div className="modal-header">
          <h3 className="modal-title">Идея общедоступна.</h3>
        </div>
        <div className="modal-body">
          <div className="col s12 text-center">
            <a onClick={this.unpublishIdea} href="#!" className="activator waves-effect waves-light orange accent-3 btn btn-margin">
              <span className="fa fa-eye-slash"></span>
              <span>Закрыть доступ для всех</span>
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
