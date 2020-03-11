import React, { Component } from "react";

// Components
import AuthorCard from "./AuthorCard";


class AuthorList extends Component {
  state = {
    authors: this.props.authors
  };


  render() {
    const authorCards = this.state.authors.map(author => (
      <AuthorCard
        key={author.first_name + author.last_name}
        author={author}
        selectAuthor={this.props.selectAuthor}
      />
    ));
    return (
      <div className="authors">
        <h3>Authors</h3>
        <div className="row">{authorCards}</div>
      </div>
    );
  }
}

export default AuthorList;