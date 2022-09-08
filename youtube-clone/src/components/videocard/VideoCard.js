import { NavLink } from "react-router-dom"
import { Typography, Card, CardContent, CardMedia } from "@mui/material"
import { CheckCircle } from "@mui/icons-material"

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../../utils/constants"



const VideoCard = ({ video }) => {

  console.log(video)

  return (
    <Card>
      <NavLink to={video.videoId ? `/video/${video.videoId}` : demoVideoUrl}>
        <CardMedia image={video.snippet?.thumbnails?.high?.url} alt={video.snippet.title} sx={{ width: 358, height: 180 }} />
      </NavLink>
    </Card>
  )
}

export default VideoCard