import React from "react";
import ReactDOM from "react-dom";
import TestRenderer from "react-test-renderer";
import ReactTestUtils from "react-dom/test-utils";

import sinon from "sinon";

import LeagueData from "./LeagueData";

import * as api from "./api";

it("should render LeagueData", () => {
  const component = TestRenderer.create(
    <LeagueData
      key={524}
      data={
          {
            league_id: 524,
            name: "Premier League",
            type: "League",
            country: "England",
            country_code: "GB",
            season: 2019,
            season_start: "2019-08-09",
            season_end: "2020-05-17",
            logo: "https://media.api-football.com/leagues/2.png",
            flag: "https://media.api-football.com/flags/gb.svg",
            standings: 1,
            is_current: 1,
            coverage: {
              standings: true,
              fixtures: {
                events: true,
                lineups: true,
                statistics: true,
                players_statistics: true
              },
              players: true,
              topScorers: true,
              predictions: true,
              odds: true
            }
          }
      }
      table={
        [
            [
                {
                    "rank": 1,
                    "team_id": 40,
                    "teamName": "Liverpool",
                    "logo": "https://media.api-football.com/teams/40.png",
                    "group": "Premier League",
                    "forme": "WWWDW",
                    "description": "Promotion - Champions League (Group Stage)",
                    "all": {
                        "matchsPlayed": 12,
                        "win": 11,
                        "draw": 1,
                        "lose": 0,
                        "goalsFor": 28,
                        "goalsAgainst": 10
                    },
                    "home": {
                        "matchsPlayed": 6,
                        "win": 6,
                        "draw": 0,
                        "lose": 0,
                        "goalsFor": 17,
                        "goalsAgainst": 6
                    },
                    "away": {
                        "matchsPlayed": 6,
                        "win": 5,
                        "draw": 1,
                        "lose": 0,
                        "goalsFor": 11,
                        "goalsAgainst": 4
                    },
                    "goalsDiff": 18,
                    "points": 34,
                    "lastUpdate": "2019-11-10"
                },
                {
                    "rank": 2,
                    "team_id": 46,
                    "teamName": "Leicester",
                    "logo": "https://media.api-football.com/teams/46.png",
                    "group": "Premier League",
                    "forme": "WWWWL",
                    "description": "Promotion - Champions League (Group Stage)",
                    "all": {
                        "matchsPlayed": 12,
                        "win": 8,
                        "draw": 2,
                        "lose": 2,
                        "goalsFor": 29,
                        "goalsAgainst": 8
                    },
                    "home": {
                        "matchsPlayed": 6,
                        "win": 5,
                        "draw": 1,
                        "lose": 0,
                        "goalsFor": 14,
                        "goalsAgainst": 3
                    },
                    "away": {
                        "matchsPlayed": 6,
                        "win": 3,
                        "draw": 1,
                        "lose": 2,
                        "goalsFor": 15,
                        "goalsAgainst": 5
                    },
                    "goalsDiff": 21,
                    "points": 26,
                    "lastUpdate": "2019-11-10"
                },
                {
                    "rank": 3,
                    "team_id": 49,
                    "teamName": "Chelsea",
                    "logo": "https://media.api-football.com/teams/49.png",
                    "group": "Premier League",
                    "forme": "WWWWW",
                    "description": "Promotion - Champions League (Group Stage)",
                    "all": {
                        "matchsPlayed": 12,
                        "win": 8,
                        "draw": 2,
                        "lose": 2,
                        "goalsFor": 27,
                        "goalsAgainst": 17
                    },
                    "home": {
                        "matchsPlayed": 6,
                        "win": 3,
                        "draw": 2,
                        "lose": 1,
                        "goalsFor": 9,
                        "goalsAgainst": 5
                    },
                    "away": {
                        "matchsPlayed": 6,
                        "win": 5,
                        "draw": 0,
                        "lose": 1,
                        "goalsFor": 18,
                        "goalsAgainst": 12
                    },
                    "goalsDiff": 10,
                    "points": 26,
                    "lastUpdate": "2019-11-10"
                },
                {
                    "rank": 4,
                    "team_id": 50,
                    "teamName": "Manchester City",
                    "logo": "https://media.api-football.com/teams/50.png",
                    "group": "Premier League",
                    "forme": "LWWWL",
                    "description": "Promotion - Champions League (Group Stage)",
                    "all": {
                        "matchsPlayed": 12,
                        "win": 8,
                        "draw": 1,
                        "lose": 3,
                        "goalsFor": 35,
                        "goalsAgainst": 13
                    },
                    "home": {
                        "matchsPlayed": 6,
                        "win": 4,
                        "draw": 1,
                        "lose": 1,
                        "goalsFor": 19,
                        "goalsAgainst": 5
                    },
                    "away": {
                        "matchsPlayed": 6,
                        "win": 4,
                        "draw": 0,
                        "lose": 2,
                        "goalsFor": 16,
                        "goalsAgainst": 8
                    },
                    "goalsDiff": 22,
                    "points": 25,
                    "lastUpdate": "2019-11-10"
                },
                {
                    "rank": 5,
                    "team_id": 62,
                    "teamName": "Sheffield Utd",
                    "logo": "https://media.api-football.com/teams/62.png",
                    "group": "Premier League",
                    "forme": "DWDWD",
                    "description": "Promotion - Europa League (Group Stage)",
                    "all": {
                        "matchsPlayed": 12,
                        "win": 4,
                        "draw": 5,
                        "lose": 3,
                        "goalsFor": 13,
                        "goalsAgainst": 9
                    },
                    "home": {
                        "matchsPlayed": 6,
                        "win": 3,
                        "draw": 0,
                        "lose": 3,
                        "goalsFor": 6,
                        "goalsAgainst": 4
                    },
                    "away": {
                        "matchsPlayed": 6,
                        "win": 1,
                        "draw": 5,
                        "lose": 0,
                        "goalsFor": 7,
                        "goalsAgainst": 5
                    },
                    "goalsDiff": 4,
                    "points": 17,
                    "lastUpdate": "2019-11-10"
                },
                {
                    "rank": 6,
                    "team_id": 42,
                    "teamName": "Arsenal",
                    "logo": "https://media.api-football.com/teams/42.png",
                    "group": "Premier League",
                    "forme": "LDDLW",
                    "description": null,
                    "all": {
                        "matchsPlayed": 12,
                        "win": 4,
                        "draw": 5,
                        "lose": 3,
                        "goalsFor": 16,
                        "goalsAgainst": 17
                    },
                    "home": {
                        "matchsPlayed": 6,
                        "win": 3,
                        "draw": 3,
                        "lose": 0,
                        "goalsFor": 11,
                        "goalsAgainst": 8
                    },
                    "away": {
                        "matchsPlayed": 6,
                        "win": 1,
                        "draw": 2,
                        "lose": 3,
                        "goalsFor": 5,
                        "goalsAgainst": 9
                    },
                    "goalsDiff": -1,
                    "points": 17,
                    "lastUpdate": "2019-11-10"
                },
                {
                    "rank": 7,
                    "team_id": 33,
                    "teamName": "Manchester United",
                    "logo": "https://media.api-football.com/teams/33.png",
                    "group": "Premier League",
                    "forme": "WLWDL",
                    "description": null,
                    "all": {
                        "matchsPlayed": 12,
                        "win": 4,
                        "draw": 4,
                        "lose": 4,
                        "goalsFor": 16,
                        "goalsAgainst": 12
                    },
                    "home": {
                        "matchsPlayed": 6,
                        "win": 3,
                        "draw": 2,
                        "lose": 1,
                        "goalsFor": 11,
                        "goalsAgainst": 5
                    },
                    "away": {
                        "matchsPlayed": 6,
                        "win": 1,
                        "draw": 2,
                        "lose": 3,
                        "goalsFor": 5,
                        "goalsAgainst": 7
                    },
                    "goalsDiff": 4,
                    "points": 16,
                    "lastUpdate": "2019-11-10"
                },
                {
                    "rank": 8,
                    "team_id": 39,
                    "teamName": "Wolves",
                    "logo": "https://media.api-football.com/teams/39.png",
                    "group": "Premier League",
                    "forme": "WDDDW",
                    "description": null,
                    "all": {
                        "matchsPlayed": 12,
                        "win": 3,
                        "draw": 7,
                        "lose": 2,
                        "goalsFor": 16,
                        "goalsAgainst": 15
                    },
                    "home": {
                        "matchsPlayed": 6,
                        "win": 2,
                        "draw": 3,
                        "lose": 1,
                        "goalsFor": 9,
                        "goalsAgainst": 9
                    },
                    "away": {
                        "matchsPlayed": 6,
                        "win": 1,
                        "draw": 4,
                        "lose": 1,
                        "goalsFor": 7,
                        "goalsAgainst": 6
                    },
                    "goalsDiff": 1,
                    "points": 16,
                    "lastUpdate": "2019-11-10"
                },
                {
                    "rank": 9,
                    "team_id": 35,
                    "teamName": "Bournemouth",
                    "logo": "https://media.api-football.com/teams/35.png",
                    "group": "Premier League",
                    "forme": "LWDDL",
                    "description": null,
                    "all": {
                        "matchsPlayed": 12,
                        "win": 4,
                        "draw": 4,
                        "lose": 4,
                        "goalsFor": 15,
                        "goalsAgainst": 15
                    },
                    "home": {
                        "matchsPlayed": 6,
                        "win": 2,
                        "draw": 3,
                        "lose": 1,
                        "goalsFor": 8,
                        "goalsAgainst": 7
                    },
                    "away": {
                        "matchsPlayed": 6,
                        "win": 2,
                        "draw": 1,
                        "lose": 3,
                        "goalsFor": 7,
                        "goalsAgainst": 8
                    },
                    "goalsDiff": 0,
                    "points": 16,
                    "lastUpdate": "2019-11-10"
                },
                {
                    "rank": 10,
                    "team_id": 44,
                    "teamName": "Burnley",
                    "logo": "https://media.api-football.com/teams/44.png",
                    "group": "Premier League",
                    "forme": "WLLLW",
                    "description": null,
                    "all": {
                        "matchsPlayed": 12,
                        "win": 4,
                        "draw": 3,
                        "lose": 5,
                        "goalsFor": 17,
                        "goalsAgainst": 18
                    },
                    "home": {
                        "matchsPlayed": 6,
                        "win": 4,
                        "draw": 0,
                        "lose": 2,
                        "goalsFor": 11,
                        "goalsAgainst": 7
                    },
                    "away": {
                        "matchsPlayed": 6,
                        "win": 0,
                        "draw": 3,
                        "lose": 3,
                        "goalsFor": 6,
                        "goalsAgainst": 11
                    },
                    "goalsDiff": -1,
                    "points": 15,
                    "lastUpdate": "2019-11-10"
                },
                {
                    "rank": 11,
                    "team_id": 51,
                    "teamName": "Brighton",
                    "logo": "https://media.api-football.com/teams/51.png",
                    "group": "Premier League",
                    "forme": "LWWLW",
                    "description": null,
                    "all": {
                        "matchsPlayed": 12,
                        "win": 4,
                        "draw": 3,
                        "lose": 5,
                        "goalsFor": 15,
                        "goalsAgainst": 17
                    },
                    "home": {
                        "matchsPlayed": 6,
                        "win": 3,
                        "draw": 2,
                        "lose": 1,
                        "goalsFor": 10,
                        "goalsAgainst": 6
                    },
                    "away": {
                        "matchsPlayed": 6,
                        "win": 1,
                        "draw": 1,
                        "lose": 4,
                        "goalsFor": 5,
                        "goalsAgainst": 11
                    },
                    "goalsDiff": -2,
                    "points": 15,
                    "lastUpdate": "2019-11-10"
                },
                {
                    "rank": 12,
                    "team_id": 52,
                    "teamName": "Crystal Palace",
                    "logo": "https://media.api-football.com/teams/52.png",
                    "group": "Premier League",
                    "forme": "LLDLW",
                    "description": null,
                    "all": {
                        "matchsPlayed": 12,
                        "win": 4,
                        "draw": 3,
                        "lose": 5,
                        "goalsFor": 10,
                        "goalsAgainst": 16
                    },
                    "home": {
                        "matchsPlayed": 6,
                        "win": 2,
                        "draw": 2,
                        "lose": 2,
                        "goalsFor": 4,
                        "goalsAgainst": 5
                    },
                    "away": {
                        "matchsPlayed": 6,
                        "win": 2,
                        "draw": 1,
                        "lose": 3,
                        "goalsFor": 6,
                        "goalsAgainst": 11
                    },
                    "goalsDiff": -6,
                    "points": 15,
                    "lastUpdate": "2019-11-10"
                },
                {
                    "rank": 13,
                    "team_id": 34,
                    "teamName": "Newcastle",
                    "logo": "https://media.api-football.com/teams/34.png",
                    "group": "Premier League",
                    "forme": "WWDLW",
                    "description": null,
                    "all": {
                        "matchsPlayed": 12,
                        "win": 4,
                        "draw": 3,
                        "lose": 5,
                        "goalsFor": 11,
                        "goalsAgainst": 18
                    },
                    "home": {
                        "matchsPlayed": 6,
                        "win": 2,
                        "draw": 3,
                        "lose": 1,
                        "goalsFor": 5,
                        "goalsAgainst": 4
                    },
                    "away": {
                        "matchsPlayed": 6,
                        "win": 2,
                        "draw": 0,
                        "lose": 4,
                        "goalsFor": 6,
                        "goalsAgainst": 14
                    },
                    "goalsDiff": -7,
                    "points": 15,
                    "lastUpdate": "2019-11-10"
                },
                {
                    "rank": 14,
                    "team_id": 47,
                    "teamName": "Tottenham",
                    "logo": "https://media.api-football.com/teams/47.png",
                    "group": "Premier League",
                    "forme": "DDLDL",
                    "description": null,
                    "all": {
                        "matchsPlayed": 12,
                        "win": 3,
                        "draw": 5,
                        "lose": 4,
                        "goalsFor": 18,
                        "goalsAgainst": 17
                    },
                    "home": {
                        "matchsPlayed": 6,
                        "win": 3,
                        "draw": 2,
                        "lose": 1,
                        "goalsFor": 11,
                        "goalsAgainst": 5
                    },
                    "away": {
                        "matchsPlayed": 6,
                        "win": 0,
                        "draw": 3,
                        "lose": 3,
                        "goalsFor": 7,
                        "goalsAgainst": 12
                    },
                    "goalsDiff": 1,
                    "points": 14,
                    "lastUpdate": "2019-11-10"
                },
                {
                    "rank": 15,
                    "team_id": 45,
                    "teamName": "Everton",
                    "logo": "https://media.api-football.com/teams/45.png",
                    "group": "Premier League",
                    "forme": "WDLWL",
                    "description": null,
                    "all": {
                        "matchsPlayed": 12,
                        "win": 4,
                        "draw": 2,
                        "lose": 6,
                        "goalsFor": 13,
                        "goalsAgainst": 18
                    },
                    "home": {
                        "matchsPlayed": 6,
                        "win": 3,
                        "draw": 1,
                        "lose": 2,
                        "goalsFor": 8,
                        "goalsAgainst": 8
                    },
                    "away": {
                        "matchsPlayed": 6,
                        "win": 1,
                        "draw": 1,
                        "lose": 4,
                        "goalsFor": 5,
                        "goalsAgainst": 10
                    },
                    "goalsDiff": -5,
                    "points": 14,
                    "lastUpdate": "2019-11-10"
                },
                {
                    "rank": 16,
                    "team_id": 48,
                    "teamName": "West Ham",
                    "logo": "https://media.api-football.com/teams/48.png",
                    "group": "Premier League",
                    "forme": "LLDLL",
                    "description": null,
                    "all": {
                        "matchsPlayed": 12,
                        "win": 3,
                        "draw": 4,
                        "lose": 5,
                        "goalsFor": 14,
                        "goalsAgainst": 20
                    },
                    "home": {
                        "matchsPlayed": 6,
                        "win": 2,
                        "draw": 1,
                        "lose": 3,
                        "goalsFor": 8,
                        "goalsAgainst": 11
                    },
                    "away": {
                        "matchsPlayed": 6,
                        "win": 1,
                        "draw": 3,
                        "lose": 2,
                        "goalsFor": 6,
                        "goalsAgainst": 9
                    },
                    "goalsDiff": -6,
                    "points": 13,
                    "lastUpdate": "2019-11-10"
                },
                {
                    "rank": 17,
                    "team_id": 66,
                    "teamName": "Aston Villa",
                    "logo": "https://media.api-football.com/teams/66.png",
                    "group": "Premier League",
                    "forme": "LLLWW",
                    "description": null,
                    "all": {
                        "matchsPlayed": 12,
                        "win": 3,
                        "draw": 2,
                        "lose": 7,
                        "goalsFor": 17,
                        "goalsAgainst": 20
                    },
                    "home": {
                        "matchsPlayed": 6,
                        "win": 2,
                        "draw": 2,
                        "lose": 2,
                        "goalsFor": 8,
                        "goalsAgainst": 7
                    },
                    "away": {
                        "matchsPlayed": 6,
                        "win": 1,
                        "draw": 0,
                        "lose": 5,
                        "goalsFor": 9,
                        "goalsAgainst": 13
                    },
                    "goalsDiff": -3,
                    "points": 11,
                    "lastUpdate": "2019-11-10"
                },
                {
                    "rank": 18,
                    "team_id": 38,
                    "teamName": "Watford",
                    "logo": "https://media.api-football.com/teams/38.png",
                    "group": "Premier League",
                    "forme": "WLDDD",
                    "description": "Relegation - Championship",
                    "all": {
                        "matchsPlayed": 12,
                        "win": 1,
                        "draw": 5,
                        "lose": 6,
                        "goalsFor": 8,
                        "goalsAgainst": 23
                    },
                    "home": {
                        "matchsPlayed": 6,
                        "win": 0,
                        "draw": 3,
                        "lose": 3,
                        "goalsFor": 4,
                        "goalsAgainst": 10
                    },
                    "away": {
                        "matchsPlayed": 6,
                        "win": 1,
                        "draw": 2,
                        "lose": 3,
                        "goalsFor": 4,
                        "goalsAgainst": 13
                    },
                    "goalsDiff": -15,
                    "points": 8,
                    "lastUpdate": "2019-11-10"
                },
                {
                    "rank": 19,
                    "team_id": 41,
                    "teamName": "Southampton",
                    "logo": "https://media.api-football.com/teams/41.png",
                    "group": "Premier League",
                    "forme": "LLLDL",
                    "description": "Relegation - Championship",
                    "all": {
                        "matchsPlayed": 12,
                        "win": 2,
                        "draw": 2,
                        "lose": 8,
                        "goalsFor": 11,
                        "goalsAgainst": 29
                    },
                    "home": {
                        "matchsPlayed": 6,
                        "win": 0,
                        "draw": 1,
                        "lose": 5,
                        "goalsFor": 5,
                        "goalsAgainst": 21
                    },
                    "away": {
                        "matchsPlayed": 6,
                        "win": 2,
                        "draw": 1,
                        "lose": 3,
                        "goalsFor": 6,
                        "goalsAgainst": 8
                    },
                    "goalsDiff": -18,
                    "points": 8,
                    "lastUpdate": "2019-11-10"
                },
                {
                    "rank": 20,
                    "team_id": 71,
                    "teamName": "Norwich",
                    "logo": "https://media.api-football.com/teams/71.png",
                    "group": "Premier League",
                    "forme": "LLLDL",
                    "description": "Relegation - Championship",
                    "all": {
                        "matchsPlayed": 12,
                        "win": 2,
                        "draw": 1,
                        "lose": 9,
                        "goalsFor": 11,
                        "goalsAgainst": 28
                    },
                    "home": {
                        "matchsPlayed": 6,
                        "win": 2,
                        "draw": 0,
                        "lose": 4,
                        "goalsFor": 10,
                        "goalsAgainst": 16
                    },
                    "away": {
                        "matchsPlayed": 6,
                        "win": 0,
                        "draw": 1,
                        "lose": 5,
                        "goalsFor": 1,
                        "goalsAgainst": 12
                    },
                    "goalsDiff": -17,
                    "points": 7,
                    "lastUpdate": "2019-11-10"
                }
            ]
        ]
      }
    />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
