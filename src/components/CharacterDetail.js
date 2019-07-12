import React from 'react';
import { connect } from 'react-redux';
import _ from 'underscore';
import { CylinderSpinLoader } from 'react-css-loaders';
import {
    FaMars,
    FaVenus,
    FaGenderless,
    FaUserCircle,
    FaFilm,
    FaGlobe,
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
            species,
            isLoading
        } = this.props;

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
                { isLoading &&
                    <div className="loader-spinner">
                        <div className="overlay"></div>
                        <CylinderSpinLoader color={'#80e7ee'} />
                    </div>
                }
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
                            <span>
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
                                        <span>
                                            {s.average_height === 'n/a' ? '0%': s.average_height }
                                        </span>
                                        <div className="progress-container">
                                            <span
                                                className="avg-height"
                                                style={{width: `${s.average_height === 'n/a' ? '0' : s.average_height*100/272}%`}}
                                            >
                                            </span>

                                        </div>
                                    </h4>

                                    <h4>
                                        Avg Lifespan:
                                        <span className="value">
                                            {s.average_lifespan === 'indefinite' ? 'indefinite': s.average_lifespan }
                                        </span>
                                        <div className="progress-container">
                                            <span
                                                className="avg-height"
                                                style={{width: `${s.average_lifespan === 'indefinite' ? '0' : s.average_lifespan*100/120}%`}}
                                            >
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
                    <div className="square">
                        <div className="mini-square">
                            <h2>{homeWorld.name}</h2>
                        </div>
                        <div className="planet">
                            <FaGlobe />
                        </div>
                    </div>

                    <div className="square">
                        <h4>Climate: <span>{homeWorld.climate}</span></h4>
                        <h4>Gravity: <span>{homeWorld.gravity}</span></h4>
                        <h4>
                            Diameter:
                            <span>
                                {homeWorld.diameter}
                                km
                            </span>
                        </h4>
                        <h4>
                            Population:
                            <span>
                                {homeWorld.population}
                            </span>
                        </h4>
                    </div>
                </div>

                <div className="character-content films">
                    <h3>Films</h3>
                    {
                        films && films.map((film, index) => {
                            return (
                                <div className="film" key={index}>
                                    <div className="icon">
                                        <FaFilm />
                                    </div>
                                    <h4>{film.title}</h4>
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
        this.props.getCharacter(id, existingCharacter);
    }

    async componentDidUpdate(prevProps){
        const { character } = this.props;
        if(!_.isEqual(prevProps.character, character)){
            const { films, homeworld, species } = character;
            await Promise.all([
                this.props.getHomeWorld(homeworld),
                this.props.getFilms(films),
                this.props.getSpecies(species)
            ]);
        }
    }
}

const mapStateToProps = state => {
    const { characters, character, films, species, homeWorld, isLoading } = state;
    return {
        characters,
        character,
        films,
        species,
        homeWorld,
        isLoading
    };
}

const mapDispatchToProps = dispatch => ({
    getCharacter: (id, existingCharacter) => dispatch(actionGetCharacter(id, existingCharacter)),
    getHomeWorld: (path) => dispatch(actionGetHomeWorld(path)),
    getFilms: (paths) => dispatch(actionGetFilms(paths)),
    getSpecies: (paths) => dispatch(actionGetSpecies(paths))
})

export default connect(mapStateToProps, mapDispatchToProps)(CharacterDetail);
