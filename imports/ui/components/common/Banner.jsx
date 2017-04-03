import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import Avatar from 'react-avatar';
const T = i18n.createComponent();

export default class Banner extends Component {
  constructor(props) {
    super(props);
  }
  inviteAsCoauthor(author, event) {
    event.preventDefault();
    console.log(author);
  }
  removeCoauthor(author, event) {
    event.preventDefault();
    console.log(author);
  }
  clickDropdown(linkId, event){
    event.preventDefault();
    const linkSelector = '#' + linkId;
    $(linkSelector).dropdown({
      alignment: 'right'
    }); /* initialize */
    $(linkSelector).dropdown('open');
  }
  renderAuthors() {
    return this.props.authors.map((author) => (
      <span key={author._id}>
        <a id={author._id} onClick={(event) => this.clickDropdown(author._id, event)} data-activates={'m'+author._id} href="#!">
          <Avatar className="sb-avatar circle pointer" name={author.fullName} round={true} size={48} />
        </a>
        <div id={'m'+author._id} className="dropdown-content dropdown-author dropdown-green modal-body">
          <a href="#!" className="modal-action modal-close default right clearfix"><i className="fa fa-remove fa-lg"></i></a>
          <ul className="collection right">
            <li className="collection-item avatar clearfix">
              <Avatar className="circle" name={author.fullName} round={true} size={48}></Avatar>
              <h3 className="title">{author.fullName}</h3>
              <p>{author.fullLocation}</p>
              <p>{author.headline}</p>
              <div className="right clearfix">
                <button onClick={(event) => this.removeCoauthor(author, event)} className="waves-effect waves-light orange btn modal-btn">Remove</button>
                <button onClick={(event) => this.inviteAsCoauthor(author, event)} className="waves-effect waves-light orange btn modal-btn">Invite</button>
              </div>
            </li>
          </ul>
        </div>
      </span>
    ));
  }
  renderUnpublishStatus() {
    if (Meteor.userId() && this.props.idea.isAuthor(Meteor.userId()) && !this.props.idea.isPublic()) {
      // show "idea is hidden" when it is not public and authenticated user is an author
      return (
        <span className="label-badge right"><T>ideas.publish.status.unpublish</T></span>
      );
    } else {
      return;
    }
  }
  render() {
    let bannerUrl = this.props.idea.bannerUrl || '/img/banner-idea.jpg';
    bannerUrl = bannerUrl[0] === '/' ? bannerUrl : '/' + bannerUrl;
    const bannerStyle = {
      background: 'url(' + bannerUrl + ') center center no-repeat',
    };
    if (this.props.authors) {
      return (
        <div className="content text-center clearfix">
            {this.renderUnpublishStatus()}
          	<div className="banner" style={bannerStyle}></div>
          	<div className="avatar-photo small">
            {this.renderAuthors()}
          </div>
        </div>
      );
    } else {
      return (<span></span>);
    }
  }
}

Banner.propTypes = {
  authors: PropTypes.array,
  idea: PropTypes.object
};
