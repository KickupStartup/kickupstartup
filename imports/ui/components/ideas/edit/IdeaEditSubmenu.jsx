import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import classNames from 'classnames';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();
import ReactInput from '../../common/ReactInput';
import BookmarkIdeaLink from '../BookmarkIdeaLink';

export default class IdeaEditSubmenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0
    }
    this.switchTab = this.switchTab.bind(this);
    this.changeView = this.changeView.bind(this);
    this.handleIdeaRemoveClick = this.handleIdeaRemoveClick.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.renderNavigationTabs = this.renderNavigationTabs.bind(this);
    this.renderEditMenu = this.renderEditMenu.bind(this);
    this.renderViewMenu = this.renderViewMenu.bind(this);
    this.renderViewOnlyMenu = this.renderViewOnlyMenu.bind(this);
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
  handleIdeaRemoveClick(event) {
    event.preventDefault();
    Meteor.call("idea.remove", this.props.idea._id, function(error, result){
      if(error){
        console.log("error", error);
      }
      if(result){}
    });
    this.context.router.push('/ideas/yours');
  }
  tabActiveClass(active) {
    let classes = classNames({
      'active': this.state.activeTab == active,
    });
    return classes;
  }
  renderEditMenu() {
    return(
      <div className="row">
        <div className="col s12 m6 idea_title">
          <ReactInput id="ideaName"
            value={this.props.idea.name}
            onChange={this.handleNameChange}
            placeholder="Your awesome idea title" />
        </div>
        <div className="col s12 m6">
          <a href="#!" className="delete left" onClick={this.handleIdeaRemoveClick} title="Delete">
            <span className="fa fa-trash fa-lg"></span>
          </a>
          <button onClick={this.changeView} type="submit" className="waves-effect waves-light green btn right">
            <span className="fa fa-check-circle"></span>Просмотр
          </button>
        </div>
      </div>
    );
  }
  renderViewOnlyMenu() {
    return(
      <div className="row">
        <div className="col s12 idea_title">
          <h3>{this.props.idea.name ? this.props.idea.name : "Untitled"}</h3>
        </div>
      </div>
    );
  }
  renderViewMenu() {
    return(
      <div className="row">
        <div className="col s6 idea_title">
          <h3>{this.props.idea.name ? this.props.idea.name : "Untitled"}
            {this.props.authored ?
              <span>
                <a href="#!" onClick={this.changeView} className="edit" title="Edit">
                  <span className="fa fa-pencil fa-lg"></span>
                </a></span> :
              <BookmarkIdeaLink
                bookmarks={this.props.profile ? this.props.profile.bookmarkIdeas : []}
                ideaId={this.props.idea._id}
                view={true}/>
            }</h3>
        </div>
        <div className="col s6">
          {this.props.authored ?
            <div className="switch right">
              <label>Unpublished<input type="checkbox" onClick={this.changeView} /><span className="lever"></span>Published</label>
            </div> : ''}
        </div>
      </div>
    );
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
    return (
      <div className="main-grey">
        <div className="container main">
          {(this.props.edit && Meteor.userId()) ? this.renderEditMenu() : (!Meteor.userId() ? this.renderViewOnlyMenu() : this.renderViewMenu())}
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
