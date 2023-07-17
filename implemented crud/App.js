import videosDb from "./Data";
import "./App.css";
import { useState } from "react";
import AddVideo from "./AddVideo";
import VideoList from "./VideoList";

function App() {
  const [videos, setVideos] = useState(videosDb);
  const [editableVideo, setEditableVideo] = useState(null);
  function addNewVideo(video) {
    setVideos([...videos, { ...video, id: videos.length + 1 }]);
  }
  function deleteVideo(id) {
    setVideos(videos.filter((video)=>video.id !=id));
  }
  function editVideo(id) {
    // console.log(id)
    setEditableVideo(videos.find((video)=>video.id ===id));
  }
  function updateVideo(updatedVideo) {
    // setVideos([...videos.filter((video)=>video.id !=updatedVideo.id),updatedVideo])
    // to maintain order use splice
    const index=videos.findIndex((video)=>video.id===updatedVideo.id)
    console.log(index)
    const updatedVideoarray=[...videos]
    // splice returns deleted value so do in 2 steps
    updatedVideoarray.splice(index,1,updatedVideo)
    setVideos(updatedVideoarray)
    setEditableVideo(null);
  }
  return (
    <>
      <AddVideo addNewVideo={addNewVideo} editableVideo={editableVideo} updateVideo={updateVideo}></AddVideo>
        <VideoList videos={videos} deleteVideo={deleteVideo} editVideo={editVideo} ></VideoList>
    </>
  );
}

export default App;
