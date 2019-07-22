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

        if (this.props.active) {
            classNames.push('active');
        }

        return {
            className: classNames.join(' '),
            disabled: this.props.disabled,
            onClick: this.props.onClick
        };
    }
}

Button.propTypes = {
    active: PropTypes.bool,
    disabled: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    type: PropTypes.string
};

Button.defaultProps = {
    active: false,
    diasbled: false
}

export default Button;