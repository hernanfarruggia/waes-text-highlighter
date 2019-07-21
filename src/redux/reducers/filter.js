const defaultState = {
    green: false,
    red: false,
    yellow: false
};

function reducer (state = defaultState, { type, color }) {
    switch (type) {

        case 'green':
            // TODO: traer la data guardada en highlighter para filtrala aca y devolver un objeto de arrays:
            // { red: [text, text, text], green: [], yellow: [text, text] }
            return {
                green: !state.green,
                red: state.red,
                yellow: state.yellow
            };

        case 'red':
            // TODO: traer la data guardada en highlighter para filtrala aca y devolver un objeto de arrays:
            // { red: [text, text, text], green: [], yellow: [text, text] }
            return {
                green: state.green,
                red: !state.red,
                yellow: state.yellow
            };

        case 'yellow':
            // TODO: traer la data guardada en highlighter para filtrala aca y devolver un objeto de arrays:
            // { red: [text, text, text], green: [], yellow: [text, text] }
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