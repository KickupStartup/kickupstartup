import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import Avatar from 'react-avatar';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();

export default class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      message: ''
    };
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleTitleChange(event) {
    this.setState({title: event.target.value});
  }
  handleMessageChange(event) {
    this.setState({message: event.target.value});
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);

    Meteor.call("comment.insert",
        this.state.title,
        this.state.message,
      function(error, result) {
        this.setState({title: '', message: ''});
        if(error){
          console.log("error", error);
        }
        if(result){

        }
      });
  }
  render () {
    return (
      <form className="scrollspy" role="form">
        <div className="form-horizontal">
          <div className="form-group clearfix">
            <div className="input-field">
              { /*length="72"*/}
              <input id="comment-text" type="text" placeholder={i18n.__('comment.placeholder.title')}/>
              <span className="character-counter counter"></span>
            </div>
          </div>
        </div>
        <div className="form-group clearfix">
          <div className="input-field">
            { /* length="672" */ }
            <textarea id="textarea" className="materialize-textarea" placeholder={i18n.__('comment.placeholder.message')}></textarea>
            <span className="character-counter counter"></span>
          </div>
        </div>
        <div className="form-group clearfix">
          <div className="tweet pull-left">
            <input type="checkbox" className="filled-in orange" id="filled-in-box"/>
            <label htmlFor="filled-in-box"><T>comment.tweetCheckbox</T></label>
          </div>
          <div className="pull-right">
            <button data-target="modal-sign_up" type="submit" className="waves-effect orange accent-3 waves-light btn">
              <span className="fa fa-paper-plane"></span>
              <span><T>comment.submitButton</T></span>
            </button>
          </div>
        </div>
      </form>
    )
  }
}
