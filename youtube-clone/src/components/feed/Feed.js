import { useState, useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { SideBar, Videos } from '../index'
import { fetchApi } from '../../api/Api'



// px - stands for horizontal padding

const Feed = () => {

  const [selected, setSelected] = useState('New')
  const [videos, setVideos] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchApi(`search?part=snippet&q=${selected}`)
        setVideos(response.items)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [selected])


  return (

    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box sx={{ height: { sx: "auto", md: '92vh' }, borderRight: '1px solid #3d3d3d', px: { sx: 0, md: 2 } }}>
        <SideBar selected={selected} setSelected={setSelected} />
        <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: "#fff", }}>
          Copyright © Richard Hagenah 2022
        </Typography>
      </Box>
      <Box p={2} sx={{ overflowY: "auto", height: '90vh', flex: 2 }}>
        <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
          {selected} <span style={{ color: "#FC1503" }}>videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  )
}

export default Feed