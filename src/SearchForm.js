import React, { useState } from "react";
// import Dropdown from "react-dropdown";
// import { Dropdown, DropdownButton } from "react-bootstrap";

import "./dropdown.css";
import "./SearchForm.css";

import SearchResults from "./SearchResults";
import teamList from "./teams.js";

import {
  searchTeams,
  searchLeagues,
  returnTeamStats,
  returnLeagueTable,
  returnTeamFixtures
} from "./api";
import { teams } from "./teams.js";
import { leagues } from "./leagues.js";

function getId(search) {
  if (search.toUpperCase() in teams) {
    let team = search.toUpperCase();
    return teams[team].team_id;
  } else if (search.toUpperCase() in leagues) {
    let league = search.toUpperCase();
    return leagues[league];
  } else {
    return 0;
  }
}

function getLeagueId(search) {
  let team = search.toUpperCase();
  return teams[team].league_id;
}

function checkCategory(search) {
  if (search.toUpperCase() in teams) {
    return "Team";
  } else if (search.toUpperCase() in leagues) {
    return "League";
  }
}

const SearchForm = () => {
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");
  const [teamInfo, setTeam] = useState([]);
  const [leagueInfo, setLeague] = useState([]);
  const [teamStats, setStats] = useState([]);
  const [teamFixtures, setFixtures] = useState([]);
  const [leagueTable, setTable] = useState([]);

  const handleQueryChange = event => setQuery(event.target.value);

  const performQuery = async event => {
    event.preventDefault();

    setError(null);

    if (checkCategory(query) === "Team") {
      try {
        const result = await searchTeams({
          team: getId(query),
          category: "search"
        });
        setTeam(result);
      } catch (error) {
        console.log("error", error);
        setError("Sorry, that team doesn't exist.");
      }

      try {
        const result = await returnTeamStats({
          league: getLeagueId(query),
          team: getId(query),
          category: "teamStats"
        });
        setStats(result.api.statistics);
      } catch (e) {
        console.log(e);
      }

      try {
        const result = await returnLeagueTable({
          league: getLeagueId(query),
          category: "table"
        });
        setTable(result.api.standings);
      } catch (e) {
        console.log(e);
      }

      try {
        const result = await returnTeamFixtures({
          team: getId(query),
          league: getLeagueId(query),
          category: "fixtures"
        });
        setFixtures(result.api.fixtures);
      } catch (e) {
        console.log(e);
      }
    } else if (checkCategory(query) === "League") {
      try {
        const result = await searchLeagues({
          league: getId(query),
          category: "league"
        });
        setLeague(result);
      } catch (error) {
        console.log("error", error);
        setError("Sorry, that league doesn't exist.");
      }

      try {
        const result = await returnLeagueTable({
          league: getId(query),
          category: "table"
        });
        setTable(result.api.standings);
      } catch (e) {
        console.log(e);
      }
    }
    // console.log("Data: ", leagueInfo);
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

      {/* {teamInfo !== [] ? (
        <SearchResults
          info={teamInfo}
          stats={teamStats}
          table={leagueTable}
          fixtures={teamFixtures}
        />
      ) : (
        <SearchResults info={leagueInfo} table={leagueTable} />
      )} */}

      <SearchResults info={leagueInfo} table={leagueTable} />

      {/* <SearchResults
        info={teamInfo}
        stats={teamStats}
        table={leagueTable}
        fixtures={teamFixtures}
      /> */}
    </form>
  );
};

export default SearchForm;
