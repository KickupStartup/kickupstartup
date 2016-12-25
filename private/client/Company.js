import React, { Component } from 'react';

export default class Company extends Component {
  render() {
    return (
      <div className='company'>
        <div className='title'>{this.props.company.name}</div>
        <span className='value'>{this.props.company.value}</span>
      </div>
    );
  }
}
