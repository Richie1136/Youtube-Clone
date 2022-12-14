import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import { Videos, ChannelCard } from '../index'
import { fetchApi } from '../../api/Api'


const ChannelDetail = () => {

  const { id } = useParams()

  const [channelDetail, setChannelDetail] = useState(null)
  const [videos, setVideos] = useState([])



  useEffect(() => {
    const fetchChannelDetails = async () => {
      try {
        const response = await fetchApi(`channels?part=snippet&id=${id}`)
        setChannelDetail(response?.items[0])
      } catch (error) {
        console.log(error)
      }
      try {
        const response = await fetchApi(`search?channelId=${id}&part=snippet&order=date`)
        setVideos(response?.items)
      } catch (error) {
        console.log(error)
      }
    }
    fetchChannelDetails()
  }, [id])


  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{
          backgroundImage: "linear-gradient(to right, #4880EC, #019CAD)",
          zIndex: 10,
          height: '300px'
        }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-115px" />
      </Box>
      <Box display='flex' p="2">
        <Box sx={{ mr: { sm: '100px' } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  )
}

export default ChannelDetail