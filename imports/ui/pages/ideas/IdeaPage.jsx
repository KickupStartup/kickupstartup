import React, { Component, PropTypes } from 'react';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();
import { moment } from 'meteor/momentjs:moment';

import ListLoading from '../../components/list/ListLoading';
import ListDivider from '../../components/list/ListDivider';
import ListEnd from '../../components/list/ListEnd';

import BookmarkIdeaLink from '../../components/ideas/BookmarkIdeaLink';
import IdeaView from '../../components/ideas/IdeaView';
import IdeaEdit from '../../components/ideas/IdeaEdit';
import IdeaPoll from '../../components/ideas/IdeaPoll';
import Comments from '../../components/comments/Comments';

import { FormStep } from '../../../api/ideas/Idea';

export default class IdeaPage extends Component {
  constructor(props) {
    super(props);
    this.state = { preview: false };
    this.changeView = this.changeView.bind(this);
  }
  changeView(event) {
    event.preventDefault();
    console.log(this.state.preview);
    this.setState({ preview: !this.state.preview });
  }
  render() {
    const idea = this.props.idea;
    if (this.props.loading) {
      return (
        <ListLoading/>
      );
    } else {
      if (!idea) {
        // there is no such idea found in the database - show ideas instead
        this.props.router.push('/ideas');
      }
      if (idea.userId === this.props.user._id && !this.state.preview) {
        return (
          <div>
            <IdeaEdit idea={idea} author={this.props.author}/>
          </div>
        );
      } else {
        return (
          <div className="container main">
            <div className="row">
              <div className="col s12">
                <button type="submit" onClick={this.changeView} className="waves-effect waves-light green btn right">
                  <span className="fa fa-pencil"></span>Edit
                </button>
              </div>
            </div>
            <IdeaView
              idea={idea}
              profile={this.props.profile}
              author={this.props.author}
            />
            <ListDivider border={true} />
            <IdeaPoll idea={idea} />
            <ListDivider border={true} />
            <Comments idea={idea} comments={this.props.comments} />
            <ListEnd/>
          </div>
        );
      }
    }
  }
}

IdeaPage.propTypes = {
  loading: PropTypes.bool.isRequired,
  idea: PropTypes.object,
  comments: PropTypes.array.isRequired,
  author: PropTypes.object,
  profile: PropTypes.object.isRequired,
  user: PropTypes.object
}
