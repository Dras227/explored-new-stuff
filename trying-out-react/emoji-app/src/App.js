import logo from './logo.svg';
import './App.css';
import { useState } from "react";


var h11 = "Warm Welcome "

var username = "manoj"
var color1 = "red"
var color = "#7ABC89"
var counter = 0;
function App() {

 const [likeCounter,setClickCounter] = useState(1);

 function likeClickHandler() {
    var newLikeCounter = likeCounter+1;
    setClickCounter(newLikeCounter)
 }

  console.log("clicked " +likeCounter + " times");

  return (
    <div className="App">
       <h1>inside Ooutt</h1>
       <button onClick={likeClickHandler}>Like me!!</button> 
       <h1>{likeCounter}</h1>
    </div>
  );
}

export default App;

// VISER
// View -> Interact -> State in Event Handler -> Render 