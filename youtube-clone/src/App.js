import './App.css';
import { Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'
import NavBar from './components/navbar/NavBar';
import Feed from './components/feed/Feed';
import VideoDetail from './components/videodetail/VideoDetail';
import ChannelDetail from './components/channeldetail/ChannelDetail';
import SearchFeed from './components/searchfeed/SearchFeed';

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
      <h2>Youtube Clone</h2>
    </Box>
  );
}

export default App;
