import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import Avatar from 'react-avatar';

class Banner extends Component {
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
        <a id={author._id} onClick={(event) => this.clickDropdown(author._id, event)} data-activates={'m'+author._id} className="profile" href="#!">
          <Avatar className="sb-avatar circle pointer" name={author.fullName} round={true} size={48} />
        </a>
        <div id={'m'+author._id} className="dropdown-content dropdown-author dropdown-green">
          <Avatar className="sb-avatar circle pointer" name={author.fullName} round={true} size={48} />
          <p>{author.fullName}</p>
          <p>{author.fullLocation}</p>
          <p>{author.headline}</p>
          <button onClick={(event) => this.inviteAsCoauthor(author, event)} className="waves-effect waves-light orange btn modal-btn">Invite</button>
          <button onClick={(event) => this.removeCoauthor(author, event)} className="waves-effect waves-light orange btn modal-btn">Remove</button>
        </div>
      </span>
    ));
  }
  render() {
    if (this.props.authors) {
      return (
        <div className="content text-center clearfix">
          <div className="banner" style={{background:'url(/img/banner-idea.jpg) center center no-repeat'}}></div>
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
  authorsIds: PropTypes.array
};

export default BannerContainer = createContainer(props => {
  const authorsHandle = Meteor.subscribe("people.byids", props.authorsIds);
  const loading = !authorsHandle.ready();
  return {
    loading,
    authors: Person.find({ userId: { $in: props.authorsIds } }).fetch(),
  };
}, Banner);
