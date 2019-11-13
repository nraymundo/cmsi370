import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import "./react-tabs.css";
import "./TeamInfo.css";

import { teams } from "./teams.js";

import {
  TeamFixtures,
  LeagueTable,
  TeamStats
  // FetchTeamStats,
  // FetchLeagueTable
} from "./api.js";
// import { apiHost } from "./api";

const TeamInfo = props => {
  const { data } = props;
  const [fixtures, setFixtures] = useState({});
  const [table, setTable] = useState({});
  const [stats, setStats] = useState({});

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

  // const fetchTable = async event => {
  //   try {
  //     const result = await FetchLeagueTable();
  //     setTable(result);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  const fetchStats = async event => {
    try {
      const result = await TeamStats({});
      setStats(result.data);
    } catch (e) {
      console.log(e);
    }
  };

  // const fetchStats = async event => {
  //   try {
  //     const result = await FetchTeamStats();
  //     setStats(result);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  useEffect(() => {
    fetchTable();
    fetchFixtures();
    fetchStats();
  }, []);

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

      <div>
        <Tabs>
          <TabList>
            <Tab>Table</Tab>
            <Tab>Fixtures</Tab>
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
              <div className="TeamTableStats">
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
          <TabPanel className="TeamFixtures">
            <div className="FixturesTab">
              <div className="GameInfo">
                <table className="HomeTeam">
                  <tbody>
                    {fixtures[0] &&
                      fixtures[0].fixtures[0].goalsHomeTeam &&
                      fixtures[0].fixtures.map(teams => (
                        <tr>
                          <td>
                            <span>{teams.homeTeam.team_name}</span>
                            <img
                              src={teams.homeTeam.logo}
                              alt="logo"
                              id="HomeTeamIcon"
                            ></img>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
                <table className="Score">
                  <tbody>
                    {fixtures[0] &&
                      fixtures[0].fixtures[0].goalsHomeTeam &&
                      fixtures[0].fixtures.map(teams => (
                        <tr>
                          <td>
                            <span>
                              {teams.goalsHomeTeam +
                                " - " +
                                teams.goalsAwayTeam}
                            </span>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
                <table className="AwayTeam">
                  <tbody>
                    {fixtures[0] &&
                      fixtures[0].fixtures[0].goalsHomeTeam &&
                      fixtures[0].fixtures.map(teams => (
                        <tr>
                          <td>
                            <img
                              src={teams.awayTeam.logo}
                              alt="logo"
                              id="AwayTeamIcon"
                            ></img>
                            <span>{teams.awayTeam.team_name}</span>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </TabPanel>
          <TabPanel className="TeamStats">
            {stats[0] && (
              <div className="MainStats">
                <div id="TotalMatches">
                  <span>Matches played</span>
                  <span id="TotalPlayed">
                    {stats[0].api.statistics.matchs.matchsPlayed.total}
                  </span>
                </div>
                <div id="TotalWins">
                  <span>Wins</span>
                  <span id="Wins">
                    {stats[0].api.statistics.matchs.wins.total}
                  </span>
                </div>
                <div id="TotalLosses">
                  <span>Losses</span>
                  <span id="Losses">
                    {stats[0].api.statistics.matchs.loses.total}
                  </span>
                </div>
                <div id="TotalGoals">
                  <span>Goals</span>
                  <span id="Goals">
                    {stats[0].api.statistics.goals.goalsFor.total}
                  </span>
                </div>
                <div id="TotalGoalsConceded">
                  <span>Goals conceded</span>
                  <span id="GoalsConceded">
                    {stats[0].api.statistics.goals.goalsAgainst.total}
                  </span>
                </div>
              </div>
            )}
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default TeamInfo;
