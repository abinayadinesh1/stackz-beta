import React from 'react'
const Book = (bookInfo) => {
  const {category, title, author} = bookInfo;
  // add attribute, event handler
  //onClick, onMouseOver
  const clickHandler = (e) => {
    console.log(e);
    alert('yay, you clicked the button');
  }
  const complexHandler = (author) => {
    console.log(author)
  }
  return(
  <article className = 'book' onMouseOver={() => {
    console.log(title)
  }}>
    <h3>{category}</h3>
    <h1 onClick = {()=> console.log(title)}>{title}</h1>
    <h5 style={{color: "#617d98", fontSize: "0.75rem", "marginTop": "0.2"}}>By: {author}</h5>
    <button type="button" onClick={clickHandler}>reference example</button>
    <button type='button' onClick ={() => complexHandler(author)}>function to print author name</button> {/* explain how turning the onClick into a function handler makes it work */}
    </article>
  );
};

export default Book