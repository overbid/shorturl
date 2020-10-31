const intialState = {
    url: '',
    data: null,
    error: ""
}

const reducer = (state  = intialState, action) => {
    switch (action.type) {
        case "FetchData":
            return {
                ...state,
                url: action.url,
                data: action.data
            }
        case "ERROR":
            return {
                ...state,
                error: action.msg
            }
        default:
            return state
    }
}

export default reducer