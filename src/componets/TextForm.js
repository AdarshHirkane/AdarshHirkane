import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("upperCase was clicked " + text);
        let newText = text.toUpperCase();
        setText(newText)
        console.log(newText)
        props.showAlert('Convert to upperCase','success');

    }

    const handleUpClear=()=>{
        let newText=' ';
        setText(newText);
    }

    // style={{backgroundColor:props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'black'}}

    const handleOnChange = (e) => {
        console.log("On change");
        setText(e.target.value)
    }
    const [text, setText] = useState('Enter text here');
    return (
        <>
        <div className={`text-${props.colorR}`}>
            <div className='container'>
                <h1><strong>{props.heading}</strong></h1>
                <div className="mb-3">
                    <textarea className={`form-control ${props.formColor} `} id="myBox" value={text}  onChange={handleOnChange} rows="8"></textarea>
                </div>
                <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleUpClick}>Convert to uppercase</button>
                <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleUpClear}>Clear Text</button>
            </div>
            <div className='container' >
                <h1>Your word summary</h1>
                <p>your word is {text.split(" ").filter((element)=>{return element.length!==0}).length} and text is {text.length}</p>
            </div>
            <h2>Preview</h2>
            <p>{text.length>0?text:'Enter somthing'}</p>
        </div>
        </>
    )
}
