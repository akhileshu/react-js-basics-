import { useContext } from "react";
import VideoDispatchContext from "./context/VideoDispatchContext";

function Video({
  title,
  date,
  views,
  channel,
  id,
  children,
  verified,
  editVideo,
}) {
    // define context with useContext hook
  const dispatch=useContext(VideoDispatchContext)
  return (
    
    <div className="card" style={{ width: "16rem" }}>
      <div className="btn btn-danger" onClick={() => dispatch({ type: "DELETE", payload: id })}>
        X
      </div>
      <div className="btn btn-primary edit-btn" onClick={() => editVideo(id)}>
        eidt
      </div>
      <img
        src={`https://picsum.photos/id/${id}/200/300`}
        style={{ height: "12rem" }}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          {date}, {views}, {channel} {verified && "✅"}
        </p>
        {/* play/pause button */}
        {children}
      </div>
    </div>
  );
}
export default Video;
