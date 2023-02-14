///////////////////////////////////////////////////////
// 401. React Components
import React from "react";
import ReactDOM from "react-dom";
import App from "./component/App"; //Don't need to mention ".jsx "

ReactDOM.render(<App />, document.getElementById("root"));

///////////////////////////////////////////////////////
// 400. React Styling Practice

// import React from "react";
// import ReactDom from "react-dom";

// const date = new Date();
// const currentTime = date.getHours();
// let greeting;

// const customStyle = {
//   color: ""
// };

// if (currentTime < 12) {
//   greeting = "Morning";
//   customStyle.color = "red";
// } else if (currentTime < 18) {
//   greeting = "Afternoon";
//   customStyle.color = "green";
// } else {
//   greeting = "Evening";
//   customStyle.color = "blue";
// }

// ReactDom.render(
//   <h1 className="heading" style={customStyle}>
//     Good {greeting}
//   </h1>,
//   document.getElementById("root")
// );

///////////////////////////////////////////////////////
// 399. Inline Styling for React Elements
// import React from "react";
// import ReactDom from "react-dom";

// const customStyle = {
//   color: "green",
//   fontSize: "30px",
//   border: "2px solid red"
// };

// //How you update the CSS properties.
// customStyle.color = "blue";

// ReactDom.render(
//   <h1 style={customStyle}>Hello World!</h1>,
//   document.getElementById("root")
// );

///////////////////////////////////////////////////////
// 398. JSX Attributes & Styling React Elements
// import React from "react";
// import ReactDOM from "react-dom";

// const img = "https://picsum.photos/300";

// //Attribute in HTML should be 'camelCased'. => e.g. className, contentEditabble
// //
// ReactDOM.render(
//   <div>
//     <h1 className="heading" contentEditable="true" spellCheck="false">
//       My Favourite Foods
//     </h1>
//     <div>
//       <img
//         className="food-img"
//         alt="pizza"
//         src="https://www.foodandwine.com/thmb/4qg95tjf0mgdHqez5OLLYc0PNT4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg"
//       ></img>
//       <img
//         className="food-img"
//         alt="ddeokbokki"
//         src="https://imgcdn.uuumall.kr/product/1/8867/default/8867.jpg?w=0&h=0&f=jpeg&q=60"
//       ></img>
//       <img
//         className="food-img"
//         alt="dumpling"
//         src="https://assets.epicurious.com/photos/628ba0d3fa016bab2139efa2/1:1/w_960,c_limit/Gyoza_RECIPE_051922_34332.jpg"
//       ></img>
//     </div>

//     <div>
//       <img alt="random" src={img + "?grayscale"} />
//     </div>
//   </div>,
//   document.getElementById("root")
// );

///////////////////////////////////////////////////////
// 397. Javascript Expressions in JSX Practice

//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created b y YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.

// import React from "react";
// import ReactDOM from "react-dom";

// const firstName = "Soomin";
// const lastName = "Kim";

// const currentYear = new Date().getFullYear();

// ReactDOM.render(
//   <div>
//     <p>Created by {firstName + " " + lastName}.</p>
//     <p>Copyright {currentYear}</p>
//   </div>,
//   document.getElementById("root")
// );

///////////////////////////////////////////////////////
// 396. Javascript Expressions in JSX & ES6 Template Literals
// import React from "react";
// import ReactDOM from "react-dom";

// const fName = "Soo";
// const lName = "Kim";
// const number = 7;

////// You can create any JS expression in the HTML element(Which will end up having a specific number(value)) => By using '{}'
////// BUt you can't use JS statement (which asks questions to computer to get an answer. e.g. if()) in the HTML element.
// ReactDOM.render(
//   <div>
//     <h1>
//       Hello {fName} {lName}!
//     </h1>
//     <h1>Hello {`${fName} ${lName}`}!</h1>
//     <p> Your lucky number is {number}</p>
//     <p> My lucky number is {Math.round(Math.random() * 10)}</p>
//   </div>,
//   document.getElementById("root")
// );

///////////////////////////////////////////////////////
// 395. JSX Code Practice
////// ReactDOM.render(WHAT TO SHOW, WHERE TO SHOW IT);
// Render method can only take a single (ONE) HTML element.

// ReactDOM.render(<h1>Hello World!</h1>, document.getElementById("root"));

// ReactDOM.render(
//   <div>
//     <h1>Hello  !</h1>
//     <p>This is a paragraph</p>
//   </div>,
//   document.getElementById("root")
// );

//////
// import React from "react";
// import ReactDOM from "react-dom";

// ReactDOM.render(
//   <div>
//     <h1>My Favourite Foods</h1>
//     <ul>
//       <li>Pizza</li>
//       <li>Pasta</li>
//       <li>Noodles</li>
//     </ul>
//   </div>,

//   document.getElementById("root")
// );
