// Libraries
import React from 'react';
import { connect } from 'react-redux';

// Components
import Button from '../../components-ui/button';

// Actions
import { FILTER_ACTIONS, setFilter } from './filter-actions';

class Filter extends React.Component {

    constructor () {
        super();

        // Bind methods
        this.handleClick = this.handleClick.bind(this);
    }

    // handleClick receives a string type value and calls the action to set the filter
    handleClick (type) {
        this.props.setFilter(type);
    }

    render () {
        return (
            <div className="block">
                <div className="colors">
                    <Button
                        active={ this.props.filter.red }
                        onClick={ () => this.handleClick(FILTER_ACTIONS['SET_FILTER_RED']) }
                        text="Red"
                        type="red" />
                    <Button
                        active={ this.props.filter.yellow }
                        onClick={ () => this.handleClick(FILTER_ACTIONS['SET_FILTER_YELLOW']) }
                        text="Yellow"
                        type="yellow" />
                    <Button
                        active={ this.props.filter.green }
                        onClick={ () => this.handleClick(FILTER_ACTIONS['SET_FILTER_GREEN']) }
                        text="Green"
                        type="green" />
                </div>
                <div className="text">
                    { this.renderFilters() }
                </div>
            </div>
        );
    }

    // renderFilters checks for items for each color and returns a node with filtered results
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
                { red }
                { yellow }
                { green }
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
        setFilter: (type) => dispatch(setFilter(type))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);