import React, { Component, PropTypes } from 'react';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();
import { moment } from 'meteor/momentjs:moment';

import Comments from '../../components/Comments';
import ListIdeaCard from '../../components/list/ListIdeaCard';
import ListLoading from '../../components/list/ListLoading';

import Person from '../../../api/people/Person';

class IdeaPage extends Component {
  componentDidMount() {
    $("#backButtonMenu").show();
  }
  componentWillUnmount() {
    $("#backButtonMenu").hide();
  }
  getIdeaAuthor(userId) {
    return Person.findOne({userId: userId});
  }
  render() {
    if (this.props.loading) {
      return (
        <ListLoading/>
      );
    } else {
      return (
         <div>
           <ListIdeaCard
             idea={this.props.idea}
             author={this.getIdeaAuthor(this.props.idea.userId)}
             commentsCount={this.props.comments.count}
             lastCommentTime={this.props.lastComment ? this.props.lastComment[0] : ''}/>
           <Comments idea={this.props.idea} comments={this.props.comments}/>
         </div>
      );
    }
  }
}

IdeaPage.propTypes = {
  loading: PropTypes.bool,
  comments: PropTypes.array,
  idea: PropTypes.object,
  user: PropTypes.object
}

export default IdeaPage;
