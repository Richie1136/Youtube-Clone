import axios from "axios"

export const baseUrl = 'https://youtube-v31.p.rapidapi.com'

const options = {
  params: {
    maxResults: '50'
  },
  headers: {

    // 'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Key': 'e9f136fd86msh20374d953bfb05ep137d7ejsnaede58975cae',

    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
}

export const fetchApi = async (url) => {
  const { data } = await axios.get(`${baseUrl}/${url}`, options);
  return data
}