import React, { useState } from 'react'

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success");
  }
  const handleUpClick2 = () => {
    console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success");
  }
  const handleOnClear = () => {
    console.log("Uppercase was clicked" + text);
    let newText = " ";
    setText(newText);
    props.showAlert(" text Cleared", "success");
  }

  const handleOnChange = (event) => {
    console.log("on change");
    setText(event.target.value);
  }

  const handleCopy = () => {
    // let text = document.getElementById("mybox");
    // text.select();
    navigator.clipboard.writeText(text);
    // document.getSelection().removeAllRanges();
    props.showAlert("Copy to clipboard", "success");
  }

  const handleExtraSpaces = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed", "success");
  }
  const [text, setText] = useState('');

  return (

    <>
      <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h2>{props.heading}</h2>
        <textarea className="form-control my-2 border border-primary" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark'?'#13466e':'white', color: props.mode === 'dark'?'white':'black' }} id='mybox' rows={6}></textarea>
        <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>convert to upperText</button>
        <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick2}>Convert to LowerText</button>
        <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleOnClear}>clear text</button>
        <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Space</button>
      </div>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1>Your text summary</h1>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} character</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text: "Nothing to Preview here"}</p>
      </div>
    </>
  )
}
