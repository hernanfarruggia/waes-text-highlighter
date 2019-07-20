// Libraries
import React from 'react';
import { connect } from 'react-redux';
import HighlighterActions from '../../redux/actions/highlighter';

// Components
import Button from '../../components-ui/button';

class Highlighter extends React.Component {

    constructor (props) {
        super(props);

        this.colors = {
            green: 'green',
            red: 'red',
            yellow: 'yellow'
        };

        this.state = {
            highlighter: 'red'
        };

        // bind methods
        this.setHighlighter = this.setHighlighter.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);
    }

    setHighlighter (color) {
        if (!this.state.isLogged) {
            this.setState({
                highlighter: color
            });
        }
    }

    handleMouseUp (e) {
        // Set actions based on colors
        const actions = {
            green: 'addGreen',
            red: 'addRed',
            yellow: 'addYellow'
        },

        // Get selected text as node
        node = document.getSelection().getRangeAt(0),
        text = node.toString();

        // If there's any text in selection, then proceed
        // TODO: Check for inner html nodes in selection to avoid HTML crashes
        if (text !== '') {
            this.props.addText({
                type: actions[this.state.highlighter],
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
                        onClick={ () => this.setHighlighter(this.colors.red) }
                        text="Red"
                        type="red" />
                    <Button
                        onClick={ () => this.setHighlighter(this.colors.yellow) }
                        text="Yellow"
                        type="yellow" />
                    <Button
                        onClick={ () => this.setHighlighter(this.colors.green) }
                        text="Green"
                        type="green" />
                </div>
                <div className="text" onMouseUp={ this.handleMouseUp }>
                    { this.props.text }
                </div>
            </div>
        );
    }

    createHTMLElement (node) {
        const span = document.createElement('span');
        span.className = this.colors[this.state.highlighter];
        node.surroundContents(span);
    }

}

function mapStateToProps (state) {
    return {
        text: state.form.text,
        bla: state.highlighter
    };
}

function mapDispatchToProps (dispatch) {
    return {
        addText: (options) => dispatch(HighlighterActions.add(options)) 
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Highlighter)