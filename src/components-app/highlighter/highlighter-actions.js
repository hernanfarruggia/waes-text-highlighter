export const HIGHLIGHTER_ACTIONS = {
    ADD_GREEN: 'ADD_GREEN',
    ADD_RED: 'ADD_RED',
    ADD_YELLOW: 'ADD_YELLOW'
};

export const addText = ({ type, text }) => ({
    type,
    text
});