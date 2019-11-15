import React from "react";

import "./SearchResults.css";

import TeamData from "./TeamData";
import LeagueData from "./LeagueData";

const SearchResults = props => (
  <div className="SearchResults">
    {Object.keys(props).length === 2
      ? props.info.api &&
        props.info.api.leagues.map(data => (
          <LeagueData key={data.league_id} data={data} table={props.table} />
        ))
      : props.info.api &&
        props.info.api.teams.map(data => (
          <TeamData
            key={data.team_id}
            data={data}
            stats={props.stats}
            table={props.table}
            fixtures={props.fixtures}
          />
        ))}
  </div>
);

export default SearchResults;
