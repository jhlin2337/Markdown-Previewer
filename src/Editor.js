import React, { Component } from 'react';
import './Editor.css';
import Toolbar from './Toolbar'

function TextEditor(props) {
  return (
    <div className="text-editor">
      <textarea value={props.value} onChange={props.handleChange} />
    </div>
  );
}

class Editor extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
  	this.props.onTextChange(event.target.value)
  }

  render() {
    return (
      <div className="editor">
        <Toolbar name="Editor" width="600px"/>
        <TextEditor value={this.props.value} handleChange={this.handleChange} />
      </div>
    )
  }
}

export default Editor;