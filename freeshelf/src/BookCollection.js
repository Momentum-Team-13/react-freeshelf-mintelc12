import React  from 'react';
import { useState } from "react"
import './App.css';
/* eslint-disable */


    export default function BookCollection ({ book }) {
        const [expanded, setExpanded] = useState(false)
        return (
        <div className="single-book">
            <div className="flex-container">
                <div className="container-one">
                    <h2>{book.title}</h2>
                    <h3>{book.author}</h3>
                    <p>{book.shortDescription}</p>
                </div>
                <div className="img-container">
                        <img className="cover_art" 
                        src={book.coverImageUrl} alt="Book cover" onError={(e) => e.target.src = "default_book_cover.jpeg"} />
                </div>
                
            </div>
        <br></br>
        <br></br>
                <button aira-expanded="false" onClick={() => setExpanded(!expanded)}>
                {expanded ? "Show Less" : "Show More"}
                </button>
                {expanded ? ( 
                <>
                    <h4>More Info:</h4>
                    <ul>
                    <h5>URL: <a href="book.url" alt="">{book.url}</a> </h5>
                    {book.publisher ? <h5>Publisher: {book.publisher}</h5> : <></>}
                    {book.publicationDate ? <h5>Publication Date: {book.publicationDate}</h5> : <></>}
                    <h5>Full Description: </h5> <p>{book.detailedDescription}</p>
                    </ul>
                </>
                ) : (
                    ""
                )}
               
            
        </div>
        )
    
    }

