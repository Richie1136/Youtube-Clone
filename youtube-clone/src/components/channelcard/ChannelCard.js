import { Box, CardContent, CardMedia, Typography } from "@mui/material"
import { CheckCircle } from "@mui/icons-material"
import { NavLink } from "react-router-dom"
import { demoProfilePicture } from '../../utils/constants'

const ChannelCard = ({ channelDetail }) => {
  console.log(channelDetail)
  return (
    <Box sx={{ boxShadow: 'none', borderRadius: 20 }}>
      <NavLink to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: 'white' }}>
          <CardMedia image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
            alt={channelDetail?.snippet?.title}
            sx={{ borderRadius: '50%', height: '180px', width: '180px' }}
          />
        </CardContent>
      </NavLink>
    </Box>
  )
}

export default ChannelCard