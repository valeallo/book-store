import React, { useState } from "react";
import ModalCommentArea from "./ModalCommentArea";

const SingleBook = ({ book }) => {
  const [modalCommentArea, setModalCommentArea] = useState(false);
  const [selectedCard, setSelectedCard] = useState(false);
  const toggleCard = () => {
    setSelectedCard(!selectedCard);
  };
  return (
    <div
      style={{
        backgroundImage: `url("${book.img}")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="flex flex-col justify-end w-[200px] h-[300px] border rounded-lg shadow-md cursor-pointer"
    >
      <div
        onClick={() => toggleCard()}
        className={
          selectedCard ? " drop-shadow-2xl hue-rotate-15" : "border-stone-200"
        }
      ></div>
      <div className="bg-[#ff5e0d]  p-2  bottom-0 rounded-bl-lg rounded-br-lg">
        <h3 className="font-bold text-[#FFF9B0]">{book.title}</h3>
        <button
          className="bg-[#f46f8e] hover:bg-[#fc3d69] text-white font-bold py-1 px-1 rounded"
          onClick={() => setModalCommentArea(true)}
        >
          Commenta
        </button>
      </div>
     
      {modalCommentArea && (
        <ModalCommentArea book={book} closeModal={setModalCommentArea} />
      )}
    </div>
  );
};

export default SingleBook;
