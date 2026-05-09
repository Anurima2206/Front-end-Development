// eslint-disable-next-line no-unused-vars
import React,{useState} from "react";
import Slide from "./components/slide";

function App() {
  //input value
  const handleInput=(e)=>{
    setSlide(e.target.value);
  };
  const[slide,setSlide]=useState(0);
  //chnge colours text bckgrnd
  let bgcolor;
  let textcolor;
  //conditions
  if(slide<=25){
    bgcolor='green';
    textcolor='red';
  }
  if(slide>25 && slide<=50){
    bgcolor='yellow';
    textcolor='green';
  }
  if(slide>50 && slide<=75){
    bgcolor='pink';
    textcolor='violet';
  }
  if(slide>75){
    bgcolor='brown';
    textcolor='black';
  }
  
  return (
    <>
    <div className="container">
    <h1>Slide to Grow App</h1>
    <Slide slide={slide} handleInput={handleInput} bgcolor={bgcolor} textcolor={textcolor}/>
    </div>
    </>
  )
}

export default App
