import React from 'react';
import {
  Editor,
  createEditorState,
} from 'medium-draft';

export default class ReadOnlyEditor extends React.Component {
  constructor(props) {
    super(props);

    this.convert = this.convert.bind(this);
    this.state = {editorState: this.convert(props.value)};
  }
  convert(value) {
    try {
      return createEditorState(JSON.parse(value));
    } catch (e) {
      return createEditorState();
    }
  }
  render() {
    return (
      <Editor
       sideButtons={[]}
       editorEnabled={false}
       editorState={this.state.editorState}
       onChange={()=>{}}
       blockButtons={[]}
       inlineButtons={[]}
       placeholder={this.props.placeholder} />
    );
  }
}

ReadOnlyEditor.propTypes = {
  value: React.PropTypes.string
}
