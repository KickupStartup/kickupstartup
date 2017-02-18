import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();

import Banner from '../../../components/common/Banner';
import ListDivider from '../../../components/list/ListDivider';
import LiveEditor from '../../common/LiveEditor';

export default class ProblemTabContent extends Component {
  constructor(props) {
    super(props);
    this.handleProblemChange = this.handleProblemChange.bind(this);
    this.handleProblemChange = _.debounce(this.handleProblemChange, 2000);
  }
  handleProblemChange(problem) {
    const idea = this.props.idea;
    Meteor.call("idea.update.problem", idea._id, problem, function(error, result) {
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
          <h4><T>ideas.tabs.problem.alert.header</T></h4>
          <p><T>ideas.tabs.problem.alert.text</T></p>
        </div>
        <div className="card row-border clearfix">
          <Banner author={this.props.author} />
          <div className="white-card">
            <LiveEditor
              onChange={this.handleProblemChange}
              value={this.props.idea.problem}
              placeholder={i18n.__('ideas.tabs.problem.placeholder')} />
          </div>
        </div>
        <ListDivider />
      </div>
    )
  }
}
