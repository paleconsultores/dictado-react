import React, {Component } from 'react'
import SpeechRecognition from 'react-speech-recognition'
import "./App.css"
const options = {
  autoStart: false
}

class Dictaphone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      names: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  handleChange = (e) => {
    this.setState({
      names: e.target.value
    });

  }

  render() {
    const { finalTranscript,transcript, resetTranscript, browserSupportsSpeechRecognition,startListening,stopListening } = this.props

    if (!browserSupportsSpeechRecognition) {
      return null
    }

    return (
      <div>
        {/* <button onClick={resetTranscript}>Reset</button>
        <span>{transcript}</span> */}

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
              <div className="text_Area">
                  <textarea 
                  id="names"
                  value={this.props.finalTranscript}
                  onChange={this.handleChange}
                  >
                  </textarea>
                  {/* <span className="span">{finalTranscript}</span> */}
              </div>
          </div>

      </div>
    )
  }
}

export default SpeechRecognition(options)(Dictaphone)