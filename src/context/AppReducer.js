export default (state, action) => {
    switch (action.type) {
        case 'SHORTEN_URL':
            return {
                ...state,
                urls: [action.payload, ...state.urls]
            };


        default:
            return state;
    }
}