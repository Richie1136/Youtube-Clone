import { useState, useEffect } from 'react'
import { useParams, NavLink } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { Box, Typography, Stack } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'

import { Videos } from '../index'
import { fetchApi } from '../../api/Api'
import Loading from '../loading/Loading'


const VideoDetail = () => {

  const [videoDetails, setVideoDetails] = useState(null)
  const [videos, setVideos] = useState([])

  const { id } = useParams()

  console.log(videoDetails?.snippet)


  useEffect(() => {
    const fetchVideoDetails = async () => {
      try {
        const response = await fetchApi(`videos?part=snippet,statistics&id=${id}`)
        setVideoDetails(response?.items[0])
      } catch (error) {
        console.log(error)
      }
      try {
        const response = await fetchApi(`search?part=snippet&relatedToVideoId=${id}&type=video`)
        console.log(response.items)
        setVideos(response.items)
      } catch (error) {
        console.log(error)
      }
    }
    fetchVideoDetails()
  }, [id])

  if (!videoDetails?.snippet) return <Loading />



  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: 'column', md: 'row' }}>
        <Box flex={1}>
          <Box sx={{ width: '100%', position: 'sticky', top: '86px' }}>
            <ReactPlayer className='react-player' url={`https://youtube.com/watch?v=${id}`} controls />
            <Typography variant='h5' color='white' fontWeight="bold" p='2'>{videoDetails?.snippet.title}</Typography>
            <Stack direction='row' justifyContent="space-between" sx={{ color: 'white' }} py={1} px={2}>
              <NavLink to={`/channel/${videoDetails?.snippet?.channelId}`}>
                <Typography variant={{ sm: 'subtitle1', md: 'h6' }} color="white">
                  {videoDetails?.snippet.channelTitle}
                  <CheckCircle sx={{ fontSize: '12px', color: 'gray', ml: '5px' }} />
                </Typography>
              </NavLink>
              <Stack direction='row' gap='20px' alignItems="center">
                <Typography variant='body1' sx={{ opacity: 0.7 }}>
                  {parseInt(videoDetails?.statistics?.viewCount).toLocaleString()} views
                </Typography>
                <Typography variant='body1' sx={{ opacity: 0.7 }}>
                  {parseInt(videoDetails?.statistics?.likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box px={2} py={{ xs: 5, md: 1 }} justifyContent='center' alignItems="center">
          <Videos videos={videos} direction='column' />
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail