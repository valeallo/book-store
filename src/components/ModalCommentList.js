import React from 'react'
import useFetch from '../Hooks/useFetch'
import LoadingIndicator from './LoadingIndicator'

const ModalCommentList = ({ book }) => {

  const url = `https://striveschool-api.herokuapp.com/api/comments/${book.asin}`
  const { data, loading, error } = useFetch(url)
  return (
    <div className='relative mt-8'>
      {loading && !error && <LoadingIndicator />}
      {!data && !loading && error && <p>Oops qualcosa non è andata a buon fine...</p>}
      {data && !error && data.map((comment, index) => {
        console.log(comment);
        return (
          <div key={index} className='flex flex-col '>
            <div>
              {comment.author}
            </div>
            <div>
              {comment.comment}
            </div>
            <div>
              {comment.createdAt.slice(0, 10)}
            </div>
          </div>
        )

      })}

    </div>
  )
}

export default ModalCommentList