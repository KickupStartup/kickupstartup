import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();

import Banner from '../../../components/common/Banner';
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
          <h4><T>ideas.tabs.solution.alert.header</T></h4>
          <p><T>ideas.tabs.solution.alert.text</T></p>
        </div>
        <div className="card row-border clearfix">
          <Banner author={this.props.author} />
          <div className="white-card">
            <LiveEditor
              onChange={this.handleSolutionChange}
              value={this.props.idea.solution}
              placeholder={i18n.__('ideas.tabs.solution.placeholder')} />
          </div>
        </div>
        <ListDivider />
      </div>
    )
  }
}
