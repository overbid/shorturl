export const fetchData = () => {
    return (dispatch) => {
        return fetch('http://localhost:3006/v1/url', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
                body: JSON.stringify({url: 'http://google.com'})
            })
            .then(response => response.json())
            .then(json => dispatch({type: "FetchData", data: json}))
            .catch(err => {
                dispatch({type: "ERROR", msg: "Unable to fetch data"})
                console.error(err);
            })
    }
}