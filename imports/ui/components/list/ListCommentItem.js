import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();

import { moment } from 'meteor/momentjs:moment';
import Avatar from 'react-avatar';
import ReactTextArea from '../common/ReactTextArea';

export default class ListCommentItem extends Component {
  constructor(props) {
    super(props);
    this.state = {edit: false, message: this.props.comment.message};
    this.startEdit = this.startEdit.bind(this);
    this.confirmEdit = this.confirmEdit.bind(this);
    this.remove = this.remove.bind(this);
    this.handleEditCommentChange = this.handleEditCommentChange.bind(this);
  }
  startEdit(event) {
    event.preventDefault();
    this.setState({edit: true});
  }
  confirmEdit() {
    event.preventDefault();
    this.setState({edit: false});
  }
  remove(event) {
    event.preventDefault();
    Meteor.call("comment.remove", this.props.comment._id, function(error, result){
      if(error){
        console.log("error", error);
      }
      if(result){}
    });
  }
  handleEditCommentChange(newComment) {
    this.setState({message: newComment});
    Meteor.call("comment.update", this.props.comment._id, newComment, function(error, result){
      if(error){
        console.log("error", error);
      }
      if(result){}
    });
  }
  renderEditRemoveLinks() {
    return (
      <span className="comment-control">
        <a onClick={this.remove} href="#!" title="Удалить"><i className="fa fa-trash"></i></a>
        &middot;
        {!this.state.edit ?
          <a onClick={this.startEdit} href="#!" title="Редактировать"><i className="fa fa-pencil"></i></a> :
          <a onClick={this.confirmEdit} href="#!" title="Сохранить изменения"><i className="fa fa-check-square"></i></a>}
      </span>
    );
  }
  render () {
    const fullName = this.props.author ? this.props.author.fullName : '';
    return (
      <li className="collection-item avatar">
        <span className="chat-date">{moment(this.props.comment.createdAt).fromNow()}</span>
        <Avatar className="circle" name={fullName} round={true} size={48}></Avatar>
        <span className="title">{fullName}</span>
        {this.props.comment.isAuthor(Meteor.userId()) ?
          this.renderEditRemoveLinks() : ''}
        {this.state.edit ?
          <ReactTextArea id={this.props.comment._id}
            className="materialize-textarea editable"
            value={this.state.message}
            onChange={this.handleEditCommentChange}/> :
          <p>{this.state.message}</p>}
      </li>
    )
  }
}

ListCommentItem.propTypes = {
  comment: PropTypes.object,
  author: PropTypes.object
}
