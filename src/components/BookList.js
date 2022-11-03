import React from "react";
import fantasy from "../BooksData/fantasy.json";
import SingleBook from "./SingleBook";

const BookList = () => {
  return (
    <div className="container mx-4  ">
      <div className="flex flex-wrap justify-center gap-2 p-2 ml-6 ">
        {fantasy.slice(0, 20).map((book, index) => {
          return <SingleBook key={index} book={book} />;
        })}
      </div>
    </div>
  );
};

export default BookList;
