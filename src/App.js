import React, { Component } from "react";
// Data
import authors from "./data";

// Components
import Sidebar from "./Sidebar";
import AuthorDetail from "./AuthorDetail";
import AuthorsList from "./AuthorList";

class App extends Component {
  state = {
    currentAuthor: null
  };
  selectAuthor = author => {
    const newAuthor = author;
    this.setState({currentAuthor: newAuthor});
  };


  render() {
    return (
      <div id="app" className="container-fluid">
        <div className="row">
          <div className="col-2">
            <Sidebar />
          </div>
          <div className="content col-10">
            <AuthorsList authors={authors} selectAuthor={this.selectAuthor} />
            <AuthorDetail authors={authors} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;