import React from 'react';
import ReactDom from 'react-dom';
import './index.css'
import Book from './Book'
import {bookData} from './books'

// stateless functional component
function ReadingList(){
  return(
    <section className="booklist">
      {bookData.map((book)=> {
        return <Book key={book.id} {...book}></Book>
      })}
    </section>
  )};
ReactDom.render(<ReadingList />, document.getElementById('root'));