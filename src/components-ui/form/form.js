// Libraries
import React from 'react';
import { connect } from 'react-redux';
import FormActions from '../../redux/actions/form';

// Components
import Button from '../button';

class Form extends React.Component {
    
    constructor () {
        super();
    
        this.state = {
            text: ''
        };
    
        this.handleTextAreaChange = this.handleTextAreaChange.bind(this);
        this.handleTextUpdate = this.handleTextUpdate.bind(this);
    }
    
    handleTextAreaChange (e) {
        this.setState({
            text: e.target.value
        });
    }
    
    handleTextUpdate () {
        const options = {
            type: 'update',
            text: this.state.text
        };

        this.props.textUpdate(options);

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
        textUpdate: (options) => dispatch(FormActions.update(options))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Form);