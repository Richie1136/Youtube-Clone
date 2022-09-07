import axios from "axios"

export const baseUrl = 'youtube-v31.p.rapidapi.com'

const options = {
  url: baseUrl,
  params: {
    maxResults: '50'
  },
  headers: {

    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
}

export const fetchApi = async (url) => {
  const { data } = await axios.get(`${baseUrl}/${url}`, options)
  return data
}