// Define default initial state
const defaultState = {
    green: false,
    red: false,
    yellow: false
};

function reducer (state = defaultState, action) {
    switch (action.type) {

        case 'SET_FILTER_GREEN':
            return {
                green: !state.green,
                red: state.red,
                yellow: state.yellow
            };

        case 'SET_FILTER_RED':
            return {
                green: state.green,
                red: !state.red,
                yellow: state.yellow
            };

        case 'SET_FILTER_YELLOW':
            return {
                green: state.green,
                red: state.red,
                yellow: !state.yellow
            };

        default:
            return state;
    }
}

export default reducer;