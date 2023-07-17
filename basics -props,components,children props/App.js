import Playbutton from "./Playbutton";
import Video from "./Video";
import videos from "./Data";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* i can do like rendering a list of videos using map and sending playbutton as children props,
      then each video  will have its own playbutton  
      , handling event through props */}
      {videos.map((video) => {
        const { title,id } = video;
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
      {/* <Playbutton
      // this all are props 
        message="console log for playbutton"
        // it is  a function decleration
        onPlay={() => {
          console.log('playing');
        }}
        onPause={() => {
          console.log('paused');
        }}
        onSmash={(msg) => {
          console.log(msg);
        }}
      >
        children prop text
      </Playbutton> */}
      {/* <Playbutton message='showing alert for playbutton' onSmash={(msg)=>{alert(msg)}}>children prop text</Playbutton> */}
    </div>
  );
}

export default App;
