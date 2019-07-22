export const FORM_ACTIONS = {
    UPDATE: 'UPDATE'
};

export const updateText = text => ({
    type: FORM_ACTIONS.UPDATE,
    text
});