import React from 'react';
import { connect } from 'react-redux';
import ReactPaginate from 'react-paginate';

import CharacterList from './components/CharacterList';

import {
    actionGetCharacters,
} from './redux/actions';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state={
            activePage: 1
        }
    }

    handlePageChange({ selected }) {
        const currentPage = selected + 1;
        this.props.getCharacters(currentPage);
    }

    render() {
        const { characters, totalPages } = this.props;
        return (
            <div className="container">
                <h1>Star Wars Characters!</h1>
                <CharacterList characters={characters} />
                <ReactPaginate
                    previousLabel={'<'}
                    nextLabel={'>'}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    pageCount={totalPages || 1}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={(page) => this.handlePageChange(page)}
                    containerClassName={'pagination'}
                    subContainerClassName={'pages pagination'}
                    activeClassName={'active'}
                />
            </div>
        );
    }

    componentDidMount() {
        this.props.getCharacters();
    }
}

const mapStateToProps = state => {
    const { characters, totalPages } = state;
    return {
        characters,
        totalPages
    };
}

const mapDispatchToProps = dispatch => ({
    getCharacters: (currentPage) => dispatch(actionGetCharacters(currentPage)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
