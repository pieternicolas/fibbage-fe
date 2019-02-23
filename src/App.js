import React, { Component } from 'react'
import io from 'socket.io-client'

import logo from './logo.svg'
import './App.css'

const socket = io.connect('http://localhost:4200')

class App extends Component {
  componentDidMount() {
    socket.on('news', (data) => {
      console.log(data);
      socket.emit('my other event', { my: 'data' });
    })
  }

  handleClick = () => {
    socket.emit('my other event', { test: 'adsfadfs' })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <button onClick={() => this.handleClick()}>adsfadsfas</button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    )
  }
}

export default App
