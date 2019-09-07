import React from "react";
import { connect } from "react-redux";

import { loadRepos } from "./actions";

import logo from "./logo.svg";
import "./App.css";

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {props.loading ? <div>loading...</div> : <div>{props.name}</div>}
        <button type="button" onClick={() => props.onLoadRepos()}>
          loadRepos
        </button>
      </header>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    name: state.name,
    loading: state.loading,
    error: state.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLoadRepos: () => {
      dispatch(loadRepos());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
