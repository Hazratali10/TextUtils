import React, { useState } from "react";

export default function Textform(props) {
 
 
  // Function to remove extra spaces
  const handleRemoveSpaces = () => {
    const newText = text.replace(/\s+/g, " ").trim(); // Remove extra spaces
    setText(newText);
    props.showAlert("Extra spaces removed!", "success"); // Show alert
  };

 // Function to copy text
 const handleCopyText = () => {
  navigator.clipboard.writeText(text); // Copy text to clipboard
  props.showAlert("Text copied to clipboard!", "success"); // Show alert
};

  const handleUpClick = () => {
    // console.log("UpperCase was Clicked");
    setText("You have Clicked on HandleUpClick");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase!", "success");
  };
  const handleLoClick = () => {
    // console.log("LowerCase was Clicked");
    setText("You have Clicked on HandleLoClick");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase!", "success");
  };
  const handleClearClick = () => {
    // console.log("Cleartext was Clicked");
    setText("You have Clicked on HandleLoClick");
    let newText =("");
    setText(newText);
    props.showAlert("Text is Cleared!", "success");
  };

  const handleOnChange = (event) => {
    // console.log("OnChange");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="10"
            placeholder="Enter your text here..."
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleRemoveSpaces}>
        Remove Extra Spaces
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopyText}>
          Copy text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear text
        </button>
      </div>
      <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} Words and {text.length} Characters</p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
         {/* Preview Section */}
      <div className="my-3">
        <h2>Your Preview</h2>
        <p
          style={{
            backgroundColor: props.mode === "dark" ? "#13466e" : "#f8f9fa",
            color: props.mode === "dark" ? "white" : "black",
            padding: "10px",
            borderRadius: "5px",
            minHeight: "100px",
          }}
        >
          {text.length > 0 ? text : "Nothing to preview!"}
        </p>
        </div>
        {/* <p>{text}</p> */}
      </div>
    </>
  );
}
