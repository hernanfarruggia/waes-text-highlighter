// Libraries
import React from 'react';
import { connect } from 'react-redux';

// Components
import Button from '../../components-ui/button';

// Actions
import { HIGHLIGHTER_ACTIONS, addText } from './highlighter-actions';

class Highlighter extends React.Component {

    constructor () {
        super();

        // Default highlight color to Red
        this.state = {
            highlighter: HIGHLIGHTER_ACTIONS.ADD_RED
        };

        // Bind methods
        this.setHighlighter = this.setHighlighter.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);
    }

    // setHighlighter keeps the highlighter color on sync by updating the state when the users change the selection
    setHighlighter (color) {
        this.setState({
            highlighter: color
        });
    }

    // handleMouseUp gets executed every time the user ends a selection. It will take that selection, save it and trigger
    // the creation of a new html span element to wrap it and apply a background color
    handleMouseUp (e) {
        // Get selected text as node
        const node = document.getSelection().getRangeAt(0),
            text = node.toString();

        // If there's any text in selection, then proceed
        // TODO: Check for inner html nodes in selection to avoid HTML crashes
        if (text !== '') {
            this.props.addText({
                type: this.state.highlighter,
                text
            });

            // Create the new span to apply styles to selected text
            this.createHTMLElement(node);
        }

    }

    render () {
        return (
            <div className="block">
                <div className="colors">
                    <Button
                        active={ this.state.highlighter === HIGHLIGHTER_ACTIONS.ADD_RED }
                        onClick={ () => this.setHighlighter(HIGHLIGHTER_ACTIONS.ADD_RED) }
                        text="Red"
                        type="red" />
                    <Button
                        active={ this.state.highlighter === HIGHLIGHTER_ACTIONS.ADD_YELLOW }
                        onClick={ () => this.setHighlighter(HIGHLIGHTER_ACTIONS.ADD_YELLOW) }
                        text="Yellow"
                        type="yellow" />
                    <Button
                        active={ this.state.highlighter === HIGHLIGHTER_ACTIONS.ADD_GREEN }
                        onClick={ () => this.setHighlighter(HIGHLIGHTER_ACTIONS.ADD_GREEN) }
                        text="Green"
                        type="green" />
                </div>
                <div className="text" onMouseUp={ this.handleMouseUp }>
                    { this.props.text }
                </div>
            </div>
        );
    }

    // createHTMLElement gets a HTML node as param, creates a new span, and wrap the node with it to apply background color as selected. 
    createHTMLElement (node) {
        const colorsMap = {
                ADD_RED: 'red',
                ADD_YELLOW: 'yellow',
                ADD_GREEN: 'green'
            },
            span = document.createElement('span');

        span.className = colorsMap[this.state.highlighter];
        node.surroundContents(span);
    }

}

function mapStateToProps (state) {
    return {
        text: state.form.text
    };
}

function mapDispatchToProps (dispatch) {
    return {
        addText: (text) => dispatch(addText(text)) 
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Highlighter)