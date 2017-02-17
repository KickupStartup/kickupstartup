import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();

export default class IdeaAuthorButtonGroup extends Component {
  constructor(props) {
    super(props);

    this.state = {iconClasses: props.iconClasses || "fa fa-lightbulb-o circle"};

    this.handleModalActionClick = this.handleModalActionClick.bind(this);
  }
  handleModalActionClick(event) {
    event.preventDefault();
    this.props.onClick(event);
  }
  render () {
    return (
      <div id={this.props.id} className="modal bottom-sheet">
        <div className="modal-content">
          <a href="#!" className="modal-action modal-close default right"><i className="fa fa-remove fa-lg"></i></a>
          <h3>{this.props.header}</h3>
          <div className="content modal-create modal-action modal-close" onClick={this.handleModalActionClick}>
            <ul className="collection">
              <li className="collection-item avatar clearfix">
                <i className={this.state.iconClasses}></i>
                <span className="title">{this.props.linkHeader}</span>
                <p>{this.props.linkText}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
