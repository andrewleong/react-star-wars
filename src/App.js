import React from 'react';
import { connect } from 'react-redux';
import ReactPaginate from 'react-paginate';
import { CylinderSpinLoader } from 'react-css-loaders';
import _ from 'underscore';

import CharacterList from './components/CharacterList';

import {
    actionGetCharacters,
} from './redux/actions';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state={
        }

        this.handlePageChange = this.handlePageChange.bind(this);
    }

    handlePageChange({ selected }) {
        const currentPage = selected + 1;
        this.props.getCharacters(currentPage);
    }

    render() {
        const { characters, totalPages, currentPage, isLoading } = this.props;
        return (
            <div className="container">
                { isLoading &&
                    <div className="loader-spinner">
                        <div className="overlay"></div>
                        <CylinderSpinLoader color={'#80e7ee'} />
                    </div>
                }
                <h1>List Of Star Wars Characters</h1>
                <CharacterList characters={characters} />
                <ReactPaginate
                    initialPage={currentPage-1}
                    previousLabel={'<'}
                    nextLabel={'>'}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    pageCount={totalPages || 1}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageChange}
                    containerClassName={'pagination'}
                    subContainerClassName={'pages pagination'}
                    activeClassName={'active'}
                />
            </div>
        );
    }

    componentDidMount() {
        if(_.isEmpty(this.props.characters)){
            this.props.getCharacters();
        }
    }
}

const mapStateToProps = state => {
    const { characters, totalPages, currentPage, isLoading } = state;
    return {
        characters,
        totalPages,
        currentPage,
        isLoading,
    };
}

const mapDispatchToProps = dispatch => ({
    getCharacters: (currentPage) => dispatch(actionGetCharacters(currentPage)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
