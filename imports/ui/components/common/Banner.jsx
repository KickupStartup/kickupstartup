import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import Avatar from 'react-avatar';

class Banner extends Component {
  constructor(props) {
    super(props);
  }
  renderAuthors() {
    return this.props.authors.map((author) => (
      <a key={author._id} href="#!"><Avatar className="sb-avatar circle pointer" name={author.fullName} round={true} size={48} /></a>
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
  const authorsHandle = Meteor.subscribe("people.byids");
  const loading = !authorsHandle.ready();
  return {
    loading,
    authors: Person.find({ userId: { $in: props.authorsIds } }).fetch(),
  };
}, Banner);
