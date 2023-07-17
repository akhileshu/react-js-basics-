import Playbutton from "./Playbutton";
import Video from "./Video";
import videosDb from "./Data";
import "./App.css";
import Counter from "./Counter";
import { useState } from "react";
import AddVideo from "./AddVideo";

function App() {
  const [videos, setVideos] = useState(videosDb);
  function addNewVideo(video) {
    setVideos([...videos, { ...video, id: videos.length + 1 }]);
  }
  return (
    <>
      <div>
        {/*       name of prop & updaterfunciton */}
        <AddVideo addNewVideo={addNewVideo}></AddVideo>
      </div>

      <div className="App">
        {/*sending playbutton as children props, then each video  will have its own playbutton , handling event through props */}

        {videos.map((video) => {
          const { title, id } = video;
          return (
            <Video {...video} key={id}>
              <Playbutton
                // it is  a function decleration
                onPlay={() => {
                  console.log(`playing ${title}`);
                }}
                onPause={() => {
                  console.log(`paused ${title}`);
                }}
              >
                {/* children prop */}
                play {title}
              </Playbutton>
            </Video>
          );
        })}
        {/* <Counter/> */}
      </div>
    </>
  );
}

export default App;
