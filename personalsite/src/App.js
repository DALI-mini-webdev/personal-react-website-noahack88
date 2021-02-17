import React, { Component } from 'react';
import './App.css';
import sasha from './sasha.JPG';
import baseball from './baseball.PNG';
import Navbar from "./components/Navbar/Navbar";
import BackgroundComponent from './components/BackgroundComponent';
import axios from 'axios';
import firebase from './firebase/index';
import ToDoBoard from './components/ToDoBoard';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      color:"aqua",
      data: null,
      answer:"hidden",
      };
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
showAnswer = () => {
  if(this.state.answer === "hidden")
  {
    this.setState({answer:"show"})
  }
  else {
    this.setState({answer:"hidden"})
  }
}

fetchData = () => {
  axios.get("https://jservice.io/api/random")
  .then((response) => {
    this.setState({
      data: response.data[0]
    })
  }).catch((error) => {
    console.log(error);
  })
}

renderQuestion = () => {
  if (this.state.data) {
    return(
      <div>
        <div>Category: {this.state.data.category.title}</div>
        <div>Question: {this.state.data.question}</div>
      </div>
    )
  } else {
    return(<div>no question</div>)
  }
}

renderAnswer = () => {
  if (this.state.data) {
    return(
      <div>
        <div>Answer: {this.state.data.answer}</div>
      </div>
    )
  } else {
    return(<div>no answer</div>)
  }
}


  render(){
  console.log(this.state.data);
  console.log(firebase);
  console.log(firebase.db);
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
        <div>    
    
       <BackgroundComponent 
          changeColor={this.changeColor}
        />
        </div>
        <div>
          <button onClick = {this.fetchData}>Click for a Jepordy question!</button>
          {this.renderQuestion()}
          <button onClick = {this.showAnswer}>Click to show/hide Answer!</button>
          <div className={this.state.answer}>
          {this.renderAnswer()}
          </div>
        </div>
        <ToDoBoard />

    </div>
    
  );
  }
}

       


export default App;
