import Playbutton from "./Playbutton";
import Video from "./Video";
import useVideos from "./hooks/useVideos";

function VideoList({ editVideo }) {
  // define context with useContext hook
  const videos = useVideos();
  return (
    <div className="videolist">
      {videos.map((video) => {
        const { title, id } = video;
        return (
          <Video {...video} editVideo={editVideo} key={id}>
            <Playbutton>
              {/* children prop */}- {title}
            </Playbutton>
          </Video>
        );
      })}
    </div>
  );
}
export default VideoList;
