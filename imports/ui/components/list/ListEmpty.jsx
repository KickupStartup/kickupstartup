import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();

export default class ListEmpty extends Component {
  constructor(props) {
    super(props);

    this.handleButtonClick = this.handleButtonClick.bind(this);
  }
  handleButtonClick(event) {
    this.props.onButtonClick(event);
  }
  renderButton() {
    return (
      <button type="submit" onClick={this.handleButtonClick} className="waves-effect waves-light orange btn">
        <span className="fa fa-check-circle"></span>{this.props.buttonText}
      </button>
    );
  }
  render () {
    return (
      <div className="card white row-border">
        <div className="content">
          <h3>{this.props.header}</h3>
          <p>{this.props.text}</p>
          <div className="col s12 text-center">
            {this.props.buttonText ? this.renderButton() : ''}
          </div>
        </div>
      </div>
    )
  }
}
