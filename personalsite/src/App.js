import React, { Component } from 'react';
import './App.css';
import sasha from './sasha.JPG';
import baseball from './baseball.PNG';
import Navbar from "./components/Navbar/Navbar";
import backgroundComponent from './components/backgroundComponent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={color:"aqua"};
    }

changeColor = () => {
  if(this.state.color === "aqua")
  {
    this.setState({color:"aquamarine"})
  }
  else if (this.state.color === "aquamarine")
  {
    this.setState({color:"dodgerblue"})
  }
  else {
    this.setState({color:"aqua"})
  }
  } 

  render(){
  return (
    <div className={this.state.color}>
      <Navbar />
        <title>Page Title</title>
        <link rel="stylesheet" href="style.css"></link>
        <h1 className="underline">About me</h1>
        <div className="left">
            <h2 className="underline">Bio:</h2>
                <li>My name is Noah</li>
                <li>I am a first year at Bates</li>
                <li>I have an older sister who is a junior at Dartmouth</li>
                <li>I have a dog named Sasha who is a 12 year old Goldendoodle</li>
                <img src={sasha} width="200" height="300"/>
        </div>
        <div className="center">
            <h2 className="underline">Things I Like:</h2>
                <li>Playing and watching baseball</li>
                <li>Playing golf</li>
                <li>Snowboarding</li>
                <li>My favorite music genre is 90s pop/rock (ex. 3 Doors Down)</li>
                <li>My favorite TV Show of all time is The Last Ship</li>
                <img src={baseball} width="auto" height="300"/>
        </div>  
        <button onClick={this.changeColor}>Change Background Color</button>  
        
        <backgroundComponent 
          changeColor={this.changeColor}
        />
          
    </div>
    
  );
}
}

       


export default App;
