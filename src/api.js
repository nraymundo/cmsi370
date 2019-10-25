const apiHost = () => {}; // No-op in our mock version.

const searchTeams = () =>
  Promise.resolve({
    data: [
      {
        team_id: 47,
        name: "Tottenham",
        code: null,
        logo: "https://media.api-football.com/teams/47.png",
        country: "England",
        founded: 1882,
        venue_name: "Tottenham Hotspur Stadium",
        venue_surface: "grass",
        venue_address: "Bill Nicholson Way, 748 High Road",
        venue_city: "London",
        venue_capacity: 62062
      }
    ]
  });

const TeamFixtures = () =>
Promise.resolve({
    data: [
        {
        "results": 38,
        "fixtures": [
            {
                "fixture_id": 157022,
                "league_id": 524,
                "event_date": "2019-08-10T16:30:00+00:00",
                "event_timestamp": 1565454600,
                "firstHalfStart": 1565454600,
                "secondHalfStart": 1565458200,
                "round": "Regular Season - 1",
                "status": "Match Finished",
                "statusShort": "FT",
                "elapsed": 90,
                "venue": "Tottenham Hotspur Stadium (London)",
                "referee": "Chris Kavanagh, England",
                "homeTeam": {
                    "team_id": 47,
                    "team_name": "Tottenham",
                    "logo": "https://media.api-football.com/teams/47.png"
                },
                "awayTeam": {
                    "team_id": 66,
                    "team_name": "Aston Villa",
                    "logo": "https://media.api-football.com/teams/66.png"
                },
                "goalsHomeTeam": 3,
                "goalsAwayTeam": 1,
                "score": {
                    "halftime": "0-1",
                    "fulltime": "3-1",
                    "extratime": null,
                    "penalty": null
                }
            },
            {
                "fixture_id": 157030,
                "league_id": 524,
                "event_date": "2019-08-17T16:30:00+00:00",
                "event_timestamp": 1566059400,
                "firstHalfStart": 1566059400,
                "secondHalfStart": 1566063000,
                "round": "Regular Season - 2",
                "status": "Match Finished",
                "statusShort": "FT",
                "elapsed": 90,
                "venue": "Etihad Stadium (Manchester)",
                "referee": "Michael Oliver, England",
                "homeTeam": {
                    "team_id": 50,
                    "team_name": "Manchester City",
                    "logo": "https://media.api-football.com/teams/50.png"
                },
                "awayTeam": {
                    "team_id": 47,
                    "team_name": "Tottenham",
                    "logo": "https://media.api-football.com/teams/47.png"
                },
                "goalsHomeTeam": 2,
                "goalsAwayTeam": 2,
                "score": {
                    "halftime": "2-1",
                    "fulltime": "2-2",
                    "extratime": null,
                    "penalty": null
                }
            },
            {
                "fixture_id": 157042,
                "league_id": 524,
                "event_date": "2019-08-25T15:30:00+00:00",
                "event_timestamp": 1566747000,
                "firstHalfStart": 1566747000,
                "secondHalfStart": 1566750600,
                "round": "Regular Season - 3",
                "status": "Match Finished",
                "statusShort": "FT",
                "elapsed": 90,
                "venue": "Tottenham Hotspur Stadium (London)",
                "referee": "Mike Dean, England",
                "homeTeam": {
                    "team_id": 47,
                    "team_name": "Tottenham",
                    "logo": "https://media.api-football.com/teams/47.png"
                },
                "awayTeam": {
                    "team_id": 34,
                    "team_name": "Newcastle",
                    "logo": "https://media.api-football.com/teams/34.png"
                },
                "goalsHomeTeam": 0,
                "goalsAwayTeam": 1,
                "score": {
                    "halftime": "0-1",
                    "fulltime": "0-1",
                    "extratime": null,
                    "penalty": null
                }
            },
            {
                "fixture_id": 157045,
                "league_id": 524,
                "event_date": "2019-09-01T15:30:00+00:00",
                "event_timestamp": 1567351800,
                "firstHalfStart": 1567351800,
                "secondHalfStart": 1567355400,
                "round": "Regular Season - 4",
                "status": "Match Finished",
                "statusShort": "FT",
                "elapsed": 90,
                "venue": "Emirates Stadium (London)",
                "referee": "Martin Atkinson, England",
                "homeTeam": {
                    "team_id": 42,
                    "team_name": "Arsenal",
                    "logo": "https://media.api-football.com/teams/42.png"
                },
                "awayTeam": {
                    "team_id": 47,
                    "team_name": "Tottenham",
                    "logo": "https://media.api-football.com/teams/47.png"
                },
                "goalsHomeTeam": 2,
                "goalsAwayTeam": 2,
                "score": {
                    "halftime": "1-2",
                    "fulltime": "2-2",
                    "extratime": null,
                    "penalty": null
                }
            },
            {
                "fixture_id": 157062,
                "league_id": 524,
                "event_date": "2019-09-14T14:00:00+00:00",
                "event_timestamp": 1568469600,
                "firstHalfStart": 1568469600,
                "secondHalfStart": 1568473200,
                "round": "Regular Season - 5",
                "status": "Match Finished",
                "statusShort": "FT",
                "elapsed": 90,
                "venue": "Tottenham Hotspur Stadium (London)",
                "referee": "Craig Pawson, England",
                "homeTeam": {
                    "team_id": 47,
                    "team_name": "Tottenham",
                    "logo": "https://media.api-football.com/teams/47.png"
                },
                "awayTeam": {
                    "team_id": 52,
                    "team_name": "Crystal Palace",
                    "logo": "https://media.api-football.com/teams/52.png"
                },
                "goalsHomeTeam": 4,
                "goalsAwayTeam": 0,
                "score": {
                    "halftime": "4-0",
                    "fulltime": "4-0",
                    "extratime": null,
                    "penalty": null
                }
            },
            {
                "fixture_id": 157070,
                "league_id": 524,
                "event_date": "2019-09-21T11:30:00+00:00",
                "event_timestamp": 1569065400,
                "firstHalfStart": 1569065400,
                "secondHalfStart": 1569069000,
                "round": "Regular Season - 6",
                "status": "Match Finished",
                "statusShort": "FT",
                "elapsed": 90,
                "venue": "King Power Stadium (Leicester, Leicestershire)",
                "referee": "Paul Tierney, England",
                "homeTeam": {
                    "team_id": 46,
                    "team_name": "Leicester",
                    "logo": "https://media.api-football.com/teams/46.png"
                },
                "awayTeam": {
                    "team_id": 47,
                    "team_name": "Tottenham",
                    "logo": "https://media.api-football.com/teams/47.png"
                },
                "goalsHomeTeam": 2,
                "goalsAwayTeam": 1,
                "score": {
                    "halftime": "0-1",
                    "fulltime": "2-1",
                    "extratime": null,
                    "penalty": null
                }
            },
            {
                "fixture_id": 157083,
                "league_id": 524,
                "event_date": "2019-09-28T14:00:00+00:00",
                "event_timestamp": 1569679200,
                "firstHalfStart": 1569679200,
                "secondHalfStart": 1569682800,
                "round": "Regular Season - 7",
                "status": "Match Finished",
                "statusShort": "FT",
                "elapsed": 90,
                "venue": "Tottenham Hotspur Stadium (London)",
                "referee": "Graham Scott, England",
                "homeTeam": {
                    "team_id": 47,
                    "team_name": "Tottenham",
                    "logo": "https://media.api-football.com/teams/47.png"
                },
                "awayTeam": {
                    "team_id": 41,
                    "team_name": "Southampton",
                    "logo": "https://media.api-football.com/teams/41.png"
                },
                "goalsHomeTeam": 2,
                "goalsAwayTeam": 1,
                "score": {
                    "halftime": "2-1",
                    "fulltime": "2-1",
                    "extratime": null,
                    "penalty": null
                }
            },
            {
                "fixture_id": 157086,
                "league_id": 524,
                "event_date": "2019-10-05T11:30:00+00:00",
                "event_timestamp": 1570275000,
                "firstHalfStart": 1570275000,
                "secondHalfStart": 1570278600,
                "round": "Regular Season - 8",
                "status": "Match Finished",
                "statusShort": "FT",
                "elapsed": 90,
                "venue": "The American Express Community Stadium (Falmer, East Sussex)",
                "referee": "Jonathan Moss, England",
                "homeTeam": {
                    "team_id": 51,
                    "team_name": "Brighton",
                    "logo": "https://media.api-football.com/teams/51.png"
                },
                "awayTeam": {
                    "team_id": 47,
                    "team_name": "Tottenham",
                    "logo": "https://media.api-football.com/teams/47.png"
                },
                "goalsHomeTeam": 3,
                "goalsAwayTeam": 0,
                "score": {
                    "halftime": "2-0",
                    "fulltime": "3-0",
                    "extratime": null,
                    "penalty": null
                }
            },
            {
                "fixture_id": 157103,
                "league_id": 524,
                "event_date": "2019-10-19T14:00:00+00:00",
                "event_timestamp": 1571493600,
                "firstHalfStart": 1571493600,
                "secondHalfStart": 1571497200,
                "round": "Regular Season - 9",
                "status": "Match Finished",
                "statusShort": "FT",
                "elapsed": 90,
                "venue": "Tottenham Hotspur Stadium (London)",
                "referee": "Chris Kavanagh, England",
                "homeTeam": {
                    "team_id": 47,
                    "team_name": "Tottenham",
                    "logo": "https://media.api-football.com/teams/47.png"
                },
                "awayTeam": {
                    "team_id": 38,
                    "team_name": "Watford",
                    "logo": "https://media.api-football.com/teams/38.png"
                },
                "goalsHomeTeam": 1,
                "goalsAwayTeam": 1,
                "score": {
                    "halftime": "0-1",
                    "fulltime": "1-1",
                    "extratime": null,
                    "penalty": null
                }
            },
            {
                "fixture_id": 157108,
                "league_id": 524,
                "event_date": "2019-10-27T16:30:00+00:00",
                "event_timestamp": 1572193800,
                "firstHalfStart": null,
                "secondHalfStart": null,
                "round": "Regular Season - 10",
                "status": "Not Started",
                "statusShort": "NS",
                "elapsed": 0,
                "venue": "Anfield (Liverpool)",
                "referee": null,
                "homeTeam": {
                    "team_id": 40,
                    "team_name": "Liverpool",
                    "logo": "https://media.api-football.com/teams/40.png"
                },
                "awayTeam": {
                    "team_id": 47,
                    "team_name": "Tottenham",
                    "logo": "https://media.api-football.com/teams/47.png"
                },
                "goalsHomeTeam": null,
                "goalsAwayTeam": null,
                "score": {
                    "halftime": null,
                    "fulltime": null,
                    "extratime": null,
                    "penalty": null
                }
            },
            {
                "fixture_id": 157120,
                "league_id": 524,
                "event_date": "2019-11-03T16:30:00+00:00",
                "event_timestamp": 1572798600,
                "firstHalfStart": null,
                "secondHalfStart": null,
                "round": "Regular Season - 11",
                "status": "Not Started",
                "statusShort": "NS",
                "elapsed": 0,
                "venue": "Goodison Park (Liverpool)",
                "referee": null,
                "homeTeam": {
                    "team_id": 45,
                    "team_name": "Everton",
                    "logo": "https://media.api-football.com/teams/45.png"
                },
                "awayTeam": {
                    "team_id": 47,
                    "team_name": "Tottenham",
                    "logo": "https://media.api-football.com/teams/47.png"
                },
                "goalsHomeTeam": null,
                "goalsAwayTeam": null,
                "score": {
                    "halftime": null,
                    "fulltime": null,
                    "extratime": null,
                    "penalty": null
                }
            },
            {
                "fixture_id": 157133,
                "league_id": 524,
                "event_date": "2019-11-09T15:00:00+00:00",
                "event_timestamp": 1573311600,
                "firstHalfStart": null,
                "secondHalfStart": null,
                "round": "Regular Season - 12",
                "status": "Not Started",
                "statusShort": "NS",
                "elapsed": 0,
                "venue": "Tottenham Hotspur Stadium (London)",
                "referee": null,
                "homeTeam": {
                    "team_id": 47,
                    "team_name": "Tottenham",
                    "logo": "https://media.api-football.com/teams/47.png"
                },
                "awayTeam": {
                    "team_id": 62,
                    "team_name": "Sheffield Utd",
                    "logo": "https://media.api-football.com/teams/62.png"
                },
                "goalsHomeTeam": null,
                "goalsAwayTeam": null,
                "score": {
                    "halftime": null,
                    "fulltime": null,
                    "extratime": null,
                    "penalty": null
                }
            },
            {
                "fixture_id": 157144,
                "league_id": 524,
                "event_date": "2019-11-23T12:30:00+00:00",
                "event_timestamp": 1574512200,
                "firstHalfStart": null,
                "secondHalfStart": null,
                "round": "Regular Season - 13",
                "status": "Not Started",
                "statusShort": "NS",
                "elapsed": 0,
                "venue": "London Stadium (London)",
                "referee": null,
                "homeTeam": {
                    "team_id": 48,
                    "team_name": "West Ham",
                    "logo": "https://media.api-football.com/teams/48.png"
                },
                "awayTeam": {
                    "team_id": 47,
                    "team_name": "Tottenham",
                    "logo": "https://media.api-football.com/teams/47.png"
                },
                "goalsHomeTeam": null,
                "goalsAwayTeam": null,
                "score": {
                    "halftime": null,
                    "fulltime": null,
                    "extratime": null,
                    "penalty": null
                }
            },
            {
                "fixture_id": 157153,
                "league_id": 524,
                "event_date": "2019-11-30T15:00:00+00:00",
                "event_timestamp": 1575126000,
                "firstHalfStart": null,
                "secondHalfStart": null,
                "round": "Regular Season - 14",
                "status": "Not Started",
                "statusShort": "NS",
                "elapsed": 0,
                "venue": "Tottenham Hotspur Stadium (London)",
                "referee": null,
                "homeTeam": {
                    "team_id": 47,
                    "team_name": "Tottenham",
                    "logo": "https://media.api-football.com/teams/47.png"
                },
                "awayTeam": {
                    "team_id": 35,
                    "team_name": "Bournemouth",
                    "logo": "https://media.api-football.com/teams/35.png"
                },
                "goalsHomeTeam": null,
                "goalsAwayTeam": null,
                "score": {
                    "halftime": null,
                    "fulltime": null,
                    "extratime": null,
                    "penalty": null
                }
            },
            {
                "fixture_id": 157160,
                "league_id": 524,
                "event_date": "2019-12-04T19:30:00+00:00",
                "event_timestamp": 1575487800,
                "firstHalfStart": null,
                "secondHalfStart": null,
                "round": "Regular Season - 15",
                "status": "Not Started",
                "statusShort": "NS",
                "elapsed": 0,
                "venue": "Old Trafford (Manchester)",
                "referee": null,
                "homeTeam": {
                    "team_id": 33,
                    "team_name": "Manchester United",
                    "logo": "https://media.api-football.com/teams/33.png"
                },
                "awayTeam": {
                    "team_id": 47,
                    "team_name": "Tottenham",
                    "logo": "https://media.api-football.com/teams/47.png"
                },
                "goalsHomeTeam": null,
                "goalsAwayTeam": null,
                "score": {
                    "halftime": null,
                    "fulltime": null,
                    "extratime": null,
                    "penalty": null
                }
            },
            {
                "fixture_id": 157172,
                "league_id": 524,
                "event_date": "2019-12-07T15:00:00+00:00",
                "event_timestamp": 1575730800,
                "firstHalfStart": null,
                "secondHalfStart": null,
                "round": "Regular Season - 16",
                "status": "Not Started",
                "statusShort": "NS",
                "elapsed": 0,
                "venue": "Tottenham Hotspur Stadium (London)",
                "referee": null,
                "homeTeam": {
                    "team_id": 47,
                    "team_name": "Tottenham",
                    "logo": "https://media.api-football.com/teams/47.png"
                },
                "awayTeam": {
                    "team_id": 44,
                    "team_name": "Burnley",
                    "logo": "https://media.api-football.com/teams/44.png"
                },
                "goalsHomeTeam": null,
                "goalsAwayTeam": null,
                "score": {
                    "halftime": null,
                    "fulltime": null,
                    "extratime": null,
                    "penalty": null
                }
            },
            {
                "fixture_id": 157184,
                "league_id": 524,
                "event_date": "2019-12-15T14:00:00+00:00",
                "event_timestamp": 1576418400,
                "firstHalfStart": null,
                "secondHalfStart": null,
                "round": "Regular Season - 17",
                "status": "Not Started",
                "statusShort": "NS",
                "elapsed": 0,
                "venue": "Molineux Stadium (Wolverhampton, West Midlands)",
                "referee": null,
                "homeTeam": {
                    "team_id": 39,
                    "team_name": "Wolves",
                    "logo": "https://media.api-football.com/teams/39.png"
                },
                "awayTeam": {
                    "team_id": 47,
                    "team_name": "Tottenham",
                    "logo": "https://media.api-football.com/teams/47.png"
                },
                "goalsHomeTeam": null,
                "goalsAwayTeam": null,
                "score": {
                    "halftime": null,
                    "fulltime": null,
                    "extratime": null,
                    "penalty": null
                }
            },
            {
                "fixture_id": 157192,
                "league_id": 524,
                "event_date": "2019-12-22T16:30:00+00:00",
                "event_timestamp": 1577032200,
                "firstHalfStart": null,
                "secondHalfStart": null,
                "round": "Regular Season - 18",
                "status": "Not Started",
                "statusShort": "NS",
                "elapsed": 0,
                "venue": "Tottenham Hotspur Stadium (London)",
                "referee": null,
                "homeTeam": {
                    "team_id": 47,
                    "team_name": "Tottenham",
                    "logo": "https://media.api-football.com/teams/47.png"
                },
                "awayTeam": {
                    "team_id": 49,
                    "team_name": "Chelsea",
                    "logo": "https://media.api-football.com/teams/49.png"
                },
                "goalsHomeTeam": null,
                "goalsAwayTeam": null,
                "score": {
                    "halftime": null,
                    "fulltime": null,
                    "extratime": null,
                    "penalty": null
                }
            },
            {
                "fixture_id": 157203,
                "league_id": 524,
                "event_date": "2019-12-26T12:30:00+00:00",
                "event_timestamp": 1577363400,
                "firstHalfStart": null,
                "secondHalfStart": null,
                "round": "Regular Season - 19",
                "status": "Not Started",
                "statusShort": "NS",
                "elapsed": 0,
                "venue": "Tottenham Hotspur Stadium (London)",
                "referee": null,
                "homeTeam": {
                    "team_id": 47,
                    "team_name": "Tottenham",
                    "logo": "https://media.api-football.com/teams/47.png"
                },
                "awayTeam": {
                    "team_id": 51,
                    "team_name": "Brighton",
                    "logo": "https://media.api-football.com/teams/51.png"
                },
                "goalsHomeTeam": null,
                "goalsAwayTeam": null,
                "score": {
                    "halftime": null,
                    "fulltime": null,
                    "extratime": null,
                    "penalty": null
                }
            },
            {
                "fixture_id": 157211,
                "league_id": 524,
                "event_date": "2019-12-28T17:30:00+00:00",
                "event_timestamp": 1577554200,
                "firstHalfStart": null,
                "secondHalfStart": null,
                "round": "Regular Season - 20",
                "status": "Not Started",
                "statusShort": "NS",
                "elapsed": 0,
                "venue": "Carrow Road (Norwich, Norfolk)",
                "referee": null,
                "homeTeam": {
                    "team_id": 71,
                    "team_name": "Norwich",
                    "logo": "https://media.api-football.com/teams/71.png"
                },
                "awayTeam": {
                    "team_id": 47,
                    "team_name": "Tottenham",
                    "logo": "https://media.api-football.com/teams/47.png"
                },
                "goalsHomeTeam": null,
                "goalsAwayTeam": null,
                "score": {
                    "halftime": null,
                    "fulltime": null,
                    "extratime": null,
                    "penalty": null
                }
            },
            {
                "fixture_id": 157222,
                "league_id": 524,
                "event_date": "2020-01-01T15:00:00+00:00",
                "event_timestamp": 1577890800,
                "firstHalfStart": null,
                "secondHalfStart": null,
                "round": "Regular Season - 21",
                "status": "Not Started",
                "statusShort": "NS",
                "elapsed": 0,
                "venue": "St. Mary's Stadium (Southampton, Hampshire)",
                "referee": null,
                "homeTeam": {
                    "team_id": 41,
                    "team_name": "Southampton",
                    "logo": "https://media.api-football.com/teams/41.png"
                },
                "awayTeam": {
                    "team_id": 47,
                    "team_name": "Tottenham",
                    "logo": "https://media.api-football.com/teams/47.png"
                },
                "goalsHomeTeam": null,
                "goalsAwayTeam": null,
                "score": {
                    "halftime": null,
                    "fulltime": null,
                    "extratime": null,
                    "penalty": null
                }
            },
            {
                "fixture_id": 157233,
                "league_id": 524,
                "event_date": "2020-01-11T17:30:00+00:00",
                "event_timestamp": 1578763800,
                "firstHalfStart": null,
                "secondHalfStart": null,
                "round": "Regular Season - 22",
                "status": "Not Started",
                "statusShort": "NS",
                "elapsed": 0,
                "venue": "Tottenham Hotspur Stadium (London)",
                "referee": null,
                "homeTeam": {
                    "team_id": 47,
                    "team_name": "Tottenham",
                    "logo": "https://media.api-football.com/teams/47.png"
                },
                "awayTeam": {
                    "team_id": 40,
                    "team_name": "Liverpool",
                    "logo": "https://media.api-football.com/teams/40.png"
                },
                "goalsHomeTeam": null,
                "goalsAwayTeam": null,
                "score": {
                    "halftime": null,
                    "fulltime": null,
                    "extratime": null,
                    "penalty": null
                }
            },
            {
                "fixture_id": 157243,
                "league_id": 524,
                "event_date": "2020-01-18T12:30:00+00:00",
                "event_timestamp": 1579350600,
                "firstHalfStart": null,
                "secondHalfStart": null,
                "round": "Regular Season - 23",
                "status": "Not Started",
                "statusShort": "NS",
                "elapsed": 0,
                "venue": "Vicarage Road (Watford)",
                "referee": null,
                "homeTeam": {
                    "team_id": 38,
                    "team_name": "Watford",
                    "logo": "https://media.api-football.com/teams/38.png"
                },
                "awayTeam": {
                    "team_id": 47,
                    "team_name": "Tottenham",
                    "logo": "https://media.api-football.com/teams/47.png"
                },
                "goalsHomeTeam": null,
                "goalsAwayTeam": null,
                "score": {
                    "halftime": null,
                    "fulltime": null,
                    "extratime": null,
                    "penalty": null
                }
            },
            {
                "fixture_id": 157253,
                "league_id": 524,
                "event_date": "2020-01-22T19:30:00+00:00",
                "event_timestamp": 1579721400,
                "firstHalfStart": null,
                "secondHalfStart": null,
                "round": "Regular Season - 24",
                "status": "Not Started",
                "statusShort": "NS",
                "elapsed": 0,
                "venue": "Tottenham Hotspur Stadium (London)",
                "referee": null,
                "homeTeam": {
                    "team_id": 47,
                    "team_name": "Tottenham",
                    "logo": "https://media.api-football.com/teams/47.png"
                },
                "awayTeam": {
                    "team_id": 71,
                    "team_name": "Norwich",
                    "logo": "https://media.api-football.com/teams/71.png"
                },
                "goalsHomeTeam": null,
                "goalsAwayTeam": null,
                "score": {
                    "halftime": null,
                    "fulltime": null,
                    "extratime": null,
                    "penalty": null
                }
            },
            {
                "fixture_id": 157262,
                "league_id": 524,
                "event_date": "2020-02-01T15:00:00+00:00",
                "event_timestamp": 1580569200,
                "firstHalfStart": null,
                "secondHalfStart": null,
                "round": "Regular Season - 25",
                "status": "Not Started",
                "statusShort": "NS",
                "elapsed": 0,
                "venue": "Tottenham Hotspur Stadium (London)",
                "referee": null,
                "homeTeam": {
                    "team_id": 47,
                    "team_name": "Tottenham",
                    "logo": "https://media.api-football.com/teams/47.png"
                },
                "awayTeam": {
                    "team_id": 50,
                    "team_name": "Manchester City",
                    "logo": "https://media.api-football.com/teams/50.png"
                },
                "goalsHomeTeam": null,
                "goalsAwayTeam": null,
                "score": {
                    "halftime": null,
                    "fulltime": null,
                    "extratime": null,
                    "penalty": null
                }
            },
            {
                "fixture_id": 157266,
                "league_id": 524,
                "event_date": "2020-02-08T15:00:00+00:00",
                "event_timestamp": 1581174000,
                "firstHalfStart": null,
                "secondHalfStart": null,
                "round": "Regular Season - 26",
                "status": "Not Started",
                "statusShort": "NS",
                "elapsed": 0,
                "venue": "Villa Park (Birmingham)",
                "referee": null,
                "homeTeam": {
                    "team_id": 66,
                    "team_name": "Aston Villa",
                    "logo": "https://media.api-football.com/teams/66.png"
                },
                "awayTeam": {
                    "team_id": 47,
                    "team_name": "Tottenham",
                    "logo": "https://media.api-football.com/teams/47.png"
                },
                "goalsHomeTeam": null,
                "goalsAwayTeam": null,
                "score": {
                    "halftime": null,
                    "fulltime": null,
                    "extratime": null,
                    "penalty": null
                }
            },
            {
                "fixture_id": 157277,
                "league_id": 524,
                "event_date": "2020-02-22T15:00:00+00:00",
                "event_timestamp": 1582383600,
                "firstHalfStart": null,
                "secondHalfStart": null,
                "round": "Regular Season - 27",
                "status": "Not Started",
                "statusShort": "NS",
                "elapsed": 0,
                "venue": "Stamford Bridge (London)",
                "referee": null,
                "homeTeam": {
                    "team_id": 49,
                    "team_name": "Chelsea",
                    "logo": "https://media.api-football.com/teams/49.png"
                },
                "awayTeam": {
                    "team_id": 47,
                    "team_name": "Tottenham",
                    "logo": "https://media.api-football.com/teams/47.png"
                },
                "goalsHomeTeam": null,
                "goalsAwayTeam": null,
                "score": {
                    "halftime": null,
                    "fulltime": null,
                    "extratime": null,
                    "penalty": null
                }
            },
            {
                "fixture_id": 157292,
                "league_id": 524,
                "event_date": "2020-02-29T15:00:00+00:00",
                "event_timestamp": 1582988400,
                "firstHalfStart": null,
                "secondHalfStart": null,
                "round": "Regular Season - 28",
                "status": "Not Started",
                "statusShort": "NS",
                "elapsed": 0,
                "venue": "Tottenham Hotspur Stadium (London)",
                "referee": null,
                "homeTeam": {
                    "team_id": 47,
                    "team_name": "Tottenham",
                    "logo": "https://media.api-football.com/teams/47.png"
                },
                "awayTeam": {
                    "team_id": 39,
                    "team_name": "Wolves",
                    "logo": "https://media.api-football.com/teams/39.png"
                },
                "goalsHomeTeam": null,
                "goalsAwayTeam": null,
                "score": {
                    "halftime": null,
                    "fulltime": null,
                    "extratime": null,
                    "penalty": null
                }
            },
            {
                "fixture_id": 157296,
                "league_id": 524,
                "event_date": "2020-03-07T15:00:00+00:00",
                "event_timestamp": 1583593200,
                "firstHalfStart": null,
                "secondHalfStart": null,
                "round": "Regular Season - 29",
                "status": "Not Started",
                "statusShort": "NS",
                "elapsed": 0,
                "venue": "Turf Moor (Burnley)",
                "referee": null,
                "homeTeam": {
                    "team_id": 44,
                    "team_name": "Burnley",
                    "logo": "https://media.api-football.com/teams/44.png"
                },
                "awayTeam": {
                    "team_id": 47,
                    "team_name": "Tottenham",
                    "logo": "https://media.api-football.com/teams/47.png"
                },
                "goalsHomeTeam": null,
                "goalsAwayTeam": null,
                "score": {
                    "halftime": null,
                    "fulltime": null,
                    "extratime": null,
                    "penalty": null
                }
            },
            {
                "fixture_id": 157312,
                "league_id": 524,
                "event_date": "2020-03-14T15:00:00+00:00",
                "event_timestamp": 1584198000,
                "firstHalfStart": null,
                "secondHalfStart": null,
                "round": "Regular Season - 30",
                "status": "Not Started",
                "statusShort": "NS",
                "elapsed": 0,
                "venue": "Tottenham Hotspur Stadium (London)",
                "referee": null,
                "homeTeam": {
                    "team_id": 47,
                    "team_name": "Tottenham",
                    "logo": "https://media.api-football.com/teams/47.png"
                },
                "awayTeam": {
                    "team_id": 33,
                    "team_name": "Manchester United",
                    "logo": "https://media.api-football.com/teams/33.png"
                },
                "goalsHomeTeam": null,
                "goalsAwayTeam": null,
                "score": {
                    "halftime": null,
                    "fulltime": null,
                    "extratime": null,
                    "penalty": null
                }
            },
            {
                "fixture_id": 157323,
                "league_id": 524,
                "event_date": "2020-03-21T15:00:00+00:00",
                "event_timestamp": 1584802800,
                "firstHalfStart": null,
                "secondHalfStart": null,
                "round": "Regular Season - 31",
                "status": "Not Started",
                "statusShort": "NS",
                "elapsed": 0,
                "venue": "Tottenham Hotspur Stadium (London)",
                "referee": null,
                "homeTeam": {
                    "team_id": 47,
                    "team_name": "Tottenham",
                    "logo": "https://media.api-football.com/teams/47.png"
                },
                "awayTeam": {
                    "team_id": 48,
                    "team_name": "West Ham",
                    "logo": "https://media.api-football.com/teams/48.png"
                },
                "goalsHomeTeam": null,
                "goalsAwayTeam": null,
                "score": {
                    "halftime": null,
                    "fulltime": null,
                    "extratime": null,
                    "penalty": null
                }
            },
            {
                "fixture_id": 157332,
                "league_id": 524,
                "event_date": "2020-04-04T14:00:00+00:00",
                "event_timestamp": 1586008800,
                "firstHalfStart": null,
                "secondHalfStart": null,
                "round": "Regular Season - 32",
                "status": "Not Started",
                "statusShort": "NS",
                "elapsed": 0,
                "venue": "Bramall Lane (Sheffield)",
                "referee": null,
                "homeTeam": {
                    "team_id": 62,
                    "team_name": "Sheffield Utd",
                    "logo": "https://media.api-football.com/teams/62.png"
                },
                "awayTeam": {
                    "team_id": 47,
                    "team_name": "Tottenham",
                    "logo": "https://media.api-football.com/teams/47.png"
                },
                "goalsHomeTeam": null,
                "goalsAwayTeam": null,
                "score": {
                    "halftime": null,
                    "fulltime": null,
                    "extratime": null,
                    "penalty": null
                }
            },
            {
                "fixture_id": 157343,
                "league_id": 524,
                "event_date": "2020-04-11T14:00:00+00:00",
                "event_timestamp": 1586613600,
                "firstHalfStart": null,
                "secondHalfStart": null,
                "round": "Regular Season - 33",
                "status": "Not Started",
                "statusShort": "NS",
                "elapsed": 0,
                "venue": "Tottenham Hotspur Stadium (London)",
                "referee": null,
                "homeTeam": {
                    "team_id": 47,
                    "team_name": "Tottenham",
                    "logo": "https://media.api-football.com/teams/47.png"
                },
                "awayTeam": {
                    "team_id": 45,
                    "team_name": "Everton",
                    "logo": "https://media.api-football.com/teams/45.png"
                },
                "goalsHomeTeam": null,
                "goalsAwayTeam": null,
                "score": {
                    "halftime": null,
                    "fulltime": null,
                    "extratime": null,
                    "penalty": null
                }
            },
            {
                "fixture_id": 157345,
                "league_id": 524,
                "event_date": "2020-04-18T14:00:00+00:00",
                "event_timestamp": 1587218400,
                "firstHalfStart": null,
                "secondHalfStart": null,
                "round": "Regular Season - 34",
                "status": "Not Started",
                "statusShort": "NS",
                "elapsed": 0,
                "venue": "Vitality Stadium (Bournemouth, Dorset)",
                "referee": null,
                "homeTeam": {
                    "team_id": 35,
                    "team_name": "Bournemouth",
                    "logo": "https://media.api-football.com/teams/35.png"
                },
                "awayTeam": {
                    "team_id": 47,
                    "team_name": "Tottenham",
                    "logo": "https://media.api-football.com/teams/47.png"
                },
                "goalsHomeTeam": null,
                "goalsAwayTeam": null,
                "score": {
                    "halftime": null,
                    "fulltime": null,
                    "extratime": null,
                    "penalty": null
                }
            },
            {
                "fixture_id": 157362,
                "league_id": 524,
                "event_date": "2020-04-25T14:00:00+00:00",
                "event_timestamp": 1587823200,
                "firstHalfStart": null,
                "secondHalfStart": null,
                "round": "Regular Season - 35",
                "status": "Not Started",
                "statusShort": "NS",
                "elapsed": 0,
                "venue": "Tottenham Hotspur Stadium (London)",
                "referee": null,
                "homeTeam": {
                    "team_id": 47,
                    "team_name": "Tottenham",
                    "logo": "https://media.api-football.com/teams/47.png"
                },
                "awayTeam": {
                    "team_id": 42,
                    "team_name": "Arsenal",
                    "logo": "https://media.api-football.com/teams/42.png"
                },
                "goalsHomeTeam": null,
                "goalsAwayTeam": null,
                "score": {
                    "halftime": null,
                    "fulltime": null,
                    "extratime": null,
                    "penalty": null
                }
            },
            {
                "fixture_id": 157372,
                "league_id": 524,
                "event_date": "2020-05-02T14:00:00+00:00",
                "event_timestamp": 1588428000,
                "firstHalfStart": null,
                "secondHalfStart": null,
                "round": "Regular Season - 36",
                "status": "Not Started",
                "statusShort": "NS",
                "elapsed": 0,
                "venue": "St. James' Park (Newcastle upon Tyne)",
                "referee": null,
                "homeTeam": {
                    "team_id": 34,
                    "team_name": "Newcastle",
                    "logo": "https://media.api-football.com/teams/34.png"
                },
                "awayTeam": {
                    "team_id": 47,
                    "team_name": "Tottenham",
                    "logo": "https://media.api-football.com/teams/47.png"
                },
                "goalsHomeTeam": null,
                "goalsAwayTeam": null,
                "score": {
                    "halftime": null,
                    "fulltime": null,
                    "extratime": null,
                    "penalty": null
                }
            },
            {
                "fixture_id": 157382,
                "league_id": 524,
                "event_date": "2020-05-09T14:00:00+00:00",
                "event_timestamp": 1589032800,
                "firstHalfStart": null,
                "secondHalfStart": null,
                "round": "Regular Season - 37",
                "status": "Not Started",
                "statusShort": "NS",
                "elapsed": 0,
                "venue": "Tottenham Hotspur Stadium (London)",
                "referee": null,
                "homeTeam": {
                    "team_id": 47,
                    "team_name": "Tottenham",
                    "logo": "https://media.api-football.com/teams/47.png"
                },
                "awayTeam": {
                    "team_id": 46,
                    "team_name": "Leicester",
                    "logo": "https://media.api-football.com/teams/46.png"
                },
                "goalsHomeTeam": null,
                "goalsAwayTeam": null,
                "score": {
                    "halftime": null,
                    "fulltime": null,
                    "extratime": null,
                    "penalty": null
                }
            },
            {
                "fixture_id": 157388,
                "league_id": 524,
                "event_date": "2020-05-17T14:00:00+00:00",
                "event_timestamp": 1589724000,
                "firstHalfStart": null,
                "secondHalfStart": null,
                "round": "Regular Season - 38",
                "status": "Not Started",
                "statusShort": "NS",
                "elapsed": 0,
                "venue": "Selhurst Park (London)",
                "referee": null,
                "homeTeam": {
                    "team_id": 52,
                    "team_name": "Crystal Palace",
                    "logo": "https://media.api-football.com/teams/52.png"
                },
                "awayTeam": {
                    "team_id": 47,
                    "team_name": "Tottenham",
                    "logo": "https://media.api-football.com/teams/47.png"
                },
                "goalsHomeTeam": null,
                "goalsAwayTeam": null,
                "score": {
                    "halftime": null,
                    "fulltime": null,
                    "extratime": null,
                    "penalty": null
                }
            }
        ]
      }
    ]
});

const LeagueTable = () =>
Promise.resolve({
    data: [
        {
            "api": {
                "results": 1,
                "standings": [
                    [
                        {
                            "rank": 1,
                            "team_id": 40,
                            "teamName": "Liverpool",
                            "logo": "https://media.api-football.com/teams/40.png",
                            "group": "Premier League",
                            "forme": "DWWWW",
                            "description": "Promotion - Champions League (Group Stage)",
                            "all": {
                                "matchsPlayed": 9,
                                "win": 8,
                                "draw": 1,
                                "lose": 0,
                                "goalsFor": 21,
                                "goalsAgainst": 7
                            },
                            "home": {
                                "matchsPlayed": 4,
                                "win": 4,
                                "draw": 0,
                                "lose": 0,
                                "goalsFor": 12,
                                "goalsAgainst": 4
                            },
                            "away": {
                                "matchsPlayed": 5,
                                "win": 4,
                                "draw": 1,
                                "lose": 0,
                                "goalsFor": 9,
                                "goalsAgainst": 3
                            },
                            "goalsDiff": 14,
                            "points": 25,
                            "lastUpdate": "2019-10-24"
                        },
                        {
                            "rank": 2,
                            "team_id": 50,
                            "teamName": "Manchester City",
                            "logo": "https://media.api-football.com/teams/50.png",
                            "group": "Premier League",
                            "forme": "WLWWL",
                            "description": "Promotion - Champions League (Group Stage)",
                            "all": {
                                "matchsPlayed": 9,
                                "win": 6,
                                "draw": 1,
                                "lose": 2,
                                "goalsFor": 29,
                                "goalsAgainst": 9
                            },
                            "home": {
                                "matchsPlayed": 4,
                                "win": 2,
                                "draw": 1,
                                "lose": 1,
                                "goalsFor": 14,
                                "goalsAgainst": 4
                            },
                            "away": {
                                "matchsPlayed": 5,
                                "win": 4,
                                "draw": 0,
                                "lose": 1,
                                "goalsFor": 15,
                                "goalsAgainst": 5
                            },
                            "goalsDiff": 20,
                            "points": 19,
                            "lastUpdate": "2019-10-24"
                        },
                        {
                            "rank": 3,
                            "team_id": 46,
                            "teamName": "Leicester",
                            "logo": "https://media.api-football.com/teams/46.png",
                            "group": "Premier League",
                            "forme": "WLWWL",
                            "description": "Promotion - Champions League (Group Stage)",
                            "all": {
                                "matchsPlayed": 9,
                                "win": 5,
                                "draw": 2,
                                "lose": 2,
                                "goalsFor": 16,
                                "goalsAgainst": 8
                            },
                            "home": {
                                "matchsPlayed": 5,
                                "win": 4,
                                "draw": 1,
                                "lose": 0,
                                "goalsFor": 12,
                                "goalsAgainst": 3
                            },
                            "away": {
                                "matchsPlayed": 4,
                                "win": 1,
                                "draw": 1,
                                "lose": 2,
                                "goalsFor": 4,
                                "goalsAgainst": 5
                            },
                            "goalsDiff": 8,
                            "points": 17,
                            "lastUpdate": "2019-10-24"
                        },
                        {
                            "rank": 4,
                            "team_id": 49,
                            "teamName": "Chelsea",
                            "logo": "https://media.api-football.com/teams/49.png",
                            "group": "Premier League",
                            "forme": "WWWLW",
                            "description": "Promotion - Champions League (Group Stage)",
                            "all": {
                                "matchsPlayed": 9,
                                "win": 5,
                                "draw": 2,
                                "lose": 2,
                                "goalsFor": 19,
                                "goalsAgainst": 14
                            },
                            "home": {
                                "matchsPlayed": 5,
                                "win": 2,
                                "draw": 2,
                                "lose": 1,
                                "goalsFor": 7,
                                "goalsAgainst": 5
                            },
                            "away": {
                                "matchsPlayed": 4,
                                "win": 3,
                                "draw": 0,
                                "lose": 1,
                                "goalsFor": 12,
                                "goalsAgainst": 9
                            },
                            "goalsDiff": 5,
                            "points": 17,
                            "lastUpdate": "2019-10-24"
                        },
                        {
                            "rank": 5,
                            "team_id": 42,
                            "teamName": "Arsenal",
                            "logo": "https://media.api-football.com/teams/42.png",
                            "group": "Premier League",
                            "forme": "LWDWD",
                            "description": "Promotion - Europa League (Group Stage)",
                            "all": {
                                "matchsPlayed": 9,
                                "win": 4,
                                "draw": 3,
                                "lose": 2,
                                "goalsFor": 13,
                                "goalsAgainst": 12
                            },
                            "home": {
                                "matchsPlayed": 4,
                                "win": 3,
                                "draw": 1,
                                "lose": 0,
                                "goalsFor": 8,
                                "goalsAgainst": 5
                            },
                            "away": {
                                "matchsPlayed": 5,
                                "win": 1,
                                "draw": 2,
                                "lose": 2,
                                "goalsFor": 5,
                                "goalsAgainst": 7
                            },
                            "goalsDiff": 1,
                            "points": 15,
                            "lastUpdate": "2019-10-24"
                        },
                        {
                            "rank": 6,
                            "team_id": 52,
                            "teamName": "Crystal Palace",
                            "logo": "https://media.api-football.com/teams/52.png",
                            "group": "Premier League",
                            "forme": "LWWDL",
                            "description": null,
                            "all": {
                                "matchsPlayed": 9,
                                "win": 4,
                                "draw": 2,
                                "lose": 3,
                                "goalsFor": 8,
                                "goalsAgainst": 10
                            },
                            "home": {
                                "matchsPlayed": 5,
                                "win": 2,
                                "draw": 2,
                                "lose": 1,
                                "goalsFor": 4,
                                "goalsAgainst": 3
                            },
                            "away": {
                                "matchsPlayed": 4,
                                "win": 2,
                                "draw": 0,
                                "lose": 2,
                                "goalsFor": 4,
                                "goalsAgainst": 7
                            },
                            "goalsDiff": -2,
                            "points": 14,
                            "lastUpdate": "2019-10-24"
                        },
                        {
                            "rank": 7,
                            "team_id": 47,
                            "teamName": "Tottenham",
                            "logo": "https://media.api-football.com/teams/47.png",
                            "group": "Premier League",
                            "forme": "DLWLW",
                            "description": null,
                            "all": {
                                "matchsPlayed": 9,
                                "win": 3,
                                "draw": 3,
                                "lose": 3,
                                "goalsFor": 15,
                                "goalsAgainst": 13
                            },
                            "home": {
                                "matchsPlayed": 5,
                                "win": 3,
                                "draw": 1,
                                "lose": 1,
                                "goalsFor": 10,
                                "goalsAgainst": 4
                            },
                            "away": {
                                "matchsPlayed": 4,
                                "win": 0,
                                "draw": 2,
                                "lose": 2,
                                "goalsFor": 5,
                                "goalsAgainst": 9
                            },
                            "goalsDiff": 2,
                            "points": 12,
                            "lastUpdate": "2019-10-24"
                        },
                        {
                            "rank": 8,
                            "team_id": 44,
                            "teamName": "Burnley",
                            "logo": "https://media.api-football.com/teams/44.png",
                            "group": "Premier League",
                            "forme": "LWDWD",
                            "description": null,
                            "all": {
                                "matchsPlayed": 9,
                                "win": 3,
                                "draw": 3,
                                "lose": 3,
                                "goalsFor": 12,
                                "goalsAgainst": 11
                            },
                            "home": {
                                "matchsPlayed": 4,
                                "win": 3,
                                "draw": 0,
                                "lose": 1,
                                "goalsFor": 6,
                                "goalsAgainst": 3
                            },
                            "away": {
                                "matchsPlayed": 5,
                                "win": 0,
                                "draw": 3,
                                "lose": 2,
                                "goalsFor": 6,
                                "goalsAgainst": 8
                            },
                            "goalsDiff": 1,
                            "points": 12,
                            "lastUpdate": "2019-10-24"
                        },
                        {
                            "rank": 9,
                            "team_id": 62,
                            "teamName": "Sheffield Utd",
                            "logo": "https://media.api-football.com/teams/62.png",
                            "group": "Premier League",
                            "forme": "WDLWL",
                            "description": null,
                            "all": {
                                "matchsPlayed": 9,
                                "win": 3,
                                "draw": 3,
                                "lose": 3,
                                "goalsFor": 8,
                                "goalsAgainst": 7
                            },
                            "home": {
                                "matchsPlayed": 5,
                                "win": 2,
                                "draw": 0,
                                "lose": 3,
                                "goalsFor": 3,
                                "goalsAgainst": 4
                            },
                            "away": {
                                "matchsPlayed": 4,
                                "win": 1,
                                "draw": 3,
                                "lose": 0,
                                "goalsFor": 5,
                                "goalsAgainst": 3
                            },
                            "goalsDiff": 1,
                            "points": 12,
                            "lastUpdate": "2019-10-24"
                        },
                        {
                            "rank": 10,
                            "team_id": 35,
                            "teamName": "Bournemouth",
                            "logo": "https://media.api-football.com/teams/35.png",
                            "group": "Premier League",
                            "forme": "DLDWW",
                            "description": null,
                            "all": {
                                "matchsPlayed": 9,
                                "win": 3,
                                "draw": 3,
                                "lose": 3,
                                "goalsFor": 13,
                                "goalsAgainst": 13
                            },
                            "home": {
                                "matchsPlayed": 5,
                                "win": 1,
                                "draw": 3,
                                "lose": 1,
                                "goalsFor": 7,
                                "goalsAgainst": 7
                            },
                            "away": {
                                "matchsPlayed": 4,
                                "win": 2,
                                "draw": 0,
                                "lose": 2,
                                "goalsFor": 6,
                                "goalsAgainst": 6
                            },
                            "goalsDiff": 0,
                            "points": 12,
                            "lastUpdate": "2019-10-24"
                        },
                        {
                            "rank": 11,
                            "team_id": 48,
                            "teamName": "West Ham",
                            "logo": "https://media.api-football.com/teams/48.png",
                            "group": "Premier League",
                            "forme": "LLDWD",
                            "description": null,
                            "all": {
                                "matchsPlayed": 9,
                                "win": 3,
                                "draw": 3,
                                "lose": 3,
                                "goalsFor": 11,
                                "goalsAgainst": 13
                            },
                            "home": {
                                "matchsPlayed": 4,
                                "win": 2,
                                "draw": 0,
                                "lose": 2,
                                "goalsFor": 5,
                                "goalsAgainst": 7
                            },
                            "away": {
                                "matchsPlayed": 5,
                                "win": 1,
                                "draw": 3,
                                "lose": 1,
                                "goalsFor": 6,
                                "goalsAgainst": 6
                            },
                            "goalsDiff": -2,
                            "points": 12,
                            "lastUpdate": "2019-10-24"
                        },
                        {
                            "rank": 12,
                            "team_id": 66,
                            "teamName": "Aston Villa",
                            "logo": "https://media.api-football.com/teams/66.png",
                            "group": "Premier League",
                            "forme": "WWDLD",
                            "description": null,
                            "all": {
                                "matchsPlayed": 9,
                                "win": 3,
                                "draw": 2,
                                "lose": 4,
                                "goalsFor": 15,
                                "goalsAgainst": 13
                            },
                            "home": {
                                "matchsPlayed": 5,
                                "win": 2,
                                "draw": 2,
                                "lose": 1,
                                "goalsFor": 7,
                                "goalsAgainst": 5
                            },
                            "away": {
                                "matchsPlayed": 4,
                                "win": 1,
                                "draw": 0,
                                "lose": 3,
                                "goalsFor": 8,
                                "goalsAgainst": 8
                            },
                            "goalsDiff": 2,
                            "points": 11,
                            "lastUpdate": "2019-10-24"
                        },
                        {
                            "rank": 13,
                            "team_id": 39,
                            "teamName": "Wolves",
                            "logo": "https://media.api-football.com/teams/39.png",
                            "group": "Premier League",
                            "forme": "DWWDL",
                            "description": null,
                            "all": {
                                "matchsPlayed": 9,
                                "win": 2,
                                "draw": 5,
                                "lose": 2,
                                "goalsFor": 12,
                                "goalsAgainst": 12
                            },
                            "home": {
                                "matchsPlayed": 5,
                                "win": 1,
                                "draw": 3,
                                "lose": 1,
                                "goalsFor": 7,
                                "goalsAgainst": 8
                            },
                            "away": {
                                "matchsPlayed": 4,
                                "win": 1,
                                "draw": 2,
                                "lose": 1,
                                "goalsFor": 5,
                                "goalsAgainst": 4
                            },
                            "goalsDiff": 0,
                            "points": 11,
                            "lastUpdate": "2019-10-24"
                        },
                        {
                            "rank": 14,
                            "team_id": 33,
                            "teamName": "Manchester United",
                            "logo": "https://media.api-football.com/teams/33.png",
                            "group": "Premier League",
                            "forme": "DLDLW",
                            "description": null,
                            "all": {
                                "matchsPlayed": 9,
                                "win": 2,
                                "draw": 4,
                                "lose": 3,
                                "goalsFor": 10,
                                "goalsAgainst": 9
                            },
                            "home": {
                                "matchsPlayed": 5,
                                "win": 2,
                                "draw": 2,
                                "lose": 1,
                                "goalsFor": 8,
                                "goalsAgainst": 4
                            },
                            "away": {
                                "matchsPlayed": 4,
                                "win": 0,
                                "draw": 2,
                                "lose": 2,
                                "goalsFor": 2,
                                "goalsAgainst": 5
                            },
                            "goalsDiff": 1,
                            "points": 10,
                            "lastUpdate": "2019-10-24"
                        },
                        {
                            "rank": 15,
                            "team_id": 45,
                            "teamName": "Everton",
                            "logo": "https://media.api-football.com/teams/45.png",
                            "group": "Premier League",
                            "forme": "WLLLL",
                            "description": null,
                            "all": {
                                "matchsPlayed": 9,
                                "win": 3,
                                "draw": 1,
                                "lose": 5,
                                "goalsFor": 8,
                                "goalsAgainst": 13
                            },
                            "home": {
                                "matchsPlayed": 5,
                                "win": 3,
                                "draw": 0,
                                "lose": 2,
                                "goalsFor": 7,
                                "goalsAgainst": 7
                            },
                            "away": {
                                "matchsPlayed": 4,
                                "win": 0,
                                "draw": 1,
                                "lose": 3,
                                "goalsFor": 1,
                                "goalsAgainst": 6
                            },
                            "goalsDiff": -5,
                            "points": 10,
                            "lastUpdate": "2019-10-24"
                        },
                        {
                            "rank": 16,
                            "team_id": 51,
                            "teamName": "Brighton",
                            "logo": "https://media.api-football.com/teams/51.png",
                            "group": "Premier League",
                            "forme": "LWLDD",
                            "description": null,
                            "all": {
                                "matchsPlayed": 9,
                                "win": 2,
                                "draw": 3,
                                "lose": 4,
                                "goalsFor": 9,
                                "goalsAgainst": 12
                            },
                            "home": {
                                "matchsPlayed": 4,
                                "win": 1,
                                "draw": 2,
                                "lose": 1,
                                "goalsFor": 5,
                                "goalsAgainst": 4
                            },
                            "away": {
                                "matchsPlayed": 5,
                                "win": 1,
                                "draw": 1,
                                "lose": 3,
                                "goalsFor": 4,
                                "goalsAgainst": 8
                            },
                            "goalsDiff": -3,
                            "points": 9,
                            "lastUpdate": "2019-10-24"
                        },
                        {
                            "rank": 17,
                            "team_id": 41,
                            "teamName": "Southampton",
                            "logo": "https://media.api-football.com/teams/41.png",
                            "group": "Premier League",
                            "forme": "DLLLW",
                            "description": null,
                            "all": {
                                "matchsPlayed": 9,
                                "win": 2,
                                "draw": 2,
                                "lose": 5,
                                "goalsFor": 9,
                                "goalsAgainst": 16
                            },
                            "home": {
                                "matchsPlayed": 4,
                                "win": 0,
                                "draw": 1,
                                "lose": 3,
                                "goalsFor": 4,
                                "goalsAgainst": 10
                            },
                            "away": {
                                "matchsPlayed": 5,
                                "win": 2,
                                "draw": 1,
                                "lose": 2,
                                "goalsFor": 5,
                                "goalsAgainst": 6
                            },
                            "goalsDiff": -7,
                            "points": 8,
                            "lastUpdate": "2019-10-24"
                        },
                        {
                            "rank": 18,
                            "team_id": 34,
                            "teamName": "Newcastle",
                            "logo": "https://media.api-football.com/teams/34.png",
                            "group": "Premier League",
                            "forme": "LWLDL",
                            "description": "Relegation - Championship",
                            "all": {
                                "matchsPlayed": 9,
                                "win": 2,
                                "draw": 2,
                                "lose": 5,
                                "goalsFor": 5,
                                "goalsAgainst": 14
                            },
                            "home": {
                                "matchsPlayed": 4,
                                "win": 1,
                                "draw": 2,
                                "lose": 1,
                                "goalsFor": 2,
                                "goalsAgainst": 2
                            },
                            "away": {
                                "matchsPlayed": 5,
                                "win": 1,
                                "draw": 0,
                                "lose": 4,
                                "goalsFor": 3,
                                "goalsAgainst": 12
                            },
                            "goalsDiff": -9,
                            "points": 8,
                            "lastUpdate": "2019-10-24"
                        },
                        {
                            "rank": 19,
                            "team_id": 71,
                            "teamName": "Norwich",
                            "logo": "https://media.api-football.com/teams/71.png",
                            "group": "Premier League",
                            "forme": "DLLLW",
                            "description": "Relegation - Championship",
                            "all": {
                                "matchsPlayed": 9,
                                "win": 2,
                                "draw": 1,
                                "lose": 6,
                                "goalsFor": 10,
                                "goalsAgainst": 21
                            },
                            "home": {
                                "matchsPlayed": 4,
                                "win": 2,
                                "draw": 0,
                                "lose": 2,
                                "goalsFor": 9,
                                "goalsAgainst": 11
                            },
                            "away": {
                                "matchsPlayed": 5,
                                "win": 0,
                                "draw": 1,
                                "lose": 4,
                                "goalsFor": 1,
                                "goalsAgainst": 10
                            },
                            "goalsDiff": -11,
                            "points": 7,
                            "lastUpdate": "2019-10-24"
                        },
                        {
                            "rank": 20,
                            "team_id": 38,
                            "teamName": "Watford",
                            "logo": "https://media.api-football.com/teams/38.png",
                            "group": "Premier League",
                            "forme": "DDLLD",
                            "description": "Relegation - Championship",
                            "all": {
                                "matchsPlayed": 9,
                                "win": 0,
                                "draw": 4,
                                "lose": 5,
                                "goalsFor": 5,
                                "goalsAgainst": 21
                            },
                            "home": {
                                "matchsPlayed": 4,
                                "win": 0,
                                "draw": 2,
                                "lose": 2,
                                "goalsFor": 3,
                                "goalsAgainst": 8
                            },
                            "away": {
                                "matchsPlayed": 5,
                                "win": 0,
                                "draw": 2,
                                "lose": 3,
                                "goalsFor": 2,
                                "goalsAgainst": 13
                            },
                            "goalsDiff": -16,
                            "points": 4,
                            "lastUpdate": "2019-10-24"
                        }
                    ]
                ]
            }
        }
    ]
});

export { apiHost, searchTeams, TeamFixtures, LeagueTable };
