// Libraries
import React from 'react';
import { connect } from 'react-redux';
import FilterActions from '../../redux/actions/filter';

// Components
import Button from '../../components-ui/button';

class Filter extends React.Component {

    constructor (props) {
        super(props);

        this.colors = {
            green: 'green',
            red: 'red',
            yellow: 'yellow'
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick (color) {
        this.props.setFilter(color);
    }

    render () {
        return (
            <div className="block">
                <div className="colors">
                    <Button
                        onClick={ () => this.handleClick(this.colors.red) }
                        text="Red"
                        type="red" />
                    <Button
                        onClick={ () => this.handleClick(this.colors.yellow) }
                        text="Yellow"
                        type="yellow" />
                    <Button
                        onClick={ () => this.handleClick(this.colors.green) }
                        text="Green"
                        type="green" />
                </div>
                <div className="text">
                    { this.renderFilters() }
                </div>
            </div>
        );
    }

    renderFilters () {
        let green = null,
            red = null,
            yellow = null;

        if (this.props.filter.green) {
            green = this.props.highlighter.green.map((item, key) => {
                return (
                    <div
                        className="green"
                        key={ key }>
                        { item }
                    </div>
                );
            });
        }

        if (this.props.filter.red) {
            red = this.props.highlighter.red.map((item, key) => {
                return (
                    <div
                        className="red"
                        key={ key }>
                        { item }
                    </div>
                );
            });
        }

        if (this.props.filter.yellow) {
            yellow = this.props.highlighter.yellow.map((item, key) => {
                return (
                    <div
                        className="yellow"
                        key={ key }>
                        { item }
                    </div>
                );
            });
        }

        return (
            <div className="text">
                { green }
                { red }
                { yellow }
            </div>
        );
    }

}

function mapStateToProps (state) {
    return {
        filter: state.filter,
        highlighter: state.highlighter
    };
}

function mapDispatchToProps (dispatch) {
    return {
        setFilter: (type) => dispatch(FilterActions.filter(type))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);