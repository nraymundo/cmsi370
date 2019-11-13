import React, { useState } from "react";
import Dropdown from "react-dropdown";
// import { Dropdown, DropdownButton } from "react-bootstrap";

import "./dropdown.css";
import "./SearchForm.css";

import SearchResults from "./SearchResults";

import { searchTeams } from "./api";
import { teams } from "./teams.js";
import { leagues } from "./leagues.js";

// const options = ["Category", "Team", "League"];
// const defaultOption = options[0];

function getTeamId(search) {
  if (search.toUpperCase() in teams) {
    let team = search.toUpperCase();
    return "/teams/team/" + teams[team].team_id;
  } else if (search.toUpperCase() in leagues) {
    let league = search.toUpperCase();
    return "/leagues/league/" + leagues[league];
  } else {
    return 0;
  }
}

function getLeagueId(search) {
  let team = search.toUpperCase();
  return teams[team].league_id + "/";
}

const SearchForm = () => {
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");
  const [teamLeagueInfo, setData] = useState([]);
  const [teamStats, setStats] = useState({});

  const handleQueryChange = event => setQuery(event.target.value);
  // const handleTypeChange = event => setType(event.target.value);

  const performQuery = async event => {
    event.preventDefault();

    setError(null);

    try {
      const result = await searchTeams({
        q: getTeamId(query)
      });

      setData(result);
    } catch (error) {
      console.log("error", error);
      setError("Sorry, that team or league doesn't exist.");
    }

    try {
      const result = await searchTeams({
        team: getTeamId(query),
        league: getLeagueId(query)
      });
      setStats(result.data);
    } catch (e) {
      console.log(e);
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
          autoComplete="off"
          value={query}
          onChange={handleQueryChange}
          placeholder={"Search"}
        />
        <button id="searchButton" type="submit" disabled={!query}>
          Search
        </button>
      </div>

      {error && <div className="error">{error}</div>}

      <SearchResults info={teamLeagueInfo} stats={teamStats} />
    </form>
  );
};

export default SearchForm;
