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
