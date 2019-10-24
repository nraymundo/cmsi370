import React from "react";

import "./SearchResults.css";

import TeamInfo from "./TeamInfo";

const SearchResults = props => (
  <div className="SearchResults">
    {props.results.map(data => (
      <TeamInfo key={image.id} image={image} />
    ))}
  </div>
);

export default SearchResults;
