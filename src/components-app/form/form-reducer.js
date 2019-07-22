// Define default initial state
const defaultState = {
    text: ''
};

function reducer (state = defaultState, actions) {
    switch (actions.type) {

        case 'UPDATE':
            return {
                text: actions.text
            };

        default:
            return state;
    }
}

export default reducer;