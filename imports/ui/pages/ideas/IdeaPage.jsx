import React, { Component, PropTypes } from 'react';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();
import ListIdeaCard from '../../components/list/ListIdeaCard';
import ListLoading from '../../components/list/ListLoading';

class IdeaPage extends Component {
  render() {
    if (this.props.loading) {
      return (
        <ListLoading/>
      );
    } else {
      return (
        <ListIdeaCard idea={this.props.idea}/>
      );
    }
  }
}

IdeaPage.propTypes = {
  loading: PropTypes.bool,
  idea: PropTypes.object,
  user: PropTypes.object
}

export default IdeaPage;
