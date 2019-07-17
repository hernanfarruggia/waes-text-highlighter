import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.PureComponent {

    constructor () {
        super();

        this.btnTypes = {
            red: 'red',
            yellow: 'yellow',
            green: 'green'
        };
    }

    render () {
        return (
            <button { ...this.getButtonProps() }>
                { this.props.text }
            </button>
        );
    }

    getButtonProps () {
        const classNames = ['btn'];

        if (this.btnTypes[this.props.type]) {
            classNames.push(this.btnTypes[this.props.type]);
        }

        return {
            className: classNames.join(' '),
            disabled: this.props.disabled,
            onClick: this.props.onClick
        };
    }
}

Button.propTypes = {
    disabled: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    type: PropTypes.string
};

Button.defaultProps = {
    diasbled: false
}

export default Button;