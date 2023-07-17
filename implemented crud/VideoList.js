import Playbutton from "./Playbutton";
import Video from "./Video";

function VideoList({ videos ,deleteVideo,editVideo}) {
  return (
    <div className="videolist">
      
      {videos.map((video) => {
        const { title, id } = video;
        return (
          <Video {...video} deleteVideo={deleteVideo} editVideo={editVideo} key={id}>
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
