// Libraries
import React from 'react';

// Components
import Button from '../button';

class Form extends React.Component {
    
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
            <div className="block">
                <textarea className="text-area" rows="10" placeholder="Insert your text here and click 'Add Text'!" onChange={ this.handleTextAreaChange } />
                <Button text="Add Text" onClick={ this.setNewTextBlock } disabled={ this.state.textArea === '' }/>
            </div>
        );
    }
}

export default Form;