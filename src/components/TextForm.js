import React, { useState } from "react";

export default function TextForm(props, {mode}) {

  
  const handleOnChange = (event) => {
    console.log("on change");
    setText(event.target.value);
  };

  const handleUpClick = () => {
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    console.log("Lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleReverse = () => {
    console.log("Reverse was clicked" + text);
    let newText = text.split("").reverse().join("");
    setText(newText);
  };

  const handleContactDetails = () => {
    console.log("Contact details handle was clicked: " + text);

    const emailRegex = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/g;
    const phoneRegex = /(?:\+\d{1,3}[- ]?)?\d{10}/g;
    const linkRegex =
      /(?:^|\s)((?:https?:\/\/)?[\w-]+(\.[\w-]+)+\.?(:\d+)?(\/\S*)?)/g;

    const extractedEmails = text.match(emailRegex) || [];
    const extractedPhoneNumbers = text.match(phoneRegex) || [];
    const extractedLinks = text.match(linkRegex) || [];

    const extractedContacts = [
      ...extractedEmails,
      ...extractedPhoneNumbers,
      ...extractedLinks,
    ];

    setContacts(extractedContacts);
  };

  const handleClear = () => {
    console.log("clear handle was clicked: " + text);
    let newText = "";
    setText(newText);
  };

  const handleRemoveSpacesClick = () => {
    let newText = text.replace(/\s+/g, " ").trim();
    setText(newText);
  };

  const [text, setText] = useState("Start writing from here...");
  const [contacts, setContacts] = useState([]);
  
  return (
    <>
    

   
      <div className="textform">
        <div className="container my-4 middle">
        
        <h1 className={props.mode === 'dark' ? 'heading-dark' : 'heading-light'}>
    {props.heading}
  </h1>
          
          <div>
      <p className={`des ${props.mode === 'light' ? 'light' : 'dark'}`}>
        Unlock the power of your text. Clean, extract, and transform
        effortlessly with TextUtils' intuitive tools.
      </p>
    </div>


          <div className="mb-3">
            <h2 className="rad" style={{ color:props.mode==="dark"?"#dadada":"black"}}>Enter your <span>Text </span>here </h2>
            <textarea
  className="form-control"
  value={text}
  id="myBox"
  onChange={handleOnChange}
  rows="6"
  style={{
    boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
    backgroundColor: props.mode === "dark" ? "#392c4e" : "whitesmoke",
    color: props.mode === "dark" ? "#dadada" : "black",
  }}
></textarea>

          </div>
          <div className="buttonss">
  <button
    className="btn-hover color-10 btn btn-primary mx-2 my-1"
    onClick={handleUpClick}
    style={{
      boxShadow: props.mode === 'light' ? '0 4px 15px 0 rgba(236, 116, 149, 0.75)' : '0 4px 15px 0 rgb(46 46 46 / 75%)'
    }}
  >
    Uppercase
  </button>
  <button
    className="btn-hover color-10 btn btn-primary mx-2 my-1"
    onClick={handleLoClick}
    style={{
      boxShadow: props.mode === 'light' ? '0 4px 15px 0 rgba(236, 116, 149, 0.75)' : '0 4px 15px 0 rgb(46 46 46 / 75%)'
    }}
  >
    Lowercase
  </button>
  <button
    className="btn-hover color-10 btn btn-primary mx-2 my-1"
    onClick={handleReverse}
    style={{
      boxShadow: props.mode === 'light' ? '0 4px 15px 0 rgba(236, 116, 149, 0.75)' : '0 4px 15px 0 rgb(46 46 46 / 75%)'
    }}
  >
    Reverse
  </button>
  <button
    className="btn-hover color-10 btn btn-primary mx-2 my-1"
    onClick={handleContactDetails}
    style={{
      boxShadow: props.mode === 'light' ? '0 4px 15px 0 rgba(236, 116, 149, 0.75)' : '0 4px 15px 0 rgb(46 46 46 / 75%)'
    }}
  >
    Extract Email
  </button>
  <button
    className="btn-hover color-10 btn btn-primary mx-2 my-1"
    onClick={handleClear}
    style={{
      boxShadow: props.mode === 'light' ? '0 4px 15px 0 rgba(236, 116, 149, 0.75)' : '0 4px 15px 0 rgb(46 46 46 / 75%)'
    }}
  >
    Clear Text
  </button>
  <button
    className="btn-hover color-10 btn btn-primary mx-2 my-1"
    onClick={handleRemoveSpacesClick}
    style={{
      boxShadow: props.mode === 'light' ? '0 4px 15px 0 rgba(236, 116, 149, 0.75)' : '0 4px 15px 0 rgb(46 46 46 / 75%)'
    }}
  >
    Remove Spaces
  </button>


          </div>
        </div>

        <div className="container my-2">
          <div className="row">
          <div className="col card card-1" style={{
  backgroundColor: props.mode === 'light' ? '#f0ecfc' : '#f0ecfc',
  backgroundImage: props.mode === 'light' ? 'linear-gradient(315deg, #f0ecfc 0%, #c797eb 74%)' : 'linear-gradient(315deg, #482d8d 0%, #9600bd 74%)',
  color: props.mode === 'light' ? 'black' : '#dadada'
}}>
  <div className="card_icon">
    <i className="fas fa-bolt"></i>
  </div>
  <h2 className="card_title" style={{ color: props.mode === 'light' ? 'black' : '#dadada' }}>Extracted Contacts</h2>
  {contacts.length === 0 ? (
    <p className="cha" style={{ color: props.mode === 'light' ? 'black' : '#dadada' }}>No contacts found yet, keep writing to extract contacts.</p>
  ) : (
    <ul>
      {contacts.map((contact, index) => (
        <li key={index} style={{ color: props.mode === 'light' ? 'black' : '#dadada' }}>{contact}</li>
      ))}
    </ul>
  )}
</div>


<div className="col card card-2" style={{
  backgroundColor: props.mode === 'light' ? '#f0ecfc' : '#f0ecfc',
  backgroundImage: props.mode === 'light' ? 'linear-gradient(315deg, #ffd7df 0%, #ffbcbc 74%)' : 'linear-gradient(315deg, #ff6281 0%, #95005c 74%)',
  color: props.mode === 'light' ? 'black' : '#dadada'
}}>
  <div className="card_icon">
    <i className="fas fa-bolt"></i>
  </div>
  <h2 className="card_title" style={{ color: props.mode === 'light' ? 'black' : '#dadada' }}>Your Text Summary</h2>
  <ul>
    <li style={{ color: props.mode === 'light' ? 'black' : '#dadada' }}>
      Your text has {text.split(" ").filter((element) => element.length !== 0).length} words and {text.length} characters
    </li>
    <li>
      <p style={{ color: props.mode === 'light' ? 'black' : '#dadada' }}>{0.008 * text.split(" ").length} Minutes read</p>
    </li>
  </ul>
</div>

          </div>
        </div>

        <div className="container my-2">
  <h2 style={{ color: props.mode === "dark" ? "white" : "inherit" }}>Preview</h2>
  <p style={{ color: props.mode === "dark" ? "white" : "inherit" }}>
    {text.length > 0 ? text : "Enter text above to preview it here"}
  </p>
</div>

      </div>
    </>
  );
}
