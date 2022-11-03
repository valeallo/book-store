import React, { useState } from "react";
import ModalCommentArea from "./ModalCommentArea";
import CommentIcon from "@mui/icons-material/Comment";
import CheckTwoToneIcon from "@mui/icons-material/CheckTwoTone";

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
      onClick={() => toggleCard()}
      className="flex flex-col justify-between w-[200px] h-[300px] border rounded-lg shadow-md cursor-pointer"
    >
      <div className="flex justify-between">
        <button
          className="bg-[#f46f8e] hover:bg-[#fc3d69] text-white font-bold py-1 px-1 rounded"
          onClick={() => setModalCommentArea(true)}
        >
          <CommentIcon />
        </button>

        <button
          className={
            selectedCard
              ? "bg-[#fc3d69] text-white  py-1 px-1 rounded"
              : "opacity-0"
          }
        >
          <CheckTwoToneIcon />
        </button>
      </div>

      <div className="bg-[#ff5e0d]  p-2  bottom-0 rounded-bl-lg rounded-br-lg">
        <h3 className="font-bold text-sm text-[#FFF9B0]">{book.title}</h3>
      </div>

      {modalCommentArea && (
        <ModalCommentArea book={book} closeModal={setModalCommentArea} />
      )}
    </div>
  );
};

export default SingleBook;
