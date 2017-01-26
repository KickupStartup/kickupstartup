import React, { Component, PropTypes } from 'react';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();

import Comments from '../../components/Comments';
import ListIdeaCard from '../../components/list/ListIdeaCard';
import ListLoading from '../../components/list/ListLoading';

class IdeaPage extends Component {
  componentDidMount() {
    $("#backButtonMenu").show();
  }
  componentWillUnmount() {
    $("#backButtonMenu").hide();
  }
  render() {
    if (this.props.loading) {
      return (
        <ListLoading/>
      );
    } else {
      return (
         <div>
           <ListIdeaCard idea={this.props.idea}/>
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
  author: PropTypes.object,
  user: PropTypes.object
}

export default IdeaPage;
