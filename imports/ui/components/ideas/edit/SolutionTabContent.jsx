import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();

import ListDivider from '../../../components/list/ListDivider';
import LiveEditor from '../../common/LiveEditor';

export default class SolutionTabContent extends Component {
  constructor(props) {
    super(props);
    this.handleSolutionChange = this.handleSolutionChange.bind(this);
    this.handleSolutionChange = _.debounce(this.handleSolutionChange, 2000);
  }
  handleSolutionChange(solution) {
    const idea = this.props.idea;
    Meteor.call("idea.update.solution", idea._id, solution, function(error, result) {
      if(error) {
        console.log("error", error);
      }
      if(result) {}
    });
  }
  render () {
    return (
      <div className={this.props.hidden}>
        <div className="alert alert-info clearfix" role="alert">
          <h4>Solution help</h4>
          <p>Solution help.
          </p>
          {/* <ul className="controls right">
              <li><a href="#!"><i className="fa fa-chevron-circle-left"></i></a></li>
              <li><span>3 of 5</span></li>
              <li><a href="#!"><i className="fa fa-chevron-circle-right"></i></a></li>
          </ul> */}
        </div>
        <div className="white card row-border clearfix">
          <div className="banner banner-edit banner-editor"></div>
          <LiveEditor
            onChange={this.handleSolutionChange}
            value={this.props.idea.solution}
            placeholder="Write a problem-solution essay" />
        </div>
        <ListDivider />
        {/* <div className="col s6 left"><a href="#draft" className="go-back">Back</a></div>
        <div className="col s6 right"><a href="#story" className="go-next">Choose your Audience</a></div>
        <ListDivider /> */}
      </div>
    )
  }
}
