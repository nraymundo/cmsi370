import React, { useEffect, useState } from "react";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./react-tabs.css";

import "./LeagueInfo.css";

import {
  TeamFixtures,
  LeagueTable,
  FetchLeagueInfo,
  LeagueInfo
} from "./api.js";
// import { apiHost } from "./api";

// import TeamStats from "./TeamStats";

// import React, { Component } from "react";
// import Button from "./Button"; // Import a component from another file
// class DangerButton extends Component {
//   render() {
//     return <Button color="red" />;
//   }
// }

// JSON.parse(JSON.stringify(yourjson).replace(/null/g, '""'));

const TeamInfo = props => {
  const { data } = props;
  const [fixtures, setFixtures] = useState({});
  const [table, setTable] = useState({});
  const [info, setInfo] = useState({});

  // const mappingFunction = p => p.team_name;
  // if (fixtures[0] != undefined) {
  //   const names = (fixtures[0] && fixtures[0].fixtures[0].homeTeam).map(
  //     mappingFunction
  //   );
  //   console.log(names);
  // }

  const fetchFixtures = async event => {
    try {
      const result = await TeamFixtures({});
      setFixtures(result.data);
    } catch (e) {
      console.log(e);
    }
  };

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
    fetchFixtures();
    fetchInfo();
  }, []);

  return (
    <div className="League">
      {info.data && (
        <div className="LeagueHeader">
          <div className="LeagueName">
            <p>{info.data[0].api.leagues[0].name}</p>
          </div>
          <div className="LeagueInfo">
            <p>
              {info.data[0].api.leagues[0].country},{" "}
              {info.data[0].api.leagues[0].country_code}
            </p>
            <p>{info.data[0].api.leagues[0].season}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamInfo;
