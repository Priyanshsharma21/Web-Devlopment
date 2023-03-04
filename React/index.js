import React from "react";
import ReactDom from "react-dom";

let name = "Priyansh Sharma";
let date = new Date();
let year = date.getFullYear();

ReactDom.render(
<div>
    <h1>Hello {name} welcome to {year} </h1>
    <div>
        <img>
    </div>
</div>
,
document.getElementById("root")
);


{/* ---------------Lecture3- style -------------------  */}


const randomImg = "https://picsum.photos/200";

ReactDOM.render(

  <div>
    <h1 className="heading">My food</h1>
    <div>

      <img src= {randomImg + "?grayscale"} />

    
    </div>

  </div>

,document.getElementById("root")
)


{/* ---------------Lecture3-inline style -------------------  */}

let customeStyle = {
  color :"Red",
  textAlign : "center",
  border : "2px solid yellow",
  backgroundColor : "black"
}

ReactDOM.render(
<h1 style={customeStyle}>Namaste Dunia!</h1>
, document.getElementById("root")
);