import React, { useEffect, useState, createRef } from "react";
import myVideo from "../../IMG_1149.mp4";

const MainPage = () => {
  const [voiceNow, changeVoice] = useState(true);
  const [volume, changeVolume] = useState("0.8");

  const onPlayVideo = () => videoRef.current.play();
  const onStopVideo = () => videoRef.current.pause();
  const onPlayVoice = () => changeVoice(!voiceNow);
  const onChangeVolume = ({ target }) => {
    let { value } = target;
    console.log(value);
    changeVolume(value);
    videoRef.current.volume = value;
  };

  useEffect(() => {
    console.log("videoRef", videoRef);
  });

  const videoRef = createRef();

  return (
    <>
      <h2 style={{ marginLeft: "20px" }}>MainPage</h2>
      <div>
        <video
          ref={videoRef}
          width={300}
          src={myVideo}
          muted={voiceNow}
          style={{ marginBottom: "10px" }}
        ></video>
      </div>

      <button type="button" onClick={onPlayVideo}>
        Play Video
      </button>

      <button type="button" onClick={onStopVideo}>
        Pause
      </button>

      <button type="button" onClick={onPlayVoice}>
        {voiceNow ? "Play Voice" : "Off Voice"}
      </button>

      <input
        type="range"
        min="0"
        max="1"
        value={volume}
        step="0.01"
        onChange={onChangeVolume}
      />
    </>
  );
};

export default MainPage;
