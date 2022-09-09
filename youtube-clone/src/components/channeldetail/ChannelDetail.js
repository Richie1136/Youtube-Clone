import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import { Videos, ChannelCard } from '../index'
import { fetchApi } from '../../api/Api'


const ChannelDetail = () => {

  const { id } = useParams()

  const [channelDetail, setChannelDetail] = useState(null)


  useEffect(() => {
    const fetchChannelDetails = async () => {
      try {
        const response = await fetchApi(`channels?part="snippet"&id=${id}`)
        setChannelDetail(response?.items[0])
      } catch (error) {
        console.log(error)
      }
    }
    fetchChannelDetails()
  }, [id])


  return (
    <Box>

      <h2>{channelDetail?.snippet?.title}</h2>
    </Box>
  )
}

export default ChannelDetail