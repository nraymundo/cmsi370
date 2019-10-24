import React from "react";

import "./TeamInfo.css";

const TeamInfo = props => {
  const { data } = props;
  // console.log(data);
  return (
    <div className="TeamInfo">
      <div className="Circle">
        <img src={data.logo} alt="blah" id="TeamLogo" />
      </div>
      <div className="TeamData">
        <p id="TeamName">{data.name}</p>
        <p>
          {data.venue_city}, {data.country}
        </p>
        <p>{data.venue_name}</p>
      </div>
    </div>
  );
};

export default TeamInfo;
