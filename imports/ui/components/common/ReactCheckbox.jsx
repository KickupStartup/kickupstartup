import React, { Component } from 'react';

export default class ReactCheckbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: props.checked
    }

    this.onChange = props.onChange;
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({checked: event.target.checked});
    this.onChange(event.target.checked, this.props.id, event);
  }
  render() {
    return (
      <div>
        <input type="checkbox"
          id={this.props.id}
          className={this.props.className}
          checked={this.state.checked}
          onChange={this.handleChange}/>
        <label htmlFor={this.props.id}>{this.props.label}</label>
      </div>
    );
  }
}
