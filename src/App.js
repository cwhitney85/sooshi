import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'


export default class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>The Sooshi App</h1>
        <Button>Click Me</Button>
      </div>
    )
  }
}

