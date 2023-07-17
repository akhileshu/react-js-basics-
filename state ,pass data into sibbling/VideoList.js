import Playbutton from "./Playbutton";
import Video from "./Video";

function VideoList({ videos }) {
  return (
    <div className="videolist">
      {videos.map((video) => {
        const { title, id } = video;
        return (
          <Video {...video} key={id}>
            <Playbutton>
              {/* children prop */}
              play {title}
            </Playbutton>
          </Video>
        );
      })}
    </div>
  );
}
export default VideoList;
