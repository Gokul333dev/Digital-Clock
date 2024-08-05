import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let hour = new Date().getHours();
  let PA;
  if(hour>12)
  {
    PA = "PM";
  }
  else{
    PA = "AM";
  }
  if(hour>12)
  {
    hour = hour-12;
  }
const[CurrentHour,setCurrentHour] = useState(hour)
let UpdateHour = () =>{
  let hour = new Date().getHours();
  if(hour>12)
  {
    hour = hour -12;
  }
  setCurrentHour(hour);
}

let minute = new Date().getMinutes();
const[CurrentMinute,setCurrentMinute] = useState(minute)
let UpdateMinute = () =>{
  let minute = new Date().getMinutes();
  setCurrentMinute(minute);
}

let seconds = new Date().getSeconds();
const [currentSeconds , setCurrentSeconds] = useState(seconds);
let UpdateSeconds = () => {
  let seconds = new Date().getSeconds();
  setCurrentSeconds(seconds);
}

setInterval(UpdateHour,1000)
setInterval(UpdateMinute,1000);
setInterval(UpdateSeconds,1000);
  return (
    <div class="container">
      <div class="clock">
        <div class="clock-top">
          <p class = "time">
            <span class="hour">{CurrentHour}</span>
            <span class="colon">:</span>
            <span class="minute">{CurrentMinute}</span>
            <span class="colon">:</span>
            <span class="seconds">{currentSeconds}</span>
            <span class="zone">PM</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
