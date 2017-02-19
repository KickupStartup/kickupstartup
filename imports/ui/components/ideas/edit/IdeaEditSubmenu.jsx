import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import classNames from 'classnames';

import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();

import ReactInput from '../../common/ReactInput';
import BookmarkIdeaLink from '../BookmarkIdeaLink';
import IdeaAuthorButtonGroup from './IdeaAuthorButtonGroup';
import UnderDevelopmentIcon from '../../common/UnderDevelopmentIcon';

export default class IdeaEditSubmenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0
    }
    this.switchTab = this.switchTab.bind(this);
    this.changeView = this.changeView.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.renderNavigationTabs = this.renderNavigationTabs.bind(this);
  }
  switchTab(event) {
    event.preventDefault();
    const newActiveTab = (event.target.nodeName == 'SPAN') ?
                          event.target.parentElement.dataset.tabindex :
                          event.target.dataset.tabindex;
    this.setState({
      activeTab: newActiveTab
    });
    this.props.onTabChanged(newActiveTab);
  }
  changeView(event) {
    event.preventDefault();
    this.props.onViewChanged(event);
  }
  handleNameChange(name) {
    Meteor.call("idea.update.name", this.props.idea._id, name, function(error, result) {
      if(error) {
        console.log("error", error);
      }
      if(result) {}
    });
  }
  tabActiveClass(active) {
    let classes = classNames({
      'active': this.state.activeTab == active,
    });
    return classes;
  }
  renderNavigationTabs() {
    return (
      <ul className="nav nav-tabs">
        <li className={this.tabActiveClass(0)}><a href="#draft" data-tabindex="0" onClick={this.switchTab}><T>ideas.tabs.draft.name</T></a></li>
        <li className={this.tabActiveClass(1)}><a href="#story" data-tabindex="1" onClick={this.switchTab}><T>ideas.tabs.story.name</T></a></li>
        <li className={this.tabActiveClass(2)}><a href="#problem" data-tabindex="2" onClick={this.switchTab}><T>ideas.tabs.problem.name</T></a></li>
        <li className={this.tabActiveClass(3)}><a href="#solution" data-tabindex="3" onClick={this.switchTab}><T>ideas.tabs.solution.name</T></a></li>
        <li className={this.tabActiveClass(4)}><a href="#validation" data-tabindex="4" onClick={this.switchTab}><T>ideas.tabs.validation.name</T></a></li>
      </ul>
    );
  }
  render () {
    const userId = Meteor.userId();
    return (
      <div className="main-grey">
        <div className="container main">
          <div className="row">
            <div className="col s12 m6 idea_title">
              {(this.props.edit && userId) ?
                <ReactInput id="ideaName"
                  value={this.props.idea.name}
                  onChange={this.handleNameChange}
                  placeholder={i18n.__('ideas.edit.title.placeholder')} /> :
                <h3>{this.props.idea.name ? this.props.idea.name : <T>ideas.view.placeholder.title</T>}
                  {this.props.authored ? '' :
                    <BookmarkIdeaLink
                      bookmarks={this.props.profile ? this.props.profile.bookmarkIdeas : []}
                      ideaId={this.props.idea._id}
                      view={true}/>}
                </h3>}
            </div>
            {this.props.authored && userId ?
              <div className="col s12 m6">
                <IdeaAuthorButtonGroup edit={this.props.edit} idea={this.props.idea} onViewChanged={this.changeView} />
              </div> :
              <div className="col s12 m6">
                <button onClick="" className="dropdown-button waves-effect waves-light green btn right">
                  <T>ideas.publish.button.join</T>
                </button>
              </div>
            }
          </div>
          {(this.props.edit && Meteor.userId()) ? this.renderNavigationTabs() : ''}
        </div>
      </div>
    )
  }
}

IdeaEditSubmenu.contextTypes = {
  router: PropTypes.shape({
    push: PropTypes.func.isRequired
  })
}

IdeaEditSubmenu.propTypes = {
  idea: PropTypes.object
}
