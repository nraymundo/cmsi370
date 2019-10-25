import React, { useEffect, useState } from "react";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./react-tabs.css";

import "./TeamInfo.css";

import { TeamFixtures, LeagueTable, TeamStats } from "./api.js";
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
  const [table, setTable] = useState({});
  const [stats, setStats] = useState({});

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

  const fetchStats = async event => {
    try {
      const result = await TeamStats({});
      setStats(result.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchTable();
    fetchFixtures();
    fetchStats();
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
              <div className="PositionTeam">
                <table className="Positions">
                  <thead>
                    <tr>
                      <th>Position</th>
                    </tr>
                  </thead>
                  <tbody>
                    {table[0] &&
                      table[0].api.standings[0].map(teams => (
                        <tr>
                          <td>{teams.rank}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
                <table className="Clubs">
                  <thead>
                    <tr>
                      <th>Club</th>
                    </tr>
                  </thead>
                  <tbody>
                    {table[0] &&
                      table[0].api.standings[0].map(teams => (
                        <tr>
                          <td>{teams.teamName}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>

              <div className="TeamStats">
                <table className="Won">
                  <thead>
                    <tr>
                      <th>Won</th>
                    </tr>
                  </thead>
                  <tbody>
                    {table[0] &&
                      table[0].api.standings[0].map(teams => (
                        <tr>
                          <td>{teams.all.win}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
                <table className="Drawn">
                  <thead>
                    <tr>
                      <th>Drawn</th>
                    </tr>
                  </thead>
                  <tbody>
                    {table[0] &&
                      table[0].api.standings[0].map(teams => (
                        <tr>
                          <td>{teams.all.draw}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
                <table className="Lost">
                  <thead>
                    <tr>
                      <th>Lost</th>
                    </tr>
                  </thead>
                  <tbody>
                    {table[0] &&
                      table[0].api.standings[0].map(teams => (
                        <tr>
                          <td>{teams.all.lose}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
                <table className="GoalsFor">
                  <thead>
                    <tr>
                      <th>GF</th>
                    </tr>
                  </thead>
                  <tbody>
                    {table[0] &&
                      table[0].api.standings[0].map(teams => (
                        <tr>
                          <td>{teams.all.goalsFor}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
                <table className="GoalsAgainst">
                  <thead>
                    <tr>
                      <th>GA</th>
                    </tr>
                  </thead>
                  <tbody>
                    {table[0] &&
                      table[0].api.standings[0].map(teams => (
                        <tr>
                          <td>{teams.all.goalsAgainst}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
                <table className="GoalDiff">
                  <thead>
                    <tr>
                      <th>GD</th>
                    </tr>
                  </thead>
                  <tbody>
                    {table[0] &&
                      table[0].api.standings[0].map(teams => (
                        <tr>
                          <td>{teams.goalsDiff}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
                <table className="Points">
                  <thead>
                    <tr>
                      <th>Points</th>
                    </tr>
                  </thead>
                  <tbody>
                    {table[0] &&
                      table[0].api.standings[0].map(teams => (
                        <tr>
                          <td>{teams.points}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
            {/* {PrintTable} */}
          </TabPanel>
          <TabPanel className="TeamFixtures">{PrintFixtures}</TabPanel>
          <TabPanel></TabPanel>
          <TabPanel className="TeamStats">
            {/* {stats[0] && console.log(stats[0])} */}
            {/* {console.log(stats[0] && stats[0].api.statistics)} */}
            <div className="MainStats">
              {stats[0] &&
                stats.map(teams => (
                  <div></div>
                  <span>{teams.api.statistics.goalsAvg.goalsFor.total}</span>
                ))}
            </div>
            {/* {table[0] &&
              table[0].api.standings[0].map(teams => (
                <tr>
                  <td>{teams.rank}</td>
                </tr>
              ))} */}
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default TeamInfo;
