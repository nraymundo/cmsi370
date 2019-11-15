import React, { useState } from "react";

import "./SearchForm.css";

import SearchResults from "./SearchResults";

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
    return search;
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
  } else {
    return search;
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

        const result2 = await returnTeamStats({
          league: getLeagueId(query),
          team: getId(query),
          category: "teamStats"
        });
        setStats(result2.api.statistics);

        const result3 = await returnLeagueTable({
          league: getLeagueId(query),
          category: "table"
        });
        setTable(result3.api.standings);

        const result4 = await returnTeamFixtures({
          team: getId(query),
          league: getLeagueId(query),
          category: "fixtures"
        });
        setFixtures(result4.api.fixtures);
      } catch (error) {
        console.log("we here");
        setError("Sorry, that team doesn't exist.");
      }
    } else if (checkCategory(query) === "League") {
      try {
        const result = await searchLeagues({
          league: getId(query),
          category: "league"
        });
        setLeague(result);

        const result2 = await returnLeagueTable({
          league: getId(query),
          category: "table"
        });
        setTable(result2.api.standings);
      } catch (error) {
        setError("Sorry, that league doesn't exist.");
      }
    } else {
      setError("Sorry, that team doesn't exist.");
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
          placeholder={"Team or league"}
        />
        <button id="searchButton" type="submit" disabled={!query}>
          Search
        </button>
      </div>

      {error && <div className="error">{error}</div>}

      {teamInfo.length === 0 ? (
        <SearchResults info={leagueInfo} table={leagueTable} />
      ) : (
        <SearchResults
          info={teamInfo}
          stats={teamStats}
          table={leagueTable}
          fixtures={teamFixtures}
        />
      )}
    </form>
  );
};

export default SearchForm;
