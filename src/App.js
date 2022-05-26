import React, { Component } from 'react';
import ReactGa from 'react-ga'
import './App.css'
class App extends Component {
  componentDidMount() {
    ReactGa.initialize('UA-229963861-1')
    //page view
    ReactGa.pageview('/')
    // ReactGa.onClick('')
  }
  

  show(){
    console.log('m clicked')
    alert('m clicked')
  }
  render() {
    return (
      <div>
        <h2>Hello World</h2>
    <h3><a href="www.google.com">Google.com</a></h3>
    <button className = "show" onClick={()=>this.show()}>Click Me</button>
      </div>
    );
  }
}

export default App;
