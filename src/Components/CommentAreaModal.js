import React from 'react'
import useFetch from '../Hooks/useFetch'
import AllComments from './AllComments'
import PostComment from './PostComment'



const CommentArea = ({id}) => { 
  const url = "https://striveschool-api.herokuapp.com/api/comments/";
  const {data, loading, error} = useFetch(url, id)

  return (
    <>
    <AllComments/>
    <PostComment/>
    </>
  )
}

export default CommentArea