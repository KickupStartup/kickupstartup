import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();
import classNames from 'classnames';

import LiveEditor from '../../common/LiveEditor';

export default class DraftTabContent extends Component {
  constructor(props) {
    super(props);
    this.handleDraftChange = this.handleDraftChange.bind(this);
    this.handleDraftChange = _.debounce(this.handleDraftChange, 3000);
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
          <h4>Tip: Dapibus nec</h4>
          <p>Начните с описания идеи в свободной форме. Обязательно пригласите друзей, которые помогут вам с кристализацией идеи. В результате вы получите информацию необходимую для заполнения
            следующих блоков. Для удобства редактирования рекомендуем использовать FullScreen Mode <i className="fa fa-window-maximize"></i>.
          </p>
          {/* <ul className="controls right">
              <li><a href="#!"><i className="fa fa-chevron-circle-left"></i></a></li>
              <li><span>3 of 5</span></li>
              <li><a href="#!"><i className="fa fa-chevron-circle-right"></i></a></li>
          </ul> */}
        </div>
        <LiveEditor
          onChange={this.handleDraftChange}
          value={this.props.idea.draft}
          placeholder="Write your idea" />
      </div>

    )
  }
}
