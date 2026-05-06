import { useState } from "react";
import React from "react";
import "../index.css";
function Textform(props){
  const [text,setText]=useState("");
  const words = text.trim().split(/\s+/).filter((word) => word.length !== 0);
    const handlechange=(event)=>{
      //console.log("On change")
      setText(event.target.value);
    }
    const handleUpp=()=>{
      //console.log("Text Changes to Upper");
      if(text.trim()===""){
        alert("Enter Text Please");
        return;
      }
      let newText=text.toUpperCase();
      setText(newText);
    }
    const handlelo=()=>{
      if(text.trim()===""){
        alert("Please Enter a Text");
        return;
      }
      let newText=text.toLowerCase();
      setText(newText);
    }
    const handledel=()=>{
      setText("");
    }
    const handlecopy=()=>{
      const text=document.getElementById("text");
      text.select();
      navigator.clipboard.writeText(text.value);
    }
    const handlespaces= ()=> {
      if(text.trim()==="") alert("No Text For Copy");
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "));
    }
    return (
      <div className='container' >
        <textarea rows="20" value={text} onChange={handlechange} id="text"placeholder='Enter Text Here'></textarea>
        <button className='btn' onClick={handleUpp}>Convert Into Uppercase</button>
      <button className='btn' onClick={handlelo}>Convert Into Lowercase</button>
      <button className='btn' onClick={handlespaces}>Remove Extra   Spaces</button>
      <button className='btn' onClick={handlecopy}>Copy</button>
      <button className='btn' onClick={handledel}>Clear</button>
      
      
        <h2>Your Text Summary</h2>
        <p>{words.length} Words and {text.length} Characters</p>

<p>
  {words.length > 0
    ? (0.008 * words.length).toFixed(2)
    : 0} minutes to read {words.length} word
</p>
      </div>
    );
  }
export default Textform;