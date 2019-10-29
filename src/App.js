import React, { Component } from "react";
import PropTypes from "prop-types";
import SpeechRecognition from "react-speech-recognition";

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
    <div>
      <button onClick={startListening}>startListening</button>
      <button onClick={stopListening}>stopListening</button>
      <button onClick={resetTranscript}>Reset</button>
      {/* <span>{transcript}</span> */}
      <span>{finalTranscript}</span>
    </div>
  );
};

Dictaphone.propTypes = propTypes;

export default SpeechRecognition(Dictaphone);