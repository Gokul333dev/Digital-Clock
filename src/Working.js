let hour = new Date().getHours();
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