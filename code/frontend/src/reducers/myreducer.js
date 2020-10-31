const intialState = {
    url: '',
    data: null,
    error: ""
}

const reducer = (state = intialState, action) => {
    switch (action.type) {
        case "SUBMIT":
            return {
                ...state,
                url: action.url,
            }
        case "FETCHDATA":
            return {
                ...state,
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