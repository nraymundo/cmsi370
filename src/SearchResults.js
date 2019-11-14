import React from "react";

import "./SearchResults.css";

// import searchTeams from "./api.js";

import TeamData from "./TeamData";
import LeagueData from "./LeagueData";
// import LeagueInfo from "./LeagueInfo";

const SearchResults = props => (
  <div className="SearchResults">
    {/* {props.info.api.teams !== undefined
      ? props.info.api.teams.map(data => (
          <TeamData
            key={data.team_id}
            data={data}
            stats={props.stats}
            table={props.table}
            fixtures={props.fixtures}
          />
        ))
      : props.info.api.leagues.map(data => (
          <LeagueData key={data.league_id} data={data} table={props.table} />
        ))} */}
    {/* {props.info.api &&
      props.info.api.leagues.map(data => (
        <LeagueData key={data.league_id} data={data} table={props.table} />
      ))} */}
    {props.info.api &&
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

// const SearchResults = props => {
//   return (
//     <div className="SearchResults">
//       {/* {props.results.map(data => (
//         <LeagueInfo key={data.team_id} data={data} />
//       ))} */}

//       {props.results.map(data => (
//         <TeamInfo key={data.team_id} data={data} />
//       ))}
//     </div>
//   );
// };

export default SearchResults;
