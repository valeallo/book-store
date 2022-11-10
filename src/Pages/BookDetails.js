import React from "react";
import {useParams} from "react-router-dom"
import fantasy from "../BooksData/fantasy.json";

const BookDetails = () => {
  const {asin} = useParams()
    const thisBook = fantasy.find( book => book.asin === asin)
    
    return (
        <div>
            <h1 className="font-bold-600">{thisBook.title}</h1>
            <p>Price: ${thisBook.price}</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum ipsum molestias officiis dolores consectetur blanditiis. Excepturi quam ratione tenetur labore, consequatur odio ullam delectus quisquam ex non optio nostrum cupiditate?</p>
        </div>
    )
};

export default BookDetails;
