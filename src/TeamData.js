import React from "react";

// import './TeamData.css'
import "./TeamInfo.css";

const TeamData = props => {
  const { data } = props;
  return (
    <div className="Teams">
      <div className="TeamHeader">
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
    </div>
  );
};

export default TeamData;
