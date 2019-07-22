// Libraries
import React from 'react';
import { connect } from 'react-redux';

// Components
import Button from '../../components-ui/button';

// Actions
import { updateText } from './form-actions';

class Form extends React.Component {
    
    constructor () {
        super();
    
        // Set initial text to empty
        this.state = {
            text: ''
        };
    
        // Bind methods
        this.handleTextAreaChange = this.handleTextAreaChange.bind(this);
        this.handleTextUpdate = this.handleTextUpdate.bind(this);
    }
    
    // handleTextAreaChange updates the text state on every textarea change event
    handleTextAreaChange (e) {
        this.setState({
            text: e.target.value
        });
    }
    
    // handleTextUpdate uses the text state and pass it to the action textUpdate, then clear the textarea
    handleTextUpdate () {
        this.props.textUpdate(this.state.text);

        this.setState({
            text: ''
        });
    }

    render () {
        return (
            <div className="block">
                <textarea 
                    className="text-area"
                    onChange={ this.handleTextAreaChange }
                    placeholder="Insert your text here and click 'Add Text'!"
                    rows="10"
                    value={ this.state.text } />

                <Button
                    disabled={ this.state.text === '' }
                    onClick={ this.handleTextUpdate }
                    text="Add Text" />
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        text: state.form.text
    };
}

function mapDispatchToProps (dispatch) {
    return {
        textUpdate: (options) => dispatch(updateText(options))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Form);