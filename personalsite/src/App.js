import logo from './logo.svg';
import './App.css';
import sasha from './sasha.JPG';
import baseball from './baseball.PNG';

document.body.style.backgroundColor = "aqua"
function App() {
  const buttonFunction = () => {
    if (document.body.style.backgroundColor === "aqua")
    {
      document.body.style.backgroundColor = "aquamarine"
    }
    else if (document.body.style.backgroundColor === "aquamarine")
    {
      document.body.style.backgroundColor = "dodgerblue"
    }
    else{
      document.body.style.backgroundColor = "aqua"
    }
  }


  return (
    <div className="App">
        <head>
          <title>Page Title</title>
          <link rel="stylesheet" href="style.css"></link>
      </head>
      <body>
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
          <button onClick={buttonFunction}>Change Background Color</button>    
        </body>        
    </div>
  );
}

export default App;
