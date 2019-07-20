const defaultState = {
    green: [],
    red: [],
    yellow: []
};

function reducer (state = defaultState, { type, text }) {
    switch (type) {
        case 'addGreen':
            return {
                green: [...state.green, text],
                red: state.red,
                yellow: state.yellow
            };

        case 'addRed':
            return {
                green: state.green,
                red: [...state.red ,text],
                yellow: state.yellow
            };

        case 'addYellow':
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