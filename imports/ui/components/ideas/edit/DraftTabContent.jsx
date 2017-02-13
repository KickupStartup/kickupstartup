import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();

import ListDivider from '../../../components/list/ListDivider';
import LiveEditor from '../../common/LiveEditor';

export default class DraftTabContent extends Component {
  constructor(props) {
    super(props);
    this.handleDraftChange = this.handleDraftChange.bind(this);
    this.handleDraftChange = _.debounce(this.handleDraftChange, 2000);
  }
  handleDraftChange(draft) {
    const idea = this.props.idea;
    Meteor.call("idea.update.draft", idea._id, draft, function(error, result) {
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
          <h4>Черновой вариант</h4>
          <p>Начните с описания идеи в свободной форме. Обязательно пригласите друзей, которые помогут вам с кристализацией идеи. В результате вы получите информацию необходимую для заполнения
            следующих блоков.</p>
        </div>
        <div className="white card row-border clearfix">
          <LiveEditor
            onChange={this.handleDraftChange}
            value={this.props.idea.draft}
            placeholder="Write your idea" />
        </div>
        <ListDivider />
      </div>
    )
  }
}
