import React from 'react';
import ReactDOM from 'react-dom';
import {
  Editor,
  createEditorState,
} from 'medium-draft';

export default class LiveEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {editorState: createEditorState()};
    this.onChange = (editorState) => {
      this.setState({editorState});
      console.log(editorState.getCurrentContent());
      this.props.onChange(convertToRaw(this.state.editorState.getCurrentContent());
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
