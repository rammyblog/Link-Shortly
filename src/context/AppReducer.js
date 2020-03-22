export default (state, action) => {
    switch (action.type) {
        case 'SHORTEN_URL':
            return {
                ...state,
                urls: [action.payload, ...state.urls],
                error: false
            };
        case 'ERROR_URL':
            return {
                ...state,
                error: true
            }


        default:
            return state;
    }
}