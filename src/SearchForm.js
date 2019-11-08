import React, { useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";

import "./SearchForm.css";

import SearchResults from "./SearchResults";

import { searchTeams } from "./api";
import DropdownItem from "react-bootstrap/DropdownItem";

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
        {/* <Dropdown id="dropdownButton">
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Category
          </Dropdown.Toggle>

          <Dropdown.Menu class="dropdownContent">
            <Dropdown.Item id="dropdownContent1" href="#/action-1">
              Team
            </Dropdown.Item>
            <Dropdown.Item id="dropdownContent2" href="#/action-2">
              League
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown> */}
        <DropdownButton id="dropdownButton" title="Category">
          <Dropdown.Item as="button">Team</Dropdown.Item>
          <Dropdown.Item as="button">League</Dropdown.Item>
        </DropdownButton>
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
