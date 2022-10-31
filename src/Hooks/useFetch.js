import React, {useState, useEffect} from React;

const useFetch = (url, id) => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzU1YTVhZGMxYjA2ZjAwMTVjMGJlZWEiLCJpYXQiOjE2NjY1NTczNTgsImV4cCI6MTY2Nzc2Njk1OH0.-9Yujzbc2qkjJOXB9jYmnAA0BKlBGSwmL5zpXNMPUHc"


    useEffect ( () => {
       (async () => {
        try {
            setLoading(false)
            await fetch(
                url + id,
                {
                    "Authorization": "Bearer" + token,
                }      
            )
             const res = await response.json()
             setData(res)
        }
        catch(error) {
            setError(true)
        }
        finally{
            setLoading(false)
        }
       })()
    },  [url, id])
    return {data, error, loading}

}

export default useFetch