import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();

export default class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {message: ''};
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.afterSubmit = this.afterSubmit.bind(this);
  }
  handleMessageChange(event) {
    this.setState({message: event.target.value});
  }
  handleSubmit(event) {
    event.preventDefault();
    if(this.state.message.length > 0) {
      Meteor.call("comment.insert", this.props.idea._id, this.state.message, this.afterSubmit);
      this.setState({message: ''});
    }
  }
  afterSubmit(error, result) {
    if(error) {
      console.log("error", error);
    }
    if(result) {
      console.log(result);
    }
  }
  render () {
    return (
      <form role="form">
        {/* <div className="form-horizontal">
          <div className="form-group clearfix">
            <div className="input-field">
              <input type="text" placeholder={i18n.__('comment.placeholder.title')}/>
              <span className="character-counter counter"></span>
            </div>
          </div>
        </div> */}
        <div className="form-group clearfix">
          <div className="input-field">
            <textarea className="materialize-textarea"
              name="comment-text"
              value={this.state.message}
              onChange={this.handleMessageChange}
              placeholder={i18n.__('comment.placeholder.message')}>
            </textarea>
            <span className="character-counter counter"></span>
          </div>
        </div>
        <div className="form-group clearfix">
          {/* <div className="tweet pull-left">
            <input type="checkbox" className="filled-in orange"/>
            <label htmlFor="filled-in-box"><T>comment.tweetCheckbox</T></label>
          </div> */}
          <div className="pull-right">
            <button onClick={this.handleSubmit} disabled={!this.state.message} type="submit" className="waves-effect waves-light btn btn-flat">
              <span className="fa fa-paper-plane"></span>
              <span><T>comment.submitButton</T></span>
            </button>
          </div>
        </div>
      </form>
    )
  }
}
