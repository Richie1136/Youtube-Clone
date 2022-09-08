import { Stack, Box } from "@mui/material"

const Videos = ({ videos }) => {

  return (
    <Stack direction="row" flexWrap='wrap' justifyContent="start" gap={2}>

      {videos?.map((video) => (
        <Box key={video.id.videoId}>
          <h2 style={{ color: 'white' }}>{video.snippet.title}</h2>
        </Box>
      ))}
    </Stack>
  )
}

export default Videos