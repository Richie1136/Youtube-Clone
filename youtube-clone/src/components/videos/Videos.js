import { Stack, Box } from "@mui/material"
import VideoCard from "../videocard/VideoCard"
import ChannelCard from "../channelcard/ChannelCard"

const Videos = ({ videos }) => {

  return (
    <Stack direction="row" flexWrap='wrap' justifyContent="start" gap={2}>

      {videos?.map((video) => (
        <Box key={video.id.videoId}>
          {video.id.videoId && <VideoCard video={video} />}
          {video.id.channelId && <ChannelCard channelDetail={video} />}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos