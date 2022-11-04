import React from "react";
import useFetch from "../Hooks/useFetch";
import LoadingIndicator from "./LoadingIndicator";

const ModalCommentList = ({ book }) => {
  const url = `https://striveschool-api.herokuapp.com/api/comments/${book.asin}`;
  const { data, loading, error } = useFetch(url);
  return (
    <div className="relative mt-8">
      <h1 className="mb-5 border-b-2 w-[270px] border-orange-500">Comments:</h1>
      {loading && !error && <LoadingIndicator />}
      {!data && !loading && error && (
        <p>Oops qualcosa non è andata a buon fine...</p>
      )}
      {data &&
        !error &&
        data.slice(0, 3).map((comment, index) => {
          console.log(comment);
          return (
            <div key={index} className="flex flex-col p-2 mb-3 w-[270px] bg-white">
              <div className="text-xs opacity-75 mb-1 text-rose-600">
                {comment.author}
              </div>
              <div className="mb-2">{comment.comment}</div>
              <div className="text-xs opacity-75 ">
                {comment.createdAt.slice(0, 10)}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default ModalCommentList;
