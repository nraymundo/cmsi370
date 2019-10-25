import React, { useState } from "react";

import "./SearchForm.css";

import SearchResults from "./SearchResults";

import { searchTeams } from "./api";

const SearchForm = () => {
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  // const [fixtures, setFixtures] = useState([]);

  const handleQueryChange = event => setQuery(event.target.value);

  const performQuery = async event => {
    event.preventDefault();

    setError(null);

    try {
      const result = await searchTeams({
        // rating: "pg-13",
        // q: query
      });

      // const fixtures = await teamFixtures({
      //   // rating: "pg-13",
      //   // q: query
      // });

      setImages(result.data);
      // setFixtures(fixtures.data);
    } catch (error) {
      setError("Sorry, but something went wrong.");
    }
  };

  return (
    <form className="SearchForm" onSubmit={performQuery}>
      {/* <p>Search Bar</p> */}

      <div className="SearchBar">
        <input
          id="search"
          name="query"
          type="text"
          value={query}
          onChange={handleQueryChange}
          placeholder={"Search"}
        />
        <button id="searchButton" type="submit" disabled={!query}>
          Search
        </button>
      </div>

      {error && <div className="error">{error}</div>}

      <SearchResults results={images} />
    </form>
  );
};

export default SearchForm;
