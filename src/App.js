// Libraries
import React from 'react';

// Components
import Button from './components-ui/button';

// Styles
import './App.css';

class App extends React.Component {

  constructor () {
    super();

    this.state = {
      textArea: '',
      textBlock: ''
    };

    this.handleTextAreaChange = this.handleTextAreaChange.bind(this);
    this.setNewTextBlock = this.setNewTextBlock.bind(this);
  }

  handleTextAreaChange (e) {
    this.setState({
      textArea: e.target.value
    });
  }

  setNewTextBlock (msg) {
    // Dispatch action
    //  - Clear textarea
    //  - Clear previous textblock
    //  - Clear previous highlihts
    //  - Disable all btns
    this.setState({
      textBlock: this.state.textArea
    });
  }

  render () {

    return (
      <div className="wrapper">
      
        <div className="block">
          <textarea className="text-area" rows="10" placeholder="Insert your text here and click 'Add Text'!" onChange={ this.handleTextAreaChange } />
          <Button text="Add Text" onClick={ this.setNewTextBlock } disabled={ this.state.textArea === '' }/>
        </div>
        
        <div className="block">
          <div className="colors">
            <Button text="Red" type="red" />
            <Button text="Yellow" type="yellow" />
            <Button text="Green" type="green" />
          </div>
          <div className="text">
            { this.state.textBlock }
          </div>
        </div>
        
        <div className="block">
          <div className="colors">
            <Button text="Red" type="red" />
            <Button text="Yellow" type="yellow" />
            <Button text="Green" type="green" />
          </div>
          <div className="text">
            Plese select a color to list selected text!
          </div>
        </div>
      </div>
    );
  }
}

export default App;
