import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import "./react-tabs.css";
import "./TeamData.css";

const TeamData = props => {
  const { data } = props;
  const { stats } = props;
  const { table } = props;
  const { fixtures } = props;
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
                      table[0].map(teams => (
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
                      table[0].map(teams => (
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
                      table[0].map(teams => (
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
                      table[0].map(teams => (
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
                      table[0].map(teams => (
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
                      table[0].map(teams => (
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
                      table[0].map(teams => (
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
                      table[0].map(teams => (
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
                      table[0].map(teams => (
                        <tr>
                          <td>{teams.points}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </TabPanel>
          <TabPanel className="TeamFixtures">
            <div className="FixturesTab">
              <div className="GameInfo">
                <table className="HomeTeam">
                  <tbody>
                    {fixtures[0] &&
                      fixtures[0].goalsHomeTeam !== null &&
                      fixtures.map(teams => (
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
                      fixtures[0].goalsHomeTeam !== null &&
                      fixtures.map(teams => (
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
                      fixtures[0].goalsHomeTeam !== null &&
                      fixtures.map(teams => (
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
            {stats.matchs && (
              <div className="MainStats">
                <div id="TotalMatches">
                  <span>Matches played</span>
                  <span id="TotalPlayed">
                    {stats.matchs.matchsPlayed.total}
                  </span>
                </div>
                <div id="TotalWins">
                  <span>Wins</span>
                  <span id="Wins">{stats.matchs.wins.total}</span>
                </div>
                <div id="TotalLosses">
                  <span>Losses</span>
                  <span id="Losses">{stats.matchs.loses.total}</span>
                </div>
                <div id="TotalGoals">
                  <span>Goals</span>
                  <span id="Goals">{stats.goals.goalsFor.total}</span>
                </div>
                <div id="TotalGoalsConceded">
                  <span>Goals conceded</span>
                  <span id="GoalsConceded">
                    {stats.goals.goalsAgainst.total}
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

export default TeamData;
