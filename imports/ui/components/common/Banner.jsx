import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import Avatar from 'react-avatar';

class Banner extends Component {
  constructor(props) {
    super(props);
  }
  clickDropdown(event){
    event.preventDefault();
    $('.profile').dropdown({
      alignment: 'right'
    }); /* initialize */
    $('.profile').dropdown('open');
  }
  renderAuthors() {
    return this.props.authors.map((author) => (
      <span>
        <a key={author._id} onClick={this.clickDropdown} data-activates="authorDropdown" className="profile" href="#!"><Avatar className="sb-avatar circle pointer" name={author.fullName} round={true} size={48} /></a>
        <div id="authorDropdown" className="dropdown-content dropdown-author dropdown-green">
          User text info
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
