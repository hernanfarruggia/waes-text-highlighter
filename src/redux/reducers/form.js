const defaultState = {
    text: ''
};

function reducer (state = defaultState, { type, text }) {
    switch (type) {

        case 'update':
            return {
                text
            };

        default:
            return state;
    }
}

export default reducer;