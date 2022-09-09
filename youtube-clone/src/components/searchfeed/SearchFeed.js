import { useState, useEffect } from 'react'
import { Box, Typography } from '@mui/material'
import { Videos } from '../index'
import { fetchApi } from '../../api/Api'
import { useParams } from 'react-router-dom'



// px - stands for horizontal padding

const SearchFeed = () => {

  const [videos, setVideos] = useState([])

  const { searchTerm } = useParams()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchApi(`search?part=snippet&q=${searchTerm}`)
        setVideos(response.items)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [searchTerm])




  return (



    <Box p={2} sx={{ overflowY: "auto", height: '90vh', flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Search Results for: <span style={{ color: "#FC1503" }}>{searchTerm}</span>
      </Typography>

      <Videos videos={videos} />
    </Box>
  )
}

export default SearchFeed