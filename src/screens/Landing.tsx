import React from "react";
import { useSelector } from "react-redux";
import Sharingan from "../components/Sharingan";
import Header from "../components/Header";
import Content from "../components/Content";
import { stateType } from "../modals";

export default function Landing() {
  const state = useSelector((state:stateType) => state);
  const {audio:{playing},modal:{isDarkMode}} = state
  return (<>
    <div className={isDarkMode?"bg dark-mode":"bg"}></div>
    <div className={isDarkMode?"bg dark-mode bg2":"bg bg2"}></div>
    <div className={isDarkMode?"bg dark-mode bg2":"bg bg3"}></div>
    <div className={playing ? "wrapper sharingan-bg" : "wrapper"}>
      <Header playing={playing} />
      {playing ? <Sharingan playing={playing} />:<Content/>}
    </div>
    </>
  );
}
