import React, { Component } from "react";

// Data
import authors from "./data";

// Components
import Sidebar from "./Sidebar";
import AuthorList from "./AuthorList";
import AuthorDetail from "./AuthorDetail";

class App extends Component {
  state = {
    currentAuthor: null
  };

  selectAuthor = author => {
    this.setState({ currentAuthor: author });
  };

  unselect = () => {
    this.setState({ currentAuthor: null });
  };
  render() {
    return (
      <div id="app" className="container-fluid">
        <div className="row">
          <div className="col-2">
            <Sidebar unselect={this.unselect} />
          </div>
          <div className="content col-10">
            {this.state.currentAuthor ? (
              <AuthorDetail author={this.state.currentAuthor} />
            ) : (
              <AuthorList authors={authors} selectAuthor={this.selectAuthor} />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;