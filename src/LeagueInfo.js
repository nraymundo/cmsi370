import React, { useEffect, useState } from "react";

import "./react-tabs.css";
import "./LeagueInfo.css";

import {
  //   TeamFixtures,
  LeagueTable,
  //   FetchLeagueInfo,
  LeagueInfo
} from "./api.js";

const TeamInfo = props => {
  //   const { data } = props;
  //   const [fixtures, setFixtures] = useState({});
  const [table, setTable] = useState({});
  const [info, setInfo] = useState({});

  const fetchTable = async event => {
    try {
      const result = await LeagueTable({});
      setTable(result.data);
    } catch (e) {
      console.log(e);
    }
  };

  //   const fetchInfo = async event => {
  //     try {
  //       const result = await FetchLeagueInfo();
  //       setInfo(result);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };

  const fetchInfo = async event => {
    try {
      const result = await LeagueInfo();
      setInfo(result);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchTable();
    // fetchFixtures();
    fetchInfo();
  }, []);

  return (
    <div>
      {info.data && (
        <div className="League">
          <div className="LeagueHeader">
            <div className="LeagueName">
              <p>{info.data[0].api.leagues[0].name}</p>
            </div>
            <div className="LeagueInfo">
              <p>
                {info.data[0].api.leagues[0].country},{" "}
                {info.data[0].api.leagues[0].country_code}
              </p>
              <p>{info.data[0].api.leagues[0].season} Season</p>
            </div>
          </div>
          <div className="Teams">
            {table[0].api.standings[0].map(teams => (
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

export default TeamInfo;
