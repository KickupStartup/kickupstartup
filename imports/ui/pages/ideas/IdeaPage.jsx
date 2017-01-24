import React, { Component, PropTypes } from 'react';
import i18n from 'meteor/universe:i18n';
const T = i18n.createComponent();
import ListIdeaCard from '../../components/list/ListIdeaCard';

class IdeaPage extends Component {
  render() {
    return (
      <ListIdeaCard idea={this.props.idea}/>
    );
  }
}

IdeaPage.propTypes = {
  idea: PropTypes.object,
}

export default IdeaPage;
