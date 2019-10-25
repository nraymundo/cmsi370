import React from "react";

import "./SearchResults.css";

// import searchTeams from "./api.js";

import TeamInfo from "./TeamInfo";
// import TeamStats from "./TeamStats";

const SearchResults = props => {
  return (
    <div className="SearchResults">
      {props.results.map(data => (
        <TeamInfo key={data.team_id} data={data} />
      ))}

      {/* {props.content.map(data => (
        <TeamStats key={data.matchs} data={data} />
      ))} */}
    </div>
  );
};

export default SearchResults;
