import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux'
import {fetchData} from './actions'

class App extends Component {

    state = {
        url: ''
    }

    updateUrl = (e) => {
        this.setState({url: e.target.value})
    }

    render() {

        return (
            <div className="App">
                <h1>Make a Short URL</h1>
                <form>
                    <label>URL
                    </label>{' '}
                    <input
                        type="text"
                        id="turl"
                        name="turl"
                        onChange={this.updateUrl}
                        value={this.state.url}/>{' '}
                    <button type="button" onClick={this.props.onFetchData}>
                        Submit
                    </button>
                </form>
                <br/> {this.props.error && <p>{this.props.error}</p>}

                {this.props.data && <div>
                    <div>Short URL</div>
                    <div>{this.props.data}</div>
                </div>}
            </div>
        );
    }
}

const mapStatetoProps = (state) => {

    return {url: state.url, data: state.data, error: state.error}
}

const mapDispatchprops = (dispatch) => {

    return {
        onFetchData: () => dispatch(fetchData())
    }
}

export default connect(mapStatetoProps, mapDispatchprops)(App);
