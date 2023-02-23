///////////////////////////////////////////////////
// 410. React Props
// <HTML attributes> 
//1. <HTML tag 
// id = "email" 
// * predetermined fixed name attributes (e.g. id, placeholder, value etc) and actual elements.
// />
// When we use these attributes, we can pass in some custom data.(e.g. document.getElemntById("email")) 
// And that data can then be accessed on the element by tapping into say the .id / .placeholder / .value properties etc.


// 2. React Proops
// Custom components(e.g. Card) and we can create as many of properties or props (e.g. name, tel, email).
// - We can name them anything we like. They're not fixed.
// You are the one that's creating this custom card element and you get to specify which attributes or properties they should have.

// But these values for each of these properties then gets passed along when this card component is created.

// And when we output this HTML element we can incorporate those properties into the creation of that element. And it's usually via an input called props.

// So the easiest way to imagine it is just simply that you're creating a new Javascript object with these key and value pairs and then that whole object gets sent over as the props object and then you can tap into it using .name, .telephone, as long as they match up with the names in your component element. 


import React from "react";
import ReactDOM from "react-dom";

function Card(props) {

  console.log(props);

  // whenever you're using HTML predetermined attributes, they always have to go into the HTML elements which are highlighted in different color and also they're in lower case.
  return <div className="my-style">
    <h2>{props.name}</h2>
    <img
      src={props.img}
      alt="avatar_img"
    />
    <p>{props.tel}</p>
    <p>{props.email}</p>
  </div>
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    {/* when this card component gets created, it will have a property called name that's set to equal to Beyonce
 */}
    <Card
      name="Beyonce"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      tel="+123 456 789"
      email="b@beyonce.com"
    />

    <Card
      name="Jack"
      img="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
      tel="+123 123 123"
      email="jack@email.com"
    />
  </div>,
  document.getElementById("root")
);
