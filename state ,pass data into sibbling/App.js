import videosDb from "./Data";
import "./App.css";
import { useState } from "react";
import AddVideo from "./AddVideo";
import VideoList from "./VideoList";

function App() {
  const [videos, setVideos] = useState(videosDb);
  function addNewVideo(video) {
    setVideos([...videos, { ...video, id: videos.length + 1 }]);
  }
  return (
    <>
      <AddVideo addNewVideo={addNewVideo}></AddVideo>
        <VideoList videos={videos}></VideoList>
    </>
  );
}

export default App;
