import { Stack, Box } from "@mui/material"
import { VideoCard, ChannelCard } from '../index'

const Videos = ({ videos, direction }) => {

  console.log(videos)

  return (
    <Stack direction={direction || "row"} flexWrap='wrap' justifyContent="start" gap={2}>
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