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

    this.onChange = (editorState) => {
      this.setState({editorState});
      const content = convertToRaw(this.state.editorState.getCurrentContent());
      const contentString = JSON.stringify(content);
      this.props.onChange(contentString);
    }
  }
  componentDidMount() {
    if (this.props.id) {
      this.refs[this.props.id].focus();
    }
  }
  render() {
    return (
      <Editor
        id={this.props.id}
        ref={this.props.id}
        sideButtons={[]}
        editorState={this.state.editorState}
        onChange={this.onChange}
        placeholder={this.props.placeholder} />
    );
  }
}
