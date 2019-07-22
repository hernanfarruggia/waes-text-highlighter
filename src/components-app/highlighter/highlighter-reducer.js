// Define default initial state
const defaultState = {
    green: [],
    red: [],
    yellow: []
};

function reducer (state = defaultState, { type, text }) {
    switch (type) {
        case 'ADD_GREEN':
            return {
                green: [...state.green, text],
                red: state.red,
                yellow: state.yellow
            };

        case 'ADD_RED':
            return {
                green: state.green,
                red: [...state.red ,text],
                yellow: state.yellow
            };

        case 'ADD_YELLOW':
            return {
                green: state.green,
                red: state.red,
                yellow: [...state.yellow, text]
            };

        default:
            return state;
    }
}

export default reducer;