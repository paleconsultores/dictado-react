import React from 'react';

class TextArea extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
           transcribe: ""
        };
    
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
      }
    
      handleSubmit = (e) => {
        e.preventDefault();
      }
    
      handleChange = (e) => {
        this.setState({
         transcribe: e.target.value
        });
    
      }
    
      render() {
        return (
          <section className="flex">
            
                  <div className="form-group">
                    <textarea
                      id="transcribe"
                      value={this.state.names}
                      onChange={this.handleChange}
                    >
                    </textarea>
                  </div>
          </section>
        )
      }
}
export default TextArea;