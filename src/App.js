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
const options = {
  autoStart: false
}


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
      <div>
          <h1>Dictado de voz a texto</h1>
      </div>
      <div className="dictado__button">
        
        <button className="dictado__buttonPlay" onClick={startListening}>START</button>
        <button  className="dictado__buttonStop" onClick={stopListening}>STOP</button>
        <button className="dictado__buttonReset" onClick={resetTranscript}>Reset</button>
        

      </div>
      {/* <span>{transcript}</span> */}
      <div>
          <span className="span">{finalTranscript}</span>
      </div>
    </div>
  );
};

Dictaphone.propTypes = propTypes;

// export default SpeechRecognition(Dictaphone);
export default SpeechRecognition(options)(Dictaphone);