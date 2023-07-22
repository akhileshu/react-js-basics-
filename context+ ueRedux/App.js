import videosDb from "./Data";
import "./App.css";
import { useContext, useReducer, useState } from "react";
import AddVideo from "./AddVideo";
import VideoList from "./VideoList";
import VideosContext from "./context/VideosContext";
import VideoDispatchContext from "./context/VideoDispatchContext";

function App() {
  // useState for state variable ->ediatablevideo
  const [editableVideo, setEditableVideo] = useState(null);
  // reducer function
  function videoReducer(videos, action) {
    // returns state
    switch (action.type) {
      case "ADD":
        return [...videos, { ...action.payload, id: videos.length + 1 }];

      case "DELETE":
        return videos.filter((video) => video.id != action.payload);

      case "UPDATE":
        setEditableVideo(null);
        return videos.map((video) => {
          return video.id === action.payload.id ? action.payload : video;
        });

      default:
        return videos;
    }
  }

  // useReducer hook for state variable ->videos
  const [videos, dispatch] = useReducer(videoReducer, videosDb);

  // handling state update function for setEditableVideo
  function editVideo(id) {
    setEditableVideo(videos.find((video) => video.id === id));
  }

  return (
    <>
      {/* wrapping component with context.provider with value */}
      <VideosContext.Provider value={videos}>
        <VideoDispatchContext.Provider value={dispatch}>
          <AddVideo editableVideo={editableVideo}></AddVideo>
          <VideoList editVideo={editVideo}></VideoList>
        </VideoDispatchContext.Provider>
      </VideosContext.Provider>
    </>
  );
}

export default App;
