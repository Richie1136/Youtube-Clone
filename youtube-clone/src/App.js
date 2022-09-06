import './App.css';
import { Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'
import { NavBar, Feed, SearchFeed, ChannelDetail, VideoDetail } from './components/index'

function App() {
  return (
    <Box sx={{ backgroundColor: '#000' }}>
      <NavBar />
      <Routes>
        <Route path='/' element={<Feed />} />
        <Route path='/video/:id' element={<VideoDetail />} />
        <Route path='/channel/:id' element={<ChannelDetail />} />
        <Route path='/search/:searchTerm' element={<SearchFeed />} />
      </Routes>
    </Box>
  );
}

export default App;
