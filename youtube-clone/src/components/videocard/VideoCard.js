import { NavLink } from "react-router-dom"
import { Typography, Card, CardContent, CardMedia } from "@mui/material"
import { CheckCircle } from "@mui/icons-material"

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../../utils/constants"



const VideoCard = ({ video }) => {

  return (
    <Card sx={{ width: { md: '320px', xs: '100%' }, boxShadow: 'none', borderRadius: 0 }}>
      <NavLink to={video.videoId ? `/video/${video.videoId}` : demoVideoUrl}>
        <CardMedia image={video.snippet?.thumbnails?.high?.url} alt={video.snippet.title} sx={{ width: 358, height: 180 }} />
      </NavLink>
      <CardContent sx={{ backgroundColor: '#1e1e1e', height: 106 }}>
        <NavLink to={video.videoId ? `/video/${video.videoId}` : demoVideoUrl}>
          <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
            {video.snippet.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </NavLink>
        <NavLink to={video.snippet.channelId ? `/channel/${video.snippet.channelId}` : demoChannelUrl}>
          <Typography variant="subtitle2" fontWeight="bold" color="gray">
            {video.snippet.channelTitle || demoChannelTitle}
            <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: '5px' }} />
          </Typography>
        </NavLink>
      </CardContent>
    </Card>
  )
}

export default VideoCard