import React from 'react';
import { connect } from 'react-redux';
import _ from 'underscore';
import { FaMars, FaVenus, FaGenderless } from 'react-icons/fa';

import {
    actionGetHomeWorld,
    actionGetFilms,
    actionGetSpecies,
    actionGetCharacter,
} from '../redux/actions';

class CharacterDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const {
            character,
            films,
            homeWorld,
            species
        } = this.props;
        console.log("props", this.props)

        const getGender = (gender) => {
            if(gender === 'male'){
                return <FaMars />
            } else if(gender === 'female'){
                return <FaVenus />
            } else {
                return <FaGenderless />
            }
        }

        return (
            <div className="character-detail-container">
                <header className="header">
                    <h2>Character Details</h2>
                </header>

                <div className="character-content main">
                    <div className="gender-icon">
                        {getGender(character.gender)}
                    </div>
                    <h3>{character.name}</h3>
                    <div className="square">
                        <h4>Birth Year
                            <span>
                                {character.birth_year}
                            </span>
                        </h4>
                        <h4>
                            Hair Color
                            <span style={{ background: character.hair_color }}>
                                {character.hair_color}
                            </span>
                        </h4>
                        <h4>
                            Height
                            <span>
                                {character.height} cm
                            </span>
                        </h4>
                        <h4>
                            Weight
                            <span>
                                {character.mass} kg
                            </span>
                        </h4>
                        <h4>
                            Skin Color
                            <span>
                                {character.skin_color}
                            </span>
                        </h4>
                        <h4>
                            Eye Color
                            <span>
                                {character.eye_color}
                            </span>
                        </h4>
                    </div>
                </div>

                <div className="character-content">
                    <h3>Species</h3>
                    {
                        species && species.map((s, index) => {
                            return <p key={index}>{s.name}</p>
                        })
                    }
                </div>

                    <div className="character-content">
                        <h3>Home World</h3>
                        <p>{homeWorld.name}</p>
                    </div>
                    <div className="character-content">
                        <h3>Films</h3>
                        {
                            films && films.map((film, index) => {
                                return <p key={index}>{film.title}</p>
                            })
                        }
                    </div>

            </div>
        );
    }

    async componentDidMount(){
        const { location, characters, match } = this.props;
        const { state } = location;
        const { name } = state;
        const existingCharacter = characters[name];
        const { params={} } = match;
        const { id } = params;
        await this.props.getCharacter(id, existingCharacter);
    }

    async componentDidUpdate(prevProps){
        const { character } = this.props;
        if(_.isEmpty(prevProps.character) && !_.isEmpty(character)){
            const { films, homeworld, species } = character;
            await this.props.getHomeWorld(homeworld);
            await this.props.getFilms(films);
            await this.props.getSpecies(species);
        }
    }
}

const mapStateToProps = state => {
    const { characters, character, films, species, homeWorld } = state;
    return {
        characters,
        character,
        films,
        species,
        homeWorld
    };
}

const mapDispatchToProps = dispatch => ({
    getCharacter: (id, existingCharacter) => dispatch(actionGetCharacter(id, existingCharacter)),
    getHomeWorld: (path) => dispatch(actionGetHomeWorld(path)),
    getFilms: (paths) => dispatch(actionGetFilms(paths)),
    getSpecies: (paths) => dispatch(actionGetSpecies(paths))
})

export default connect(mapStateToProps, mapDispatchToProps)(CharacterDetail);
