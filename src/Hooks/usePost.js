import React, { useState, useEffect } from "react";

const usePost = (url,comment) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(null)
    const [error, setError] = useState(null)
    

    useEffect((e) => {
        ; (async () => {
            try {
                setLoading(true)

                const response = await fetch(
                    url ,
                    {
                        headers: {
                            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzJmNzJmNjQwYWU2YTAwMTU0ZmJiNDEiLCJpYXQiOjE2NjcwNTY2MDcsImV4cCI6MTY2ODI2NjIwN30.i_7NBaKH0OKFB8EB_GWoXQ9jUpJ9axJKhjOba5RvMRY"
                            },
                            method: 'POST',
                            body: JSON.stringify(comment)
                    })
                const res = await response.json()
                setData(res)

            } catch (error) {

                setError(error)
            }
            finally {
                setLoading(false)
            }
        })()

    }, [url])
    return {data, loading, error}
}

export default usePost