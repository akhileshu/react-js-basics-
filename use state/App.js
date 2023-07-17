import Playbutton from "./Playbutton";
import Video from "./Video";
import videosDb from "./Data";
import "./App.css";
import Counter from "./Counter";
import { useState } from "react";

function App() {
  const [videos, setVideos] = useState(videosDb);
  return (
    <>
      <div>
        <button
          className="btn btn-primary"
          onClick={() => {
            // cant directly mutate state so we create a copy using spread operator to update state
            setVideos([
              ...videos,
              {
                id: videos.length + 1,
                title: "austrlia",
                views: "750k",
                channel: "twitch",
                date: "9 months ago",
                verified: true,
              },
            ]);
          }}
        >
          add video
        </button>
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
