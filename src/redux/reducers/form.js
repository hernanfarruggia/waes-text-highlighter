const defaultState = {
    text: 'hola'
};

function reducer (state = defaultState, { type, data }) {
    switch (type) {

        case 'update':
            return {
                text: data
            };

        default:
            return state;
    }
}

export default reducer;