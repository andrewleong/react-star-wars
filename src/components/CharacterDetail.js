import React from 'react';
import { connect } from 'react-redux';
import _ from 'underscore';
import {
    FaMars,
    FaVenus,
    FaGenderless,
    FaUserCircle
} from 'react-icons/fa';

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
                    <div className="icon">
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

                <div className="character-content species">
                    <h3>Species</h3>
                    {
                        species && species.map((s, index) => {
                            return (
                                <div key={index}>
                                    <div className="icon">
                                        <FaUserCircle />
                                    </div>
                                    <h4>Type:
                                        <span>
                                            {s.name}
                                        </span>
                                    </h4>
                                    <h4>Classification:
                                        <span>
                                            {s.classification}
                                        </span>
                                    </h4>
                                    <h4>Designation:
                                        <span>
                                            {s.designation}
                                        </span>
                                    </h4>
                                    <h4>
                                        Avg Height:
                                        <div className="progress-container">
                                            <span className="avg-height" style={{width: `${s.average_height}%`}}>
                                                {s.average_height = 'n/a' ? '0%': s.average_height }
                                            </span>
                                        </div>
                                    </h4>

                                    <h4>
                                        Avg Lifespan:
                                        <div className="progress-container">
                                            <span className="avg-height" style={{width: `${s.average_height}%`}}>
                                                {s.average_lifespan = 'indefinite' ? 'indefinite': s.average_lifespan }
                                            </span>
                                        </div>
                                    </h4>
                                </div>
                            )
                        })
                    }
                </div>

                <div className="character-content homeworld">
                    <h3>Home World</h3>
                    <h4>Name: {homeWorld.name}</h4>
                    <h4>Climate: {homeWorld.climate}</h4>
                    <h4>
                        Diameter
                        <div className="circle">
                            {homeWorld.diameter}
                        </div>
                    </h4>
                    <h4>
                        Population
                        <span>
                            {homeWorld.population}
                        </span>
                    </h4>
                </div>

                <div className="character-content films">
                    <h3>Films</h3>
                    {
                        films && films.map((film, index) => {
                            return (
                                <div key={index}>
                                    <p>{film.title}</p>
                                </div>
                            )
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
