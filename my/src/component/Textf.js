import React, { useState } from 'react'

const Textf = (props) => {
  const handleOnUpper = ()=>{
    console.log("Uppercase was clicked");
    let newtext = text.toUpperCase(); 
    setText(newtext)
    props.showAlert("Converted to Uppercase!", "success");
  }
  const handleOnLower = ()=>{
    console.log("Lowercase was clicked");
    let newtext = text.toLowerCase(); 
    setText(newtext)
    props.showAlert("Converted to lowercase!", "success");
  }
  const handleOnClear = ()=>{
    console.log("Clear was clicked");
    let newtext = ''; 
    setText(newtext)
    props.showAlert("Text was Cleared!", "success");
  }
  const handleOnExtra = ()=>{
    console.log("Extra space was clicked");
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
    props.showAlert("Extra Spaces was remove!", "success");

  }
  const handleOnCopy = ()=>{
    console.log("Clear was clicked");
    navigator.clipboard.writeText(text);
    props.showAlert("Text was copied!", "success");
  }  


  const handleOnChange = (event)=>{
    console.log("On change");
    setText(event.target.value);
  }

  const [text, setText] = useState('');
  return (
    <>
    <div className='container my-3'>
      <h2 style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>{props.heading}</h2>
      <textarea className='text-form my-5 border border-primary' onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark'?'#13466e':'white', color: props.mode === 'dark'?'white':'black' }} value={text}  rows={8} cols={150} ></textarea>
      <button disabled = {text.length===0} className='btn btn-primary mx-2' onClick={handleOnUpper} >Convert to Uppercae</button>
      <button disabled = {text.length===0} className='btn btn-primary mx-2' onClick={handleOnLower} >Convert to Lowercase</button>
      <button disabled = {text.length===0} className='btn btn-primary mx-2' onClick={handleOnClear} >Clear Text</button>
      <button disabled = {text.length===0} className='btn btn-primary mx-2' onClick={handleOnExtra} >Remove Extra Spaces</button>
      <button disabled = {text.length===0} className='btn btn-primary mx-2' onClick={handleOnCopy} >Copy Text</button>
      
    </div>

    <div className='container my-3' style={{ color: props.mode === 'dark'?'white':'black' }}>
      <h2>Your Text Summary</h2>

      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
    </>
  )
}

export default Textf



