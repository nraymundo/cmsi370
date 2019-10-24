import React from "react";

import "./SearchResults.css";

// import searchTeams from "./api.js";

import TeamInfo from "./TeamInfo";

const SearchResults = props => {
  // console.log(props);
  return (
    <div className="SearchResults">
      {props.results.map(data => {
        // console.log(data);
        // const image = {
        //   id: 5
        // };
        // return <TeamInfo key={image.id} image={image} />;
        return <TeamInfo key={data.team_id} data={data} />;
      })}
    </div>
  );
};

export default SearchResults;
