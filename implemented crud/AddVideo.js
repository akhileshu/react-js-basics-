import { useEffect, useState } from "react";

function AddVideo({ addNewVideo, editableVideo, updateVideo }) {
  const initialVideoState = {
    channel: "instagram",
    date: "6 months ago",
    verified: true,
    title: "",
    views: "",
  };
  const [video, setVideo] = useState(initialVideoState);
  function handleSubmit(e) {
    e.preventDefault();
    if (editableVideo) {
      updateVideo(video);
    } else {
      addNewVideo(video);
    }

    setVideo(initialVideoState);
  }

  function handleChange({ target }) {
    setVideo({
      ...video,
      //   to mean that []=>is to be evaluated
      [target.name]: target.value,
    });
  }
  useEffect(() => {
    if (editableVideo) {
      setVideo(editableVideo);
    }
  }, [editableVideo]);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          required
          placeholder="title"
          onChange={handleChange}
          name="title"
          type="text"
          value={video.title} // Set the value of the input field to video.title
        ></input>
        <input
          required
          placeholder="views"
          onChange={handleChange}
          name="views"
          type="text"
          value={video.views} // Set the value of the input field to video.views
        ></input>
        <button type="submit">{editableVideo ? "edit" : "add"} video</button>
      </form>
    </>
  );
}
export default AddVideo;
