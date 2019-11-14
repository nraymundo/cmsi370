import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import "./react-tabs.css";
import "./LeagueData.css";

const TeamData = props => {
  const { data } = props;
  const { table } = props;
  return (
    <div>
      {data && (
        <div className="League">
          <div className="LeagueHeader">
            <div className="LeagueName">
              <p>{data.name}</p>
            </div>
            <div className="LeagueInfo">
              <p>
                {data.country}, {data.country_code}
              </p>
              <p>{data.season} Season</p>
            </div>
          </div>
          <div className="Teams">
            {Object.keys(table).length == 2}
            {table[0] &&
              table[0].map(teams => (
                <div className="TeamInfo">
                  <div>
                    <img src={teams.logo} alt="logo" className="TeamLogo"></img>
                  </div>
                  <div>{teams.rank}</div>
                  <div>{teams.teamName}</div>
                  <div>Points: {teams.points}</div>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamData;
