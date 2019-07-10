import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import CharacterList from './components/CharacterList';

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
        const { characters } = this.props;
        return (
            <div className="container">
                <h1>Star Wars Characters!</h1>
                <CharacterList characters={characters} />
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
