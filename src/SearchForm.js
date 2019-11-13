import React, { useState } from "react";
import Dropdown from "react-dropdown";
// import { Dropdown, DropdownButton } from "react-bootstrap";

import "./dropdown.css";
import "./SearchForm.css";

import SearchResults from "./SearchResults";

import { searchTeams } from "./api";
import { teams } from "./teams.js";

const options = ["Category", "Team", "League"];
const defaultOption = options[0];

const SearchForm = () => {
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");
  const [type, setType] = useState("");
  const [data, setData] = useState([]);

  const handleQueryChange = event => setQuery(event.target.value);
  // const handleTypeChange = event => setType(event.target.value);

  const performQuery = async event => {
    event.preventDefault();

    setError(null);

    try {
      const result = await searchTeams({
        // category: type,
        query
      });
      setData(result.data);
    } catch (error) {
      setError("Something went wrong.");
    }
  };

  // try {
  //   const result = await searchTeamLiverpool({});
  //   setImages(result.data);
  // } catch (error) {
  //   setError("Sorry, but something went wrong.");
  // }

  return (
    <form className="SearchForm" onSubmit={performQuery}>
      {/* <p>Search Bar</p> */}

      <div className="SearchBar">
        <input
          id="search"
          name="query"
          type="text"
          autoComplete="off"
          value={query}
          onChange={handleQueryChange}
          placeholder={"Search"}
        />
        {/* <DropdownButton id="dropdown-basic-button" title="Dropdown button">
          <Dropdown.Item name="type" value={type} onClick={handleTypeChange}>
            Team
          </Dropdown.Item>
          <Dropdown.Item name="type" value={type} onClick={handleTypeChange}>
            League
          </Dropdown.Item>
        </DropdownButton> */}
        <Dropdown
          options={options}
          // name="type"
          // value={type}
          // onChange={handleTypeChange}
          placeholder="Category"
        />
        {/* <button onClick={console.log(type)}></button> */}
        <button id="searchButton" type="submit" disabled={!query}>
          Search
        </button>
      </div>

      {error && <div className="error">{error}</div>}

      <SearchResults results={data} />
    </form>
  );
};

export default SearchForm;
