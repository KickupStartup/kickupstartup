import React from 'react';
import {
  convertToRaw,
} from 'draft-js';
import {
  Editor,
  createEditorState,
} from 'medium-draft';

export default class LiveEditor extends React.Component {
  constructor(props) {
    super(props);
    if (this.props.value) {
      const blockData = JSON.parse(this.props.value);
      this.state = {editorState: createEditorState(blockData)};
    } else {
      this.state = {editorState: createEditorState()};
    }

    //this.props.onChange = _.debounce(this.props.onChange, 1000);
    this.onChange = (editorState) => {
      this.setState({editorState});
      const content = convertToRaw(this.state.editorState.getCurrentContent());
      const contentString = JSON.stringify(content);
      this.props.onChange(contentString);
    }
  }
  render() {
    return (
      <Editor
       sideButtons={[]}
       editorState={this.state.editorState}
       onChange={this.onChange}
       placeholder={this.props.placeholder} />
    );
  }
}
