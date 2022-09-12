# Youtube-Clone

Created YouTube clone using React.js

Used rapidApi Youtube v3 to interact with the data ansd used the /search, /videos, /channels, /search routes

React hooks used was useState, useEffect

Used useParams from react-router-dom to grab the id to get the correct channels and videos, as well as the searchTerm that was typed into the search bar to render the correct channel/ Videos

Used NavLink to route the user to the correct video / channel when the video or channel was clicked

Used Material-ui for the styling of this application

Added demo thumbnail, channelUrl, channelTitle, videoUrl, profilePicture and videoTitle in case it wasn't found the application wouldn't break

Added index.js file which has all of the routes to my components, so that inside of my components file it would take up a ton of space and instead i could import all needed components from the index file

