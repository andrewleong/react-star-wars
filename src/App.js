import React from 'react';
import { connect } from 'react-redux';
import './App.css';

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
}

function mapStateToProps(state, ownProps) {
  return {

  };
}

export default connect(mapStateToProps)(App);
