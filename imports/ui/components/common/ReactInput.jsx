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
        <div className="form-group">
          <div className="input-group">
            <label htmlFor={this.props.id} className="idea-name active">{this.props.label}</label>
            <input type="text"
              id={this.props.id}
              className={"form-control " + this.props.className}
              value={this.state.value}
              onChange={this.handleChange}
              placeholder={this.props.placeholder} />
            <div className="input-group-addon saving">Saved</div>
          </div>
        </div>
        {/* <a href="#!" className="link-share right">Share</a>
          <label htmlFor={this.props.id} className="idea-name active">{this.props.label}</label>
          <input type="text"
          id={this.props.id}
          className={this.props.className}
          value={this.state.value}
          onChange={this.handleChange}
        placeholder={this.props.placeholder} /> */}
      </div>
    );
  }
}
