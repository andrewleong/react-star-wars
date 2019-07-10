import React from 'react';
import { connect } from 'react-redux';
import './App.css';

import {
    actionGetCharacters
} from './redux/actions';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state={

        }
    }

    render() {
        return (
            <div className="App">

            </div>
        );
    }

    componentDidMount() {
        this.props.getCharacters();
    }
}

const mapStateToProps = state => {
    const { characters } = state;
    return {
        characters
    };
}

const mapDispatchToProps = dispatch => ({
    getCharacters: () => dispatch(actionGetCharacters())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
