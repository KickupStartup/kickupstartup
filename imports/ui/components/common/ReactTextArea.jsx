import React, { Component } from 'react';

export default class ReactInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value || ''
    }

    this.onChange = props.onChange;
    this.onChange = _.debounce(this.onChange, 2000);

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
    this.onChange(event.target.value, this.props.id, event);
  }
  render() {
    return (
      <div className="input-field">
        <label htmlFor={this.props.id} className="active">{this.props.label}</label>
        <textarea type="text"
          id={this.props.id}
          className={this.props.className}
          value={this.state.value}
          onChange={this.handleChange}
          placeholder={this.props.placeholder} />
      </div>
    );
  }
}
