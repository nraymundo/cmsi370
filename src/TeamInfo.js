import React, { useEffect, useState } from "react";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./react-tabs.css";

import "./TeamInfo.css";

import { TeamFixtures, LeagueTable } from "./api.js";
// import { apiHost } from "./api";

// import TeamStats from "./TeamStats";

// import React, { Component } from "react";
// import Button from "./Button"; // Import a component from another file
// class DangerButton extends Component {
//   render() {
//     return <Button color="red" />;
//   }
// }

const TeamInfo = props => {
  const { data } = props;
  const [fixtures, setFixtures] = useState({});
  const [Table, setTable] = useState({});

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

  useEffect(() => {
    fetchTable();
    fetchFixtures();
  }, []);

  // Object.keys(myObject).map(function(key, index) {
  //   myObject[key] *= 2;
  // });

  // console.log(fixtures[0] && fixtures[0].fixtures);
  // console.log(Table[0] && Table[0].api.standings[0]);

  // const PrintTable = Table[0]
  //   ? Table[0].api.standings[0].map(teams => (
  //       <div className="TableContent">
  //         <span>{teams.rank + " "}</span>
  //         <span>{teams.teamName + " "}</span>
  //         {/* <span>{teams.rank + " " + teams.teamName + " "}</span> */}
  //         <span>{teams.all.matchsPlayed + " "}</span>
  //         <span>{teams.all.win + " "}</span>
  //         <span>{teams.all.draw + " "}</span>
  //         <span>{teams.all.lose + " "}</span>
  //         <span>{teams.all.goalsFor + " "}</span>
  //         <span>{teams.all.goalsAgainst + " "}</span>
  //         <span>{teams.goalsDiff + " "}</span>
  //         <span>{teams.points + " "}</span>
  //         {/* <span>
  //           {teams.all.matchsPlayed +
  //             " " +
  //             teams.all.win +
  //             " " +
  //             teams.all.draw +
  //             " " +
  //             teams.all.lose +
  //             " " +
  //             teams.all.goalsFor +
  //             " " +
  //             teams.all.goalsAgainst +
  //             " " +
  //             teams.goalsDiff +
  //             " " +
  //             teams.points}
  //         </span> */}
  //       </div>
  //     ))
  //   : "";

  // const PrintTable = Table[0]
  //   ? Table[0].api.standings[0].map(teams => (
  //     ))
  //   : "";

  const PrintFixtures = fixtures[0]
    ? fixtures[0].fixtures.map(teams => (
        <span>{teams.homeTeam.team_name + " " + teams.awayTeam.team_name}</span>
      ))
    : "";

  // const whatever = fixtures[0]
  //   ? Object.keys(fixtures[0].fixtures[0].homeTeam).map(team_name => (
  //       <span>hello, {fixtures[0].fixtures[0].homeTeam.team_name}</span>
  //     ))
  //   : "";

  // console.log(data);
  return (
    <div className="Teams">
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

      <div>
        <Tabs>
          <TabList>
            <Tab>Table</Tab>
            <Tab>Fixtures</Tab>
            <Tab>Results</Tab>
            <Tab>Stats</Tab>
          </TabList>

          <TabPanel className="LeagueTable">
            <div className="TableInfo">
              <table className="Positions">
                <tr>
                  <th>Position</th>
                </tr>
                {Table[0] &&
                  Table[0].api.standings[0].map(teams => (
                    <tr>
                      <td>{teams.rank}</td>
                    </tr>
                  ))}
              </table>
              <table className="Clubs">
                <tr>
                  <th>Club</th>
                </tr>
                {Table[0] &&
                  Table[0].api.standings[0].map(teams => (
                    <tr>
                      <td>{teams.teamName}</td>
                    </tr>
                  ))}
              </table>
              {/* <table id="Position">
                <tr>
                  <td>Position</td>
                </tr>
              </table> */}
              {/* <table>
                
              </table>
              <table>
                
              </table> */}
              {/* <div className="PositionTeam">
                <span>Position</span>
                <span>Club</span>
              </div>
              <div className="TableStats">
                <span>Won</span>
                <span>Draw</span>
                <span>Lost</span>
                <span>GF</span>
                <span>GA</span>
                <span>GD</span>
                <span>Points</span>
              </div> */}
            </div>
            {/* {PrintTable} */}
          </TabPanel>
          <TabPanel className="LeagueFixtures">{PrintFixtures}</TabPanel>
          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default TeamInfo;
