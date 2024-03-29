import React, { useEffect, useMemo } from "react";
const url = require("../assets/loader_audio.mp3");
const play = require("../assets/play.png");
const pause = require("../assets/pause.png");

interface propss {
  playing: boolean;
  togglePlay: (type: string) => void;
}

const Player = ({ playing, togglePlay }: propss) => {
  const audio = useMemo(() => new Audio(url), []);

  const toggle = () => {
    togglePlay("toggle");
  };

  useEffect(() => {
    console.log("Play",playing,audio);
    playing ? audio.play() : audio.pause();
  }, [playing,audio]);

  useEffect(() => {
    audio.addEventListener("ended", () => togglePlay("stop"));
    return () => {
      audio.removeEventListener("ended", () => togglePlay("stop"));
    };
  }, [audio,togglePlay]);

  return (
    <div onClick={toggle} className="player-icon">
      {playing ? (
        <img className="player-icon" src={pause}  alt="pause"/>
      ) : (
        <img className="player-icon" src={play}  alt="play"/>
      )}
    </div>
  );
};

export default Player;
