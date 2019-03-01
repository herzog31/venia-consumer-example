import React, { Component } from "react";
import classes from "./App.css";
import Presentational from "./Presentational";

export default class App extends Component {
  render() {
    return (
        <div className={classes.app}>
          <header className={classes.header}>
            <h1 className={classes.title}>Imported Venia Components</h1>
          </header>
          <p className={classes.heading}>
            <code>ProductFullDetail</code> component displaying static
            data
          </p>
          <Presentational slug="el-gordo-down-jacket" />
        </div>
    );
  }
}
