import React, { Component } from "react";
import PropTypes from "prop-types";
import SpeechRecognition from "react-speech-recognition";

import "./App.css"
const propTypes = {
  // Props injected by SpeechRecognition
  // transcript: PropTypes.string,
  resetTranscript: PropTypes.func,
  startListening :PropTypes.func,
  stopListening:PropTypes.func,
  finalTranscript:PropTypes.string,
  browserSupportsSpeechRecognition: PropTypes.bool
};

const Dictaphone = ({
  // transcript,
  resetTranscript,
  startListening,
  stopListening,
  finalTranscript,
  browserSupportsSpeechRecognition
}) => {
  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  
  return (
    <div className="dictado">
      <h1>Dictado de voz a texto</h1>
      <div>
          <button className="buttonPlay" onClick={startListening}>START</button>
          <button  className="buttonStop" onClick={stopListening}>STOP</button>
          <button onClick={resetTranscript}>Reset</button>
      </div>
      {/* <span>{transcript}</span> */}
      <div>
          <span className="span">{finalTranscript}</span>
      </div>
    </div>
  );
};

Dictaphone.propTypes = propTypes;

export default SpeechRecognition(Dictaphone);