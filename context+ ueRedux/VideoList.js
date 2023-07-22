import { useContext } from "react";
import Playbutton from "./Playbutton";
import Video from "./Video";
import VideosContext from "./context/VideosContext";

function VideoList({editVideo}) {
    // define context with useContext hook
  const videos=useContext(VideosContext)
  return (
    <div className="videolist">
      
      {videos.map((video) => {
        const { title, id } = video;
        return (
          <Video {...video} editVideo={editVideo} key={id}>
            <Playbutton>
              {/* children prop */}
              - {title}
            </Playbutton>
          </Video>
        );
      })}
    </div>
  );
}
export default VideoList;
