import React, { Component } from 'react';
import Editor from './Editor';
import Previewer from './Previewer';
import starterText from './starterText';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorText: starterText
    }

    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleTextChange(newText) {
    this.setState({editorText: newText});
  }

  render() {
    return (
      <div className="app">
        <Editor value={this.state.editorText} onTextChange={this.handleTextChange}/>
        <Previewer value={this.state.editorText} />
      </div>
    );
  }
}

export default App;
