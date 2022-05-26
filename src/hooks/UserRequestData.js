import { useState, useEffect } from 'react'
import { API } from '../services/Api'

export const useRequestData = (url, initialState) => {
  const [data, setData] = useState(initialState)

  useEffect(() => {
    API.get(url)
      .then(response => {
        setData(response.data)
      })
      .catch(err => {
        console.log(err.message)
      })
  }, [url])

  return data
}

