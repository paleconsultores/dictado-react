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
      textArea: ""
    };

  }
  __downloadTxtFile=()=>{
    var element =document.createElement("a");
    var file=new Blob([document.getElementById('textArea').value],{type:"text/plain"});
    element.href=URL.createObjectURL(file);
    element.download="textArea.txt";
    element.click();
  }
  handleSubmit = (e) => {
    e.preventDefault();
  }
  handleOnChange(event) {
    this.setState({
      textArea: event.target.value
    })
  }
 
  render() {
    const { finalTranscript,transcript, resetTranscript, browserSupportsSpeechRecognition,startListening,stopListening } = this.props

    if (!browserSupportsSpeechRecognition) {
      return null
    }

    return (
  
          <div className="dictado">
              <div>
                  <h1>Dictado de voz a texto</h1>
              </div>
              <div className="preloader_1">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
              </div>
              <div className="dictado__button">
                
                <button className="dictado__buttonPlay" onClick={startListening}>Start</button>
                <button  className="dictado__buttonStop" onClick={stopListening}>Stop</button>
               

              </div>
              {/* <span>{transcript}</span> */}
              <div className="text_Area">
                  <textarea 
                  id="textArea"
                  defaultValue={finalTranscript}
                  onChange={(event) => this.handleOnChange(event)}
                  />
              </div>
              <div className="dictado__button">
                  <button className="dictado__buttonReset" onClick={resetTranscript}>Reset</button>
                  <button className="dictado__buttonSave" onClick={this.__downloadTxtFile}>Save</button>
              </div>


      </div>
    )
  }
}

export default SpeechRecognition(options)(Dictaphone)