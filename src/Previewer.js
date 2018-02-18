import React, { Component } from 'react';
import Toolbar from './Toolbar';
import 'font-awesome/css/font-awesome.min.css';
import './Previewer.css'

function Preview(props) {
  return (
	<div className="preview">
		{props.value}
	</div>
  );
}

class Previewer extends Component {
  constructor(props) {
	super(props);
  }

  render() {
  	return (
      <div className="previewer">
      	<Toolbar name="Previewer" width="820px"/>
      	<Preview value={this.props.value} />
      </div>
  	);
  }
}

export default Previewer;