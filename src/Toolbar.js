import React, { Component } from 'react';
import './Toolbar.css';
import 'font-awesome/css/font-awesome.min.css';

function Toolbar(props) {
  return (
    <div className="toolbar" style={{width: props.width}}>
      <i className="fa fa-free-code-camp" />
      <h2>{props.name}</h2>
    </div>
  );
}

export default Toolbar;