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
          <h4>Tip: Наброски</h4>
          <p>Начните с описания идеи в свободной форме. Наброски не доступны для публичного просмотра.</p>
          <p>Обязательно пригласите друзей, которые помогут вам с формированием идеи. В результате совместной работы вы быстро получите всю необходимую информацию для заполнения
            следующих блоков.{/*  Для удобства редактирования рекомендуем использовать FullScreen Mode <i className="fa fa-window-maximize"></i>. */}
          </p>
          {/* <ul className="controls right">
              <li><a href="#!"><i className="fa fa-chevron-circle-left"></i></a></li>
              <li><span>3 of 5</span></li>
              <li><a href="#!"><i className="fa fa-chevron-circle-right"></i></a></li>
          </ul> */}
        </div>
        <div className="white row-border clearfix">
          <div className="col s12">
            <div className="input-field col s12">
              <span className="prefix"><i className="fa fa-user-circle fa-lg"></i></span>
              <input type="text" id="autocomplete-input" className="autocomplete" />
              <label htmlFor="autocomplete-input">Add Collaborator</label>
            </div>
            <div className="chip">
              <img src="../img/banner-avatar.jpg" alt="Piter Black" />
              Piter Black <a href="#!" className="default"><i className="fa fa-remove fa-lg"></i></a>
            </div>
            <div className="chip">
              <img src="../img/no-photo.png" alt="Victor S." />
              Victor S. <a href="#!" className="default"><i className="fa fa-remove fa-lg"></i></a>
            </div>
          </div>
        </div>
        <ListDivider border={true}/>
        <div className="white card row-border clearfix">
          <i className="fa fa-lock fa-sm card-top-icon pull-right tooltipped" data-position="left" data-delay="50" data-tooltip="Not publicly visible"></i>
          <h3>Наброски</h3>
          <LiveEditor
            onChange={this.handleDraftChange}
            value={this.props.idea.draft}
            placeholder="Write your idea" />
        </div>
        <ListDivider />
        {/* <div className="col s6 right"><a href="#story" className="go-next">I'm ready to write my story</a></div>
        <ListDivider /> */}
      </div>
    )
  }
}
