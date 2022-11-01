import React from 'react'
import { useState } from 'react'


const ModalAddComments = ({ book }) => {
  const [formValue, setFormValue] = useState(null)
  const postComment = async (e) => {
    e.preventDefault()
    const url = `https://striveschool-api.herokuapp.com/api/comments/${book.asin}`
    try {

      await fetch(
        url,
        {
          method: 'POST',
          headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzJmNzJmNjQwYWU2YTAwMTU0ZmJiNDEiLCJpYXQiOjE2NjcwNTY2MDcsImV4cCI6MTY2ODI2NjIwN30.i_7NBaKH0OKFB8EB_GWoXQ9jUpJ9axJKhjOba5RvMRY",
            "Content-Type": "application/json"
          },

          body: JSON.stringify({
            author: 'Faty',
            comment: formValue.comment,
            rate: formValue.rate,
            createdAt: new Date(),
            updatedAt: new Date(),
            elementId: book.asin

          })

        })


    } catch (error) {
      console.log(error);

    }
  }
  return (
    <div className='flex flex-col justify-center items-center mx-auto'>
      <form onSubmit={postComment}>
        <input
          className='mb-2 p-2 w-fit'
          type="text"
          placeholder='Insert your comment'
          onChange={(e) =>
            setFormValue({ ...formValue, comment: e.target.value })
          }
        />
        <select
          className='mb-2 p-2 w-fit'
          onChange={(e) =>
            setFormValue({ ...formValue, rate: e.target.value })

          }>
          <option value="" disabled>
            Rate this book
          </option>
          <option value="1">
            1
          </option>
          <option value="2">
            2
          </option>
          <option value="3">
            3
          </option>
          <option value="4">
            4
          </option>
          <option value="5">
            5
          </option>
        </select>
        <button
          type='submit'
          onChange={(e) =>
            setFormValue({ ...formValue, add: e.target.value })
          }
        >
          Add comment
        </button>
      </form>
    </div>
  )
}

export default ModalAddComments