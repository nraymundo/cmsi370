const apiHost = () => {};

const searchTeams = () => 
  Promise.resolve({
    api: {
      results: 1,
      teams: [
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
    }
  });

const returnTeamStats = () =>
  Promise.resolve({
    api: {
      results: 1,
      statistics: {
        matchs: {
          matchsPlayed: {
            home: 6,
            away: 6,
            total: 12
          },
          wins: {
            home: 3,
            away: 0,
            total: 3
          },
          draws: {
            home: 2,
            away: 3,
            total: 5
          },
          loses: {
            home: 1,
            away: 3,
            total: 4
          }
        },
        goals: {
          goalsFor: {
            home: 11,
            away: 7,
            total: 18
          },
          goalsAgainst: {
            home: 5,
            away: 12,
            total: 17
          }
        },
        goalsAvg: {
          goalsFor: {
            home: "1.8",
            away: "1.2",
            total: "1.5"
          },
          goalsAgainst: {
            home: "0.8",
            away: "2.0",
            total: "1.4"
          }
        }
      }
    }
  });

const returnLeagueTable = () =>
  Promise.resolve({
        api: {
          results: 1,
          standings: [
            [
              {
                rank: 1,
                team_id: 40,
                teamName: "Liverpool",
                logo: "https://media.api-football.com/teams/40.png",
                group: "Premier League",
                forme: "WWWDW",
                description: "Promotion - Champions League (Group Stage)",
                all: {
                  matchsPlayed: 12,
                  win: 11,
                  draw: 1,
                  lose: 0,
                  goalsFor: 28,
                  goalsAgainst: 10
                },
                home: {
                  matchsPlayed: 6,
                  win: 6,
                  draw: 0,
                  lose: 0,
                  goalsFor: 17,
                  goalsAgainst: 6
                },
                away: {
                  matchsPlayed: 6,
                  win: 5,
                  draw: 1,
                  lose: 0,
                  goalsFor: 11,
                  goalsAgainst: 4
                },
                goalsDiff: 18,
                points: 34,
                lastUpdate: "2019-11-10"
              },
              {
                rank: 2,
                team_id: 46,
                teamName: "Leicester",
                logo: "https://media.api-football.com/teams/46.png",
                group: "Premier League",
                forme: "WWWWL",
                description: "Promotion - Champions League (Group Stage)",
                all: {
                  matchsPlayed: 12,
                  win: 8,
                  draw: 2,
                  lose: 2,
                  goalsFor: 29,
                  goalsAgainst: 8
                },
                home: {
                  matchsPlayed: 6,
                  win: 5,
                  draw: 1,
                  lose: 0,
                  goalsFor: 14,
                  goalsAgainst: 3
                },
                away: {
                  matchsPlayed: 6,
                  win: 3,
                  draw: 1,
                  lose: 2,
                  goalsFor: 15,
                  goalsAgainst: 5
                },
                goalsDiff: 21,
                points: 26,
                lastUpdate: "2019-11-10"
              },
              {
                rank: 3,
                team_id: 49,
                teamName: "Chelsea",
                logo: "https://media.api-football.com/teams/49.png",
                group: "Premier League",
                forme: "WWWWW",
                description: "Promotion - Champions League (Group Stage)",
                all: {
                  matchsPlayed: 12,
                  win: 8,
                  draw: 2,
                  lose: 2,
                  goalsFor: 27,
                  goalsAgainst: 17
                },
                home: {
                  matchsPlayed: 6,
                  win: 3,
                  draw: 2,
                  lose: 1,
                  goalsFor: 9,
                  goalsAgainst: 5
                },
                away: {
                  matchsPlayed: 6,
                  win: 5,
                  draw: 0,
                  lose: 1,
                  goalsFor: 18,
                  goalsAgainst: 12
                },
                goalsDiff: 10,
                points: 26,
                lastUpdate: "2019-11-10"
              },
              {
                rank: 4,
                team_id: 50,
                teamName: "Manchester City",
                logo: "https://media.api-football.com/teams/50.png",
                group: "Premier League",
                forme: "LWWWL",
                description: "Promotion - Champions League (Group Stage)",
                all: {
                  matchsPlayed: 12,
                  win: 8,
                  draw: 1,
                  lose: 3,
                  goalsFor: 35,
                  goalsAgainst: 13
                },
                home: {
                  matchsPlayed: 6,
                  win: 4,
                  draw: 1,
                  lose: 1,
                  goalsFor: 19,
                  goalsAgainst: 5
                },
                away: {
                  matchsPlayed: 6,
                  win: 4,
                  draw: 0,
                  lose: 2,
                  goalsFor: 16,
                  goalsAgainst: 8
                },
                goalsDiff: 22,
                points: 25,
                lastUpdate: "2019-11-10"
              },
              {
                rank: 5,
                team_id: 62,
                teamName: "Sheffield Utd",
                logo: "https://media.api-football.com/teams/62.png",
                group: "Premier League",
                forme: "DWDWD",
                description: "Promotion - Europa League (Group Stage)",
                all: {
                  matchsPlayed: 12,
                  win: 4,
                  draw: 5,
                  lose: 3,
                  goalsFor: 13,
                  goalsAgainst: 9
                },
                home: {
                  matchsPlayed: 6,
                  win: 3,
                  draw: 0,
                  lose: 3,
                  goalsFor: 6,
                  goalsAgainst: 4
                },
                away: {
                  matchsPlayed: 6,
                  win: 1,
                  draw: 5,
                  lose: 0,
                  goalsFor: 7,
                  goalsAgainst: 5
                },
                goalsDiff: 4,
                points: 17,
                lastUpdate: "2019-11-10"
              },
              {
                rank: 6,
                team_id: 42,
                teamName: "Arsenal",
                logo: "https://media.api-football.com/teams/42.png",
                group: "Premier League",
                forme: "LDDLW",
                description: null,
                all: {
                  matchsPlayed: 12,
                  win: 4,
                  draw: 5,
                  lose: 3,
                  goalsFor: 16,
                  goalsAgainst: 17
                },
                home: {
                  matchsPlayed: 6,
                  win: 3,
                  draw: 3,
                  lose: 0,
                  goalsFor: 11,
                  goalsAgainst: 8
                },
                away: {
                  matchsPlayed: 6,
                  win: 1,
                  draw: 2,
                  lose: 3,
                  goalsFor: 5,
                  goalsAgainst: 9
                },
                goalsDiff: -1,
                points: 17,
                lastUpdate: "2019-11-10"
              },
              {
                rank: 7,
                team_id: 33,
                teamName: "Manchester United",
                logo: "https://media.api-football.com/teams/33.png",
                group: "Premier League",
                forme: "WLWDL",
                description: null,
                all: {
                  matchsPlayed: 12,
                  win: 4,
                  draw: 4,
                  lose: 4,
                  goalsFor: 16,
                  goalsAgainst: 12
                },
                home: {
                  matchsPlayed: 6,
                  win: 3,
                  draw: 2,
                  lose: 1,
                  goalsFor: 11,
                  goalsAgainst: 5
                },
                away: {
                  matchsPlayed: 6,
                  win: 1,
                  draw: 2,
                  lose: 3,
                  goalsFor: 5,
                  goalsAgainst: 7
                },
                goalsDiff: 4,
                points: 16,
                lastUpdate: "2019-11-10"
              },
              {
                rank: 8,
                team_id: 39,
                teamName: "Wolves",
                logo: "https://media.api-football.com/teams/39.png",
                group: "Premier League",
                forme: "WDDDW",
                description: null,
                all: {
                  matchsPlayed: 12,
                  win: 3,
                  draw: 7,
                  lose: 2,
                  goalsFor: 16,
                  goalsAgainst: 15
                },
                home: {
                  matchsPlayed: 6,
                  win: 2,
                  draw: 3,
                  lose: 1,
                  goalsFor: 9,
                  goalsAgainst: 9
                },
                away: {
                  matchsPlayed: 6,
                  win: 1,
                  draw: 4,
                  lose: 1,
                  goalsFor: 7,
                  goalsAgainst: 6
                },
                goalsDiff: 1,
                points: 16,
                lastUpdate: "2019-11-10"
              },
              {
                rank: 9,
                team_id: 35,
                teamName: "Bournemouth",
                logo: "https://media.api-football.com/teams/35.png",
                group: "Premier League",
                forme: "LWDDL",
                description: null,
                all: {
                  matchsPlayed: 12,
                  win: 4,
                  draw: 4,
                  lose: 4,
                  goalsFor: 15,
                  goalsAgainst: 15
                },
                home: {
                  matchsPlayed: 6,
                  win: 2,
                  draw: 3,
                  lose: 1,
                  goalsFor: 8,
                  goalsAgainst: 7
                },
                away: {
                  matchsPlayed: 6,
                  win: 2,
                  draw: 1,
                  lose: 3,
                  goalsFor: 7,
                  goalsAgainst: 8
                },
                goalsDiff: 0,
                points: 16,
                lastUpdate: "2019-11-10"
              },
              {
                rank: 10,
                team_id: 44,
                teamName: "Burnley",
                logo: "https://media.api-football.com/teams/44.png",
                group: "Premier League",
                forme: "WLLLW",
                description: null,
                all: {
                  matchsPlayed: 12,
                  win: 4,
                  draw: 3,
                  lose: 5,
                  goalsFor: 17,
                  goalsAgainst: 18
                },
                home: {
                  matchsPlayed: 6,
                  win: 4,
                  draw: 0,
                  lose: 2,
                  goalsFor: 11,
                  goalsAgainst: 7
                },
                away: {
                  matchsPlayed: 6,
                  win: 0,
                  draw: 3,
                  lose: 3,
                  goalsFor: 6,
                  goalsAgainst: 11
                },
                goalsDiff: -1,
                points: 15,
                lastUpdate: "2019-11-10"
              },
              {
                rank: 11,
                team_id: 51,
                teamName: "Brighton",
                logo: "https://media.api-football.com/teams/51.png",
                group: "Premier League",
                forme: "LWWLW",
                description: null,
                all: {
                  matchsPlayed: 12,
                  win: 4,
                  draw: 3,
                  lose: 5,
                  goalsFor: 15,
                  goalsAgainst: 17
                },
                home: {
                  matchsPlayed: 6,
                  win: 3,
                  draw: 2,
                  lose: 1,
                  goalsFor: 10,
                  goalsAgainst: 6
                },
                away: {
                  matchsPlayed: 6,
                  win: 1,
                  draw: 1,
                  lose: 4,
                  goalsFor: 5,
                  goalsAgainst: 11
                },
                goalsDiff: -2,
                points: 15,
                lastUpdate: "2019-11-10"
              },
              {
                rank: 12,
                team_id: 52,
                teamName: "Crystal Palace",
                logo: "https://media.api-football.com/teams/52.png",
                group: "Premier League",
                forme: "LLDLW",
                description: null,
                all: {
                  matchsPlayed: 12,
                  win: 4,
                  draw: 3,
                  lose: 5,
                  goalsFor: 10,
                  goalsAgainst: 16
                },
                home: {
                  matchsPlayed: 6,
                  win: 2,
                  draw: 2,
                  lose: 2,
                  goalsFor: 4,
                  goalsAgainst: 5
                },
                away: {
                  matchsPlayed: 6,
                  win: 2,
                  draw: 1,
                  lose: 3,
                  goalsFor: 6,
                  goalsAgainst: 11
                },
                goalsDiff: -6,
                points: 15,
                lastUpdate: "2019-11-10"
              },
              {
                rank: 13,
                team_id: 34,
                teamName: "Newcastle",
                logo: "https://media.api-football.com/teams/34.png",
                group: "Premier League",
                forme: "WWDLW",
                description: null,
                all: {
                  matchsPlayed: 12,
                  win: 4,
                  draw: 3,
                  lose: 5,
                  goalsFor: 11,
                  goalsAgainst: 18
                },
                home: {
                  matchsPlayed: 6,
                  win: 2,
                  draw: 3,
                  lose: 1,
                  goalsFor: 5,
                  goalsAgainst: 4
                },
                away: {
                  matchsPlayed: 6,
                  win: 2,
                  draw: 0,
                  lose: 4,
                  goalsFor: 6,
                  goalsAgainst: 14
                },
                goalsDiff: -7,
                points: 15,
                lastUpdate: "2019-11-10"
              },
              {
                rank: 14,
                team_id: 47,
                teamName: "Tottenham",
                logo: "https://media.api-football.com/teams/47.png",
                group: "Premier League",
                forme: "DDLDL",
                description: null,
                all: {
                  matchsPlayed: 12,
                  win: 3,
                  draw: 5,
                  lose: 4,
                  goalsFor: 18,
                  goalsAgainst: 17
                },
                home: {
                  matchsPlayed: 6,
                  win: 3,
                  draw: 2,
                  lose: 1,
                  goalsFor: 11,
                  goalsAgainst: 5
                },
                away: {
                  matchsPlayed: 6,
                  win: 0,
                  draw: 3,
                  lose: 3,
                  goalsFor: 7,
                  goalsAgainst: 12
                },
                goalsDiff: 1,
                points: 14,
                lastUpdate: "2019-11-10"
              },
              {
                rank: 15,
                team_id: 45,
                teamName: "Everton",
                logo: "https://media.api-football.com/teams/45.png",
                group: "Premier League",
                forme: "WDLWL",
                description: null,
                all: {
                  matchsPlayed: 12,
                  win: 4,
                  draw: 2,
                  lose: 6,
                  goalsFor: 13,
                  goalsAgainst: 18
                },
                home: {
                  matchsPlayed: 6,
                  win: 3,
                  draw: 1,
                  lose: 2,
                  goalsFor: 8,
                  goalsAgainst: 8
                },
                away: {
                  matchsPlayed: 6,
                  win: 1,
                  draw: 1,
                  lose: 4,
                  goalsFor: 5,
                  goalsAgainst: 10
                },
                goalsDiff: -5,
                points: 14,
                lastUpdate: "2019-11-10"
              },
              {
                rank: 16,
                team_id: 48,
                teamName: "West Ham",
                logo: "https://media.api-football.com/teams/48.png",
                group: "Premier League",
                forme: "LLDLL",
                description: null,
                all: {
                  matchsPlayed: 12,
                  win: 3,
                  draw: 4,
                  lose: 5,
                  goalsFor: 14,
                  goalsAgainst: 20
                },
                home: {
                  matchsPlayed: 6,
                  win: 2,
                  draw: 1,
                  lose: 3,
                  goalsFor: 8,
                  goalsAgainst: 11
                },
                away: {
                  matchsPlayed: 6,
                  win: 1,
                  draw: 3,
                  lose: 2,
                  goalsFor: 6,
                  goalsAgainst: 9
                },
                goalsDiff: -6,
                points: 13,
                lastUpdate: "2019-11-10"
              },
              {
                rank: 17,
                team_id: 66,
                teamName: "Aston Villa",
                logo: "https://media.api-football.com/teams/66.png",
                group: "Premier League",
                forme: "LLLWW",
                description: null,
                all: {
                  matchsPlayed: 12,
                  win: 3,
                  draw: 2,
                  lose: 7,
                  goalsFor: 17,
                  goalsAgainst: 20
                },
                home: {
                  matchsPlayed: 6,
                  win: 2,
                  draw: 2,
                  lose: 2,
                  goalsFor: 8,
                  goalsAgainst: 7
                },
                away: {
                  matchsPlayed: 6,
                  win: 1,
                  draw: 0,
                  lose: 5,
                  goalsFor: 9,
                  goalsAgainst: 13
                },
                goalsDiff: -3,
                points: 11,
                lastUpdate: "2019-11-10"
              },
              {
                rank: 18,
                team_id: 38,
                teamName: "Watford",
                logo: "https://media.api-football.com/teams/38.png",
                group: "Premier League",
                forme: "WLDDD",
                description: "Relegation - Championship",
                all: {
                  matchsPlayed: 12,
                  win: 1,
                  draw: 5,
                  lose: 6,
                  goalsFor: 8,
                  goalsAgainst: 23
                },
                home: {
                  matchsPlayed: 6,
                  win: 0,
                  draw: 3,
                  lose: 3,
                  goalsFor: 4,
                  goalsAgainst: 10
                },
                away: {
                  matchsPlayed: 6,
                  win: 1,
                  draw: 2,
                  lose: 3,
                  goalsFor: 4,
                  goalsAgainst: 13
                },
                goalsDiff: -15,
                points: 8,
                lastUpdate: "2019-11-10"
              },
              {
                rank: 19,
                team_id: 41,
                teamName: "Southampton",
                logo: "https://media.api-football.com/teams/41.png",
                group: "Premier League",
                forme: "LLLDL",
                description: "Relegation - Championship",
                all: {
                  matchsPlayed: 12,
                  win: 2,
                  draw: 2,
                  lose: 8,
                  goalsFor: 11,
                  goalsAgainst: 29
                },
                home: {
                  matchsPlayed: 6,
                  win: 0,
                  draw: 1,
                  lose: 5,
                  goalsFor: 5,
                  goalsAgainst: 21
                },
                away: {
                  matchsPlayed: 6,
                  win: 2,
                  draw: 1,
                  lose: 3,
                  goalsFor: 6,
                  goalsAgainst: 8
                },
                goalsDiff: -18,
                points: 8,
                lastUpdate: "2019-11-10"
              },
              {
                rank: 20,
                team_id: 71,
                teamName: "Norwich",
                logo: "https://media.api-football.com/teams/71.png",
                group: "Premier League",
                forme: "LLLDL",
                description: "Relegation - Championship",
                all: {
                  matchsPlayed: 12,
                  win: 2,
                  draw: 1,
                  lose: 9,
                  goalsFor: 11,
                  goalsAgainst: 28
                },
                home: {
                  matchsPlayed: 6,
                  win: 2,
                  draw: 0,
                  lose: 4,
                  goalsFor: 10,
                  goalsAgainst: 16
                },
                away: {
                  matchsPlayed: 6,
                  win: 0,
                  draw: 1,
                  lose: 5,
                  goalsFor: 1,
                  goalsAgainst: 12
                },
                goalsDiff: -17,
                points: 7,
                lastUpdate: "2019-11-10"
              }
            ]
          ]
        }
  });

const returnTeamFixtures = () =>
  Promise.resolve({
        api: {
          results: 38,
          fixtures: [
            {
              fixture_id: 157022,
              league_id: 524,
              league: {
                name: "Premier League",
                country: "England",
                logo: "https://media.api-football.com/leagues/2.png",
                flag: "https://media.api-football.com/flags/gb.svg"
              },
              event_date: "2019-08-10T16:30:00+00:00",
              event_timestamp: 1565454600,
              firstHalfStart: 1565454600,
              secondHalfStart: 1565458200,
              round: "Regular Season - 1",
              status: "Match Finished",
              statusShort: "FT",
              elapsed: 90,
              venue: "Tottenham Hotspur Stadium (London)",
              referee: "Chris Kavanagh, England",
              homeTeam: {
                team_id: 47,
                team_name: "Tottenham",
                logo: "https://media.api-football.com/teams/47.png"
              },
              awayTeam: {
                team_id: 66,
                team_name: "Aston Villa",
                logo: "https://media.api-football.com/teams/66.png"
              },
              goalsHomeTeam: 3,
              goalsAwayTeam: 1,
              score: {
                halftime: "0-1",
                fulltime: "3-1",
                extratime: null,
                penalty: null
              }
            },
            {
              fixture_id: 157030,
              league_id: 524,
              league: {
                name: "Premier League",
                country: "England",
                logo: "https://media.api-football.com/leagues/2.png",
                flag: "https://media.api-football.com/flags/gb.svg"
              },
              event_date: "2019-08-17T16:30:00+00:00",
              event_timestamp: 1566059400,
              firstHalfStart: 1566059400,
              secondHalfStart: 1566063000,
              round: "Regular Season - 2",
              status: "Match Finished",
              statusShort: "FT",
              elapsed: 90,
              venue: "Etihad Stadium (Manchester)",
              referee: "Michael Oliver, England",
              homeTeam: {
                team_id: 50,
                team_name: "Manchester City",
                logo: "https://media.api-football.com/teams/50.png"
              },
              awayTeam: {
                team_id: 47,
                team_name: "Tottenham",
                logo: "https://media.api-football.com/teams/47.png"
              },
              goalsHomeTeam: 2,
              goalsAwayTeam: 2,
              score: {
                halftime: "2-1",
                fulltime: "2-2",
                extratime: null,
                penalty: null
              }
            },
            {
              fixture_id: 157042,
              league_id: 524,
              league: {
                name: "Premier League",
                country: "England",
                logo: "https://media.api-football.com/leagues/2.png",
                flag: "https://media.api-football.com/flags/gb.svg"
              },
              event_date: "2019-08-25T15:30:00+00:00",
              event_timestamp: 1566747000,
              firstHalfStart: 1566747000,
              secondHalfStart: 1566750600,
              round: "Regular Season - 3",
              status: "Match Finished",
              statusShort: "FT",
              elapsed: 90,
              venue: "Tottenham Hotspur Stadium (London)",
              referee: "Mike Dean, England",
              homeTeam: {
                team_id: 47,
                team_name: "Tottenham",
                logo: "https://media.api-football.com/teams/47.png"
              },
              awayTeam: {
                team_id: 34,
                team_name: "Newcastle",
                logo: "https://media.api-football.com/teams/34.png"
              },
              goalsHomeTeam: 0,
              goalsAwayTeam: 1,
              score: {
                halftime: "0-1",
                fulltime: "0-1",
                extratime: null,
                penalty: null
              }
            },
            {
              fixture_id: 157045,
              league_id: 524,
              league: {
                name: "Premier League",
                country: "England",
                logo: "https://media.api-football.com/leagues/2.png",
                flag: "https://media.api-football.com/flags/gb.svg"
              },
              event_date: "2019-09-01T15:30:00+00:00",
              event_timestamp: 1567351800,
              firstHalfStart: 1567351800,
              secondHalfStart: 1567355400,
              round: "Regular Season - 4",
              status: "Match Finished",
              statusShort: "FT",
              elapsed: 90,
              venue: "Emirates Stadium (London)",
              referee: "Martin Atkinson, England",
              homeTeam: {
                team_id: 42,
                team_name: "Arsenal",
                logo: "https://media.api-football.com/teams/42.png"
              },
              awayTeam: {
                team_id: 47,
                team_name: "Tottenham",
                logo: "https://media.api-football.com/teams/47.png"
              },
              goalsHomeTeam: 2,
              goalsAwayTeam: 2,
              score: {
                halftime: "1-2",
                fulltime: "2-2",
                extratime: null,
                penalty: null
              }
            },
            {
              fixture_id: 157062,
              league_id: 524,
              league: {
                name: "Premier League",
                country: "England",
                logo: "https://media.api-football.com/leagues/2.png",
                flag: "https://media.api-football.com/flags/gb.svg"
              },
              event_date: "2019-09-14T14:00:00+00:00",
              event_timestamp: 1568469600,
              firstHalfStart: 1568469600,
              secondHalfStart: 1568473200,
              round: "Regular Season - 5",
              status: "Match Finished",
              statusShort: "FT",
              elapsed: 90,
              venue: "Tottenham Hotspur Stadium (London)",
              referee: "Craig Pawson, England",
              homeTeam: {
                team_id: 47,
                team_name: "Tottenham",
                logo: "https://media.api-football.com/teams/47.png"
              },
              awayTeam: {
                team_id: 52,
                team_name: "Crystal Palace",
                logo: "https://media.api-football.com/teams/52.png"
              },
              goalsHomeTeam: 4,
              goalsAwayTeam: 0,
              score: {
                halftime: "4-0",
                fulltime: "4-0",
                extratime: null,
                penalty: null
              }
            },
            {
              fixture_id: 157070,
              league_id: 524,
              league: {
                name: "Premier League",
                country: "England",
                logo: "https://media.api-football.com/leagues/2.png",
                flag: "https://media.api-football.com/flags/gb.svg"
              },
              event_date: "2019-09-21T11:30:00+00:00",
              event_timestamp: 1569065400,
              firstHalfStart: 1569065400,
              secondHalfStart: 1569069000,
              round: "Regular Season - 6",
              status: "Match Finished",
              statusShort: "FT",
              elapsed: 90,
              venue: "King Power Stadium (Leicester, Leicestershire)",
              referee: "Paul Tierney, England",
              homeTeam: {
                team_id: 46,
                team_name: "Leicester",
                logo: "https://media.api-football.com/teams/46.png"
              },
              awayTeam: {
                team_id: 47,
                team_name: "Tottenham",
                logo: "https://media.api-football.com/teams/47.png"
              },
              goalsHomeTeam: 2,
              goalsAwayTeam: 1,
              score: {
                halftime: "0-1",
                fulltime: "2-1",
                extratime: null,
                penalty: null
              }
            },
            {
              fixture_id: 157083,
              league_id: 524,
              league: {
                name: "Premier League",
                country: "England",
                logo: "https://media.api-football.com/leagues/2.png",
                flag: "https://media.api-football.com/flags/gb.svg"
              },
              event_date: "2019-09-28T14:00:00+00:00",
              event_timestamp: 1569679200,
              firstHalfStart: 1569679200,
              secondHalfStart: 1569682800,
              round: "Regular Season - 7",
              status: "Match Finished",
              statusShort: "FT",
              elapsed: 90,
              venue: "Tottenham Hotspur Stadium (London)",
              referee: "Graham Scott, England",
              homeTeam: {
                team_id: 47,
                team_name: "Tottenham",
                logo: "https://media.api-football.com/teams/47.png"
              },
              awayTeam: {
                team_id: 41,
                team_name: "Southampton",
                logo: "https://media.api-football.com/teams/41.png"
              },
              goalsHomeTeam: 2,
              goalsAwayTeam: 1,
              score: {
                halftime: "2-1",
                fulltime: "2-1",
                extratime: null,
                penalty: null
              }
            },
            {
              fixture_id: 157086,
              league_id: 524,
              league: {
                name: "Premier League",
                country: "England",
                logo: "https://media.api-football.com/leagues/2.png",
                flag: "https://media.api-football.com/flags/gb.svg"
              },
              event_date: "2019-10-05T11:30:00+00:00",
              event_timestamp: 1570275000,
              firstHalfStart: 1570275000,
              secondHalfStart: 1570278600,
              round: "Regular Season - 8",
              status: "Match Finished",
              statusShort: "FT",
              elapsed: 90,
              venue:
                "The American Express Community Stadium (Falmer, East Sussex)",
              referee: "Jonathan Moss, England",
              homeTeam: {
                team_id: 51,
                team_name: "Brighton",
                logo: "https://media.api-football.com/teams/51.png"
              },
              awayTeam: {
                team_id: 47,
                team_name: "Tottenham",
                logo: "https://media.api-football.com/teams/47.png"
              },
              goalsHomeTeam: 3,
              goalsAwayTeam: 0,
              score: {
                halftime: "2-0",
                fulltime: "3-0",
                extratime: null,
                penalty: null
              }
            },
            {
              fixture_id: 157103,
              league_id: 524,
              league: {
                name: "Premier League",
                country: "England",
                logo: "https://media.api-football.com/leagues/2.png",
                flag: "https://media.api-football.com/flags/gb.svg"
              },
              event_date: "2019-10-19T14:00:00+00:00",
              event_timestamp: 1571493600,
              firstHalfStart: 1571493600,
              secondHalfStart: 1571497200,
              round: "Regular Season - 9",
              status: "Match Finished",
              statusShort: "FT",
              elapsed: 90,
              venue: "Tottenham Hotspur Stadium (London)",
              referee: "Chris Kavanagh, England",
              homeTeam: {
                team_id: 47,
                team_name: "Tottenham",
                logo: "https://media.api-football.com/teams/47.png"
              },
              awayTeam: {
                team_id: 38,
                team_name: "Watford",
                logo: "https://media.api-football.com/teams/38.png"
              },
              goalsHomeTeam: 1,
              goalsAwayTeam: 1,
              score: {
                halftime: "0-1",
                fulltime: "1-1",
                extratime: null,
                penalty: null
              }
            },
            {
              fixture_id: 157108,
              league_id: 524,
              league: {
                name: "Premier League",
                country: "England",
                logo: "https://media.api-football.com/leagues/2.png",
                flag: "https://media.api-football.com/flags/gb.svg"
              },
              event_date: "2019-10-27T16:30:00+00:00",
              event_timestamp: 1572193800,
              firstHalfStart: 1572193800,
              secondHalfStart: 1572197400,
              round: "Regular Season - 10",
              status: "Match Finished",
              statusShort: "FT",
              elapsed: 90,
              venue: "Anfield",
              referee: "Anthony Taylor, England",
              homeTeam: {
                team_id: 40,
                team_name: "Liverpool",
                logo: "https://media.api-football.com/teams/40.png"
              },
              awayTeam: {
                team_id: 47,
                team_name: "Tottenham",
                logo: "https://media.api-football.com/teams/47.png"
              },
              goalsHomeTeam: 2,
              goalsAwayTeam: 1,
              score: {
                halftime: "0-1",
                fulltime: "2-1",
                extratime: null,
                penalty: null
              }
            },
            {
              fixture_id: 157120,
              league_id: 524,
              league: {
                name: "Premier League",
                country: "England",
                logo: "https://media.api-football.com/leagues/2.png",
                flag: "https://media.api-football.com/flags/gb.svg"
              },
              event_date: "2019-11-03T16:30:00+00:00",
              event_timestamp: 1572798600,
              firstHalfStart: 1572798600,
              secondHalfStart: 1572802200,
              round: "Regular Season - 11",
              status: "Match Finished",
              statusShort: "FT",
              elapsed: 90,
              venue: "Goodison Park, Liverpool",
              referee: "Martin Atkinson, England",
              homeTeam: {
                team_id: 45,
                team_name: "Everton",
                logo: "https://media.api-football.com/teams/45.png"
              },
              awayTeam: {
                team_id: 47,
                team_name: "Tottenham",
                logo: "https://media.api-football.com/teams/47.png"
              },
              goalsHomeTeam: 1,
              goalsAwayTeam: 1,
              score: {
                halftime: "0-0",
                fulltime: "1-1",
                extratime: null,
                penalty: null
              }
            },
            {
              fixture_id: 157133,
              league_id: 524,
              league: {
                name: "Premier League",
                country: "England",
                logo: "https://media.api-football.com/leagues/2.png",
                flag: "https://media.api-football.com/flags/gb.svg"
              },
              event_date: "2019-11-09T15:00:00+00:00",
              event_timestamp: 1573311600,
              firstHalfStart: 1573311600,
              secondHalfStart: 1573315200,
              round: "Regular Season - 12",
              status: "Match Finished",
              statusShort: "FT",
              elapsed: 90,
              venue: "Tottenham Hotspur Stadium",
              referee: "Graham Scott, England",
              homeTeam: {
                team_id: 47,
                team_name: "Tottenham",
                logo: "https://media.api-football.com/teams/47.png"
              },
              awayTeam: {
                team_id: 62,
                team_name: "Sheffield Utd",
                logo: "https://media.api-football.com/teams/62.png"
              },
              goalsHomeTeam: 1,
              goalsAwayTeam: 1,
              score: {
                halftime: "0-0",
                fulltime: "1-1",
                extratime: null,
                penalty: null
              }
            },
            {
              fixture_id: 157144,
              league_id: 524,
              league: {
                name: "Premier League",
                country: "England",
                logo: "https://media.api-football.com/leagues/2.png",
                flag: "https://media.api-football.com/flags/gb.svg"
              },
              event_date: "2019-11-23T12:30:00+00:00",
              event_timestamp: 1574512200,
              firstHalfStart: null,
              secondHalfStart: null,
              round: "Regular Season - 13",
              status: "Not Started",
              statusShort: "NS",
              elapsed: 0,
              venue: "London Stadium (London)",
              referee: null,
              homeTeam: {
                team_id: 48,
                team_name: "West Ham",
                logo: "https://media.api-football.com/teams/48.png"
              },
              awayTeam: {
                team_id: 47,
                team_name: "Tottenham",
                logo: "https://media.api-football.com/teams/47.png"
              },
              goalsHomeTeam: null,
              goalsAwayTeam: null,
              score: {
                halftime: null,
                fulltime: null,
                extratime: null,
                penalty: null
              }
            },
            {
              fixture_id: 157153,
              league_id: 524,
              league: {
                name: "Premier League",
                country: "England",
                logo: "https://media.api-football.com/leagues/2.png",
                flag: "https://media.api-football.com/flags/gb.svg"
              },
              event_date: "2019-11-30T15:00:00+00:00",
              event_timestamp: 1575126000,
              firstHalfStart: null,
              secondHalfStart: null,
              round: "Regular Season - 14",
              status: "Not Started",
              statusShort: "NS",
              elapsed: 0,
              venue: "Tottenham Hotspur Stadium (London)",
              referee: null,
              homeTeam: {
                team_id: 47,
                team_name: "Tottenham",
                logo: "https://media.api-football.com/teams/47.png"
              },
              awayTeam: {
                team_id: 35,
                team_name: "Bournemouth",
                logo: "https://media.api-football.com/teams/35.png"
              },
              goalsHomeTeam: null,
              goalsAwayTeam: null,
              score: {
                halftime: null,
                fulltime: null,
                extratime: null,
                penalty: null
              }
            },
            {
              fixture_id: 157160,
              league_id: 524,
              league: {
                name: "Premier League",
                country: "England",
                logo: "https://media.api-football.com/leagues/2.png",
                flag: "https://media.api-football.com/flags/gb.svg"
              },
              event_date: "2019-12-04T19:30:00+00:00",
              event_timestamp: 1575487800,
              firstHalfStart: null,
              secondHalfStart: null,
              round: "Regular Season - 15",
              status: "Not Started",
              statusShort: "NS",
              elapsed: 0,
              venue: "Old Trafford (Manchester)",
              referee: null,
              homeTeam: {
                team_id: 33,
                team_name: "Manchester United",
                logo: "https://media.api-football.com/teams/33.png"
              },
              awayTeam: {
                team_id: 47,
                team_name: "Tottenham",
                logo: "https://media.api-football.com/teams/47.png"
              },
              goalsHomeTeam: null,
              goalsAwayTeam: null,
              score: {
                halftime: null,
                fulltime: null,
                extratime: null,
                penalty: null
              }
            },
            {
              fixture_id: 157172,
              league_id: 524,
              league: {
                name: "Premier League",
                country: "England",
                logo: "https://media.api-football.com/leagues/2.png",
                flag: "https://media.api-football.com/flags/gb.svg"
              },
              event_date: "2019-12-07T15:00:00+00:00",
              event_timestamp: 1575730800,
              firstHalfStart: null,
              secondHalfStart: null,
              round: "Regular Season - 16",
              status: "Not Started",
              statusShort: "NS",
              elapsed: 0,
              venue: "Tottenham Hotspur Stadium (London)",
              referee: null,
              homeTeam: {
                team_id: 47,
                team_name: "Tottenham",
                logo: "https://media.api-football.com/teams/47.png"
              },
              awayTeam: {
                team_id: 44,
                team_name: "Burnley",
                logo: "https://media.api-football.com/teams/44.png"
              },
              goalsHomeTeam: null,
              goalsAwayTeam: null,
              score: {
                halftime: null,
                fulltime: null,
                extratime: null,
                penalty: null
              }
            },
            {
              fixture_id: 157184,
              league_id: 524,
              league: {
                name: "Premier League",
                country: "England",
                logo: "https://media.api-football.com/leagues/2.png",
                flag: "https://media.api-football.com/flags/gb.svg"
              },
              event_date: "2019-12-15T14:00:00+00:00",
              event_timestamp: 1576418400,
              firstHalfStart: null,
              secondHalfStart: null,
              round: "Regular Season - 17",
              status: "Not Started",
              statusShort: "NS",
              elapsed: 0,
              venue: "Molineux Stadium (Wolverhampton, West Midlands)",
              referee: null,
              homeTeam: {
                team_id: 39,
                team_name: "Wolves",
                logo: "https://media.api-football.com/teams/39.png"
              },
              awayTeam: {
                team_id: 47,
                team_name: "Tottenham",
                logo: "https://media.api-football.com/teams/47.png"
              },
              goalsHomeTeam: null,
              goalsAwayTeam: null,
              score: {
                halftime: null,
                fulltime: null,
                extratime: null,
                penalty: null
              }
            },
            {
              fixture_id: 157192,
              league_id: 524,
              league: {
                name: "Premier League",
                country: "England",
                logo: "https://media.api-football.com/leagues/2.png",
                flag: "https://media.api-football.com/flags/gb.svg"
              },
              event_date: "2019-12-22T16:30:00+00:00",
              event_timestamp: 1577032200,
              firstHalfStart: null,
              secondHalfStart: null,
              round: "Regular Season - 18",
              status: "Not Started",
              statusShort: "NS",
              elapsed: 0,
              venue: "Tottenham Hotspur Stadium (London)",
              referee: null,
              homeTeam: {
                team_id: 47,
                team_name: "Tottenham",
                logo: "https://media.api-football.com/teams/47.png"
              },
              awayTeam: {
                team_id: 49,
                team_name: "Chelsea",
                logo: "https://media.api-football.com/teams/49.png"
              },
              goalsHomeTeam: null,
              goalsAwayTeam: null,
              score: {
                halftime: null,
                fulltime: null,
                extratime: null,
                penalty: null
              }
            },
            {
              fixture_id: 157203,
              league_id: 524,
              league: {
                name: "Premier League",
                country: "England",
                logo: "https://media.api-football.com/leagues/2.png",
                flag: "https://media.api-football.com/flags/gb.svg"
              },
              event_date: "2019-12-26T12:30:00+00:00",
              event_timestamp: 1577363400,
              firstHalfStart: null,
              secondHalfStart: null,
              round: "Regular Season - 19",
              status: "Not Started",
              statusShort: "NS",
              elapsed: 0,
              venue: "Tottenham Hotspur Stadium (London)",
              referee: null,
              homeTeam: {
                team_id: 47,
                team_name: "Tottenham",
                logo: "https://media.api-football.com/teams/47.png"
              },
              awayTeam: {
                team_id: 51,
                team_name: "Brighton",
                logo: "https://media.api-football.com/teams/51.png"
              },
              goalsHomeTeam: null,
              goalsAwayTeam: null,
              score: {
                halftime: null,
                fulltime: null,
                extratime: null,
                penalty: null
              }
            },
            {
              fixture_id: 157211,
              league_id: 524,
              league: {
                name: "Premier League",
                country: "England",
                logo: "https://media.api-football.com/leagues/2.png",
                flag: "https://media.api-football.com/flags/gb.svg"
              },
              event_date: "2019-12-28T17:30:00+00:00",
              event_timestamp: 1577554200,
              firstHalfStart: null,
              secondHalfStart: null,
              round: "Regular Season - 20",
              status: "Not Started",
              statusShort: "NS",
              elapsed: 0,
              venue: "Carrow Road (Norwich, Norfolk)",
              referee: null,
              homeTeam: {
                team_id: 71,
                team_name: "Norwich",
                logo: "https://media.api-football.com/teams/71.png"
              },
              awayTeam: {
                team_id: 47,
                team_name: "Tottenham",
                logo: "https://media.api-football.com/teams/47.png"
              },
              goalsHomeTeam: null,
              goalsAwayTeam: null,
              score: {
                halftime: null,
                fulltime: null,
                extratime: null,
                penalty: null
              }
            },
            {
              fixture_id: 157222,
              league_id: 524,
              league: {
                name: "Premier League",
                country: "England",
                logo: "https://media.api-football.com/leagues/2.png",
                flag: "https://media.api-football.com/flags/gb.svg"
              },
              event_date: "2020-01-01T15:00:00+00:00",
              event_timestamp: 1577890800,
              firstHalfStart: null,
              secondHalfStart: null,
              round: "Regular Season - 21",
              status: "Not Started",
              statusShort: "NS",
              elapsed: 0,
              venue: "St. Mary's Stadium (Southampton, Hampshire)",
              referee: null,
              homeTeam: {
                team_id: 41,
                team_name: "Southampton",
                logo: "https://media.api-football.com/teams/41.png"
              },
              awayTeam: {
                team_id: 47,
                team_name: "Tottenham",
                logo: "https://media.api-football.com/teams/47.png"
              },
              goalsHomeTeam: null,
              goalsAwayTeam: null,
              score: {
                halftime: null,
                fulltime: null,
                extratime: null,
                penalty: null
              }
            },
            {
              fixture_id: 157233,
              league_id: 524,
              league: {
                name: "Premier League",
                country: "England",
                logo: "https://media.api-football.com/leagues/2.png",
                flag: "https://media.api-football.com/flags/gb.svg"
              },
              event_date: "2020-01-11T17:30:00+00:00",
              event_timestamp: 1578763800,
              firstHalfStart: null,
              secondHalfStart: null,
              round: "Regular Season - 22",
              status: "Not Started",
              statusShort: "NS",
              elapsed: 0,
              venue: "Tottenham Hotspur Stadium (London)",
              referee: null,
              homeTeam: {
                team_id: 47,
                team_name: "Tottenham",
                logo: "https://media.api-football.com/teams/47.png"
              },
              awayTeam: {
                team_id: 40,
                team_name: "Liverpool",
                logo: "https://media.api-football.com/teams/40.png"
              },
              goalsHomeTeam: null,
              goalsAwayTeam: null,
              score: {
                halftime: null,
                fulltime: null,
                extratime: null,
                penalty: null
              }
            },
            {
              fixture_id: 157243,
              league_id: 524,
              league: {
                name: "Premier League",
                country: "England",
                logo: "https://media.api-football.com/leagues/2.png",
                flag: "https://media.api-football.com/flags/gb.svg"
              },
              event_date: "2020-01-18T12:30:00+00:00",
              event_timestamp: 1579350600,
              firstHalfStart: null,
              secondHalfStart: null,
              round: "Regular Season - 23",
              status: "Not Started",
              statusShort: "NS",
              elapsed: 0,
              venue: "Vicarage Road (Watford)",
              referee: null,
              homeTeam: {
                team_id: 38,
                team_name: "Watford",
                logo: "https://media.api-football.com/teams/38.png"
              },
              awayTeam: {
                team_id: 47,
                team_name: "Tottenham",
                logo: "https://media.api-football.com/teams/47.png"
              },
              goalsHomeTeam: null,
              goalsAwayTeam: null,
              score: {
                halftime: null,
                fulltime: null,
                extratime: null,
                penalty: null
              }
            },
            {
              fixture_id: 157253,
              league_id: 524,
              league: {
                name: "Premier League",
                country: "England",
                logo: "https://media.api-football.com/leagues/2.png",
                flag: "https://media.api-football.com/flags/gb.svg"
              },
              event_date: "2020-01-22T19:30:00+00:00",
              event_timestamp: 1579721400,
              firstHalfStart: null,
              secondHalfStart: null,
              round: "Regular Season - 24",
              status: "Not Started",
              statusShort: "NS",
              elapsed: 0,
              venue: "Tottenham Hotspur Stadium (London)",
              referee: null,
              homeTeam: {
                team_id: 47,
                team_name: "Tottenham",
                logo: "https://media.api-football.com/teams/47.png"
              },
              awayTeam: {
                team_id: 71,
                team_name: "Norwich",
                logo: "https://media.api-football.com/teams/71.png"
              },
              goalsHomeTeam: null,
              goalsAwayTeam: null,
              score: {
                halftime: null,
                fulltime: null,
                extratime: null,
                penalty: null
              }
            },
            {
              fixture_id: 157262,
              league_id: 524,
              league: {
                name: "Premier League",
                country: "England",
                logo: "https://media.api-football.com/leagues/2.png",
                flag: "https://media.api-football.com/flags/gb.svg"
              },
              event_date: "2020-02-01T15:00:00+00:00",
              event_timestamp: 1580569200,
              firstHalfStart: null,
              secondHalfStart: null,
              round: "Regular Season - 25",
              status: "Not Started",
              statusShort: "NS",
              elapsed: 0,
              venue: "Tottenham Hotspur Stadium (London)",
              referee: null,
              homeTeam: {
                team_id: 47,
                team_name: "Tottenham",
                logo: "https://media.api-football.com/teams/47.png"
              },
              awayTeam: {
                team_id: 50,
                team_name: "Manchester City",
                logo: "https://media.api-football.com/teams/50.png"
              },
              goalsHomeTeam: null,
              goalsAwayTeam: null,
              score: {
                halftime: null,
                fulltime: null,
                extratime: null,
                penalty: null
              }
            },
            {
              fixture_id: 157266,
              league_id: 524,
              league: {
                name: "Premier League",
                country: "England",
                logo: "https://media.api-football.com/leagues/2.png",
                flag: "https://media.api-football.com/flags/gb.svg"
              },
              event_date: "2020-02-08T15:00:00+00:00",
              event_timestamp: 1581174000,
              firstHalfStart: null,
              secondHalfStart: null,
              round: "Regular Season - 26",
              status: "Not Started",
              statusShort: "NS",
              elapsed: 0,
              venue: "Villa Park (Birmingham)",
              referee: null,
              homeTeam: {
                team_id: 66,
                team_name: "Aston Villa",
                logo: "https://media.api-football.com/teams/66.png"
              },
              awayTeam: {
                team_id: 47,
                team_name: "Tottenham",
                logo: "https://media.api-football.com/teams/47.png"
              },
              goalsHomeTeam: null,
              goalsAwayTeam: null,
              score: {
                halftime: null,
                fulltime: null,
                extratime: null,
                penalty: null
              }
            },
            {
              fixture_id: 157277,
              league_id: 524,
              league: {
                name: "Premier League",
                country: "England",
                logo: "https://media.api-football.com/leagues/2.png",
                flag: "https://media.api-football.com/flags/gb.svg"
              },
              event_date: "2020-02-22T15:00:00+00:00",
              event_timestamp: 1582383600,
              firstHalfStart: null,
              secondHalfStart: null,
              round: "Regular Season - 27",
              status: "Not Started",
              statusShort: "NS",
              elapsed: 0,
              venue: "Stamford Bridge (London)",
              referee: null,
              homeTeam: {
                team_id: 49,
                team_name: "Chelsea",
                logo: "https://media.api-football.com/teams/49.png"
              },
              awayTeam: {
                team_id: 47,
                team_name: "Tottenham",
                logo: "https://media.api-football.com/teams/47.png"
              },
              goalsHomeTeam: null,
              goalsAwayTeam: null,
              score: {
                halftime: null,
                fulltime: null,
                extratime: null,
                penalty: null
              }
            },
            {
              fixture_id: 157292,
              league_id: 524,
              league: {
                name: "Premier League",
                country: "England",
                logo: "https://media.api-football.com/leagues/2.png",
                flag: "https://media.api-football.com/flags/gb.svg"
              },
              event_date: "2020-02-29T15:00:00+00:00",
              event_timestamp: 1582988400,
              firstHalfStart: null,
              secondHalfStart: null,
              round: "Regular Season - 28",
              status: "Not Started",
              statusShort: "NS",
              elapsed: 0,
              venue: "Tottenham Hotspur Stadium (London)",
              referee: null,
              homeTeam: {
                team_id: 47,
                team_name: "Tottenham",
                logo: "https://media.api-football.com/teams/47.png"
              },
              awayTeam: {
                team_id: 39,
                team_name: "Wolves",
                logo: "https://media.api-football.com/teams/39.png"
              },
              goalsHomeTeam: null,
              goalsAwayTeam: null,
              score: {
                halftime: null,
                fulltime: null,
                extratime: null,
                penalty: null
              }
            },
            {
              fixture_id: 157296,
              league_id: 524,
              league: {
                name: "Premier League",
                country: "England",
                logo: "https://media.api-football.com/leagues/2.png",
                flag: "https://media.api-football.com/flags/gb.svg"
              },
              event_date: "2020-03-07T15:00:00+00:00",
              event_timestamp: 1583593200,
              firstHalfStart: null,
              secondHalfStart: null,
              round: "Regular Season - 29",
              status: "Not Started",
              statusShort: "NS",
              elapsed: 0,
              venue: "Turf Moor (Burnley)",
              referee: null,
              homeTeam: {
                team_id: 44,
                team_name: "Burnley",
                logo: "https://media.api-football.com/teams/44.png"
              },
              awayTeam: {
                team_id: 47,
                team_name: "Tottenham",
                logo: "https://media.api-football.com/teams/47.png"
              },
              goalsHomeTeam: null,
              goalsAwayTeam: null,
              score: {
                halftime: null,
                fulltime: null,
                extratime: null,
                penalty: null
              }
            },
            {
              fixture_id: 157312,
              league_id: 524,
              league: {
                name: "Premier League",
                country: "England",
                logo: "https://media.api-football.com/leagues/2.png",
                flag: "https://media.api-football.com/flags/gb.svg"
              },
              event_date: "2020-03-14T15:00:00+00:00",
              event_timestamp: 1584198000,
              firstHalfStart: null,
              secondHalfStart: null,
              round: "Regular Season - 30",
              status: "Not Started",
              statusShort: "NS",
              elapsed: 0,
              venue: "Tottenham Hotspur Stadium (London)",
              referee: null,
              homeTeam: {
                team_id: 47,
                team_name: "Tottenham",
                logo: "https://media.api-football.com/teams/47.png"
              },
              awayTeam: {
                team_id: 33,
                team_name: "Manchester United",
                logo: "https://media.api-football.com/teams/33.png"
              },
              goalsHomeTeam: null,
              goalsAwayTeam: null,
              score: {
                halftime: null,
                fulltime: null,
                extratime: null,
                penalty: null
              }
            },
            {
              fixture_id: 157323,
              league_id: 524,
              league: {
                name: "Premier League",
                country: "England",
                logo: "https://media.api-football.com/leagues/2.png",
                flag: "https://media.api-football.com/flags/gb.svg"
              },
              event_date: "2020-03-21T15:00:00+00:00",
              event_timestamp: 1584802800,
              firstHalfStart: null,
              secondHalfStart: null,
              round: "Regular Season - 31",
              status: "Not Started",
              statusShort: "NS",
              elapsed: 0,
              venue: "Tottenham Hotspur Stadium (London)",
              referee: null,
              homeTeam: {
                team_id: 47,
                team_name: "Tottenham",
                logo: "https://media.api-football.com/teams/47.png"
              },
              awayTeam: {
                team_id: 48,
                team_name: "West Ham",
                logo: "https://media.api-football.com/teams/48.png"
              },
              goalsHomeTeam: null,
              goalsAwayTeam: null,
              score: {
                halftime: null,
                fulltime: null,
                extratime: null,
                penalty: null
              }
            },
            {
              fixture_id: 157332,
              league_id: 524,
              league: {
                name: "Premier League",
                country: "England",
                logo: "https://media.api-football.com/leagues/2.png",
                flag: "https://media.api-football.com/flags/gb.svg"
              },
              event_date: "2020-04-04T14:00:00+00:00",
              event_timestamp: 1586008800,
              firstHalfStart: null,
              secondHalfStart: null,
              round: "Regular Season - 32",
              status: "Not Started",
              statusShort: "NS",
              elapsed: 0,
              venue: "Bramall Lane (Sheffield)",
              referee: null,
              homeTeam: {
                team_id: 62,
                team_name: "Sheffield Utd",
                logo: "https://media.api-football.com/teams/62.png"
              },
              awayTeam: {
                team_id: 47,
                team_name: "Tottenham",
                logo: "https://media.api-football.com/teams/47.png"
              },
              goalsHomeTeam: null,
              goalsAwayTeam: null,
              score: {
                halftime: null,
                fulltime: null,
                extratime: null,
                penalty: null
              }
            },
            {
              fixture_id: 157343,
              league_id: 524,
              league: {
                name: "Premier League",
                country: "England",
                logo: "https://media.api-football.com/leagues/2.png",
                flag: "https://media.api-football.com/flags/gb.svg"
              },
              event_date: "2020-04-11T14:00:00+00:00",
              event_timestamp: 1586613600,
              firstHalfStart: null,
              secondHalfStart: null,
              round: "Regular Season - 33",
              status: "Not Started",
              statusShort: "NS",
              elapsed: 0,
              venue: "Tottenham Hotspur Stadium (London)",
              referee: null,
              homeTeam: {
                team_id: 47,
                team_name: "Tottenham",
                logo: "https://media.api-football.com/teams/47.png"
              },
              awayTeam: {
                team_id: 45,
                team_name: "Everton",
                logo: "https://media.api-football.com/teams/45.png"
              },
              goalsHomeTeam: null,
              goalsAwayTeam: null,
              score: {
                halftime: null,
                fulltime: null,
                extratime: null,
                penalty: null
              }
            },
            {
              fixture_id: 157345,
              league_id: 524,
              league: {
                name: "Premier League",
                country: "England",
                logo: "https://media.api-football.com/leagues/2.png",
                flag: "https://media.api-football.com/flags/gb.svg"
              },
              event_date: "2020-04-18T14:00:00+00:00",
              event_timestamp: 1587218400,
              firstHalfStart: null,
              secondHalfStart: null,
              round: "Regular Season - 34",
              status: "Not Started",
              statusShort: "NS",
              elapsed: 0,
              venue: "Vitality Stadium (Bournemouth, Dorset)",
              referee: null,
              homeTeam: {
                team_id: 35,
                team_name: "Bournemouth",
                logo: "https://media.api-football.com/teams/35.png"
              },
              awayTeam: {
                team_id: 47,
                team_name: "Tottenham",
                logo: "https://media.api-football.com/teams/47.png"
              },
              goalsHomeTeam: null,
              goalsAwayTeam: null,
              score: {
                halftime: null,
                fulltime: null,
                extratime: null,
                penalty: null
              }
            },
            {
              fixture_id: 157362,
              league_id: 524,
              league: {
                name: "Premier League",
                country: "England",
                logo: "https://media.api-football.com/leagues/2.png",
                flag: "https://media.api-football.com/flags/gb.svg"
              },
              event_date: "2020-04-25T14:00:00+00:00",
              event_timestamp: 1587823200,
              firstHalfStart: null,
              secondHalfStart: null,
              round: "Regular Season - 35",
              status: "Not Started",
              statusShort: "NS",
              elapsed: 0,
              venue: "Tottenham Hotspur Stadium (London)",
              referee: null,
              homeTeam: {
                team_id: 47,
                team_name: "Tottenham",
                logo: "https://media.api-football.com/teams/47.png"
              },
              awayTeam: {
                team_id: 42,
                team_name: "Arsenal",
                logo: "https://media.api-football.com/teams/42.png"
              },
              goalsHomeTeam: null,
              goalsAwayTeam: null,
              score: {
                halftime: null,
                fulltime: null,
                extratime: null,
                penalty: null
              }
            },
            {
              fixture_id: 157372,
              league_id: 524,
              league: {
                name: "Premier League",
                country: "England",
                logo: "https://media.api-football.com/leagues/2.png",
                flag: "https://media.api-football.com/flags/gb.svg"
              },
              event_date: "2020-05-02T14:00:00+00:00",
              event_timestamp: 1588428000,
              firstHalfStart: null,
              secondHalfStart: null,
              round: "Regular Season - 36",
              status: "Not Started",
              statusShort: "NS",
              elapsed: 0,
              venue: "St. James' Park (Newcastle upon Tyne)",
              referee: null,
              homeTeam: {
                team_id: 34,
                team_name: "Newcastle",
                logo: "https://media.api-football.com/teams/34.png"
              },
              awayTeam: {
                team_id: 47,
                team_name: "Tottenham",
                logo: "https://media.api-football.com/teams/47.png"
              },
              goalsHomeTeam: null,
              goalsAwayTeam: null,
              score: {
                halftime: null,
                fulltime: null,
                extratime: null,
                penalty: null
              }
            },
            {
              fixture_id: 157382,
              league_id: 524,
              league: {
                name: "Premier League",
                country: "England",
                logo: "https://media.api-football.com/leagues/2.png",
                flag: "https://media.api-football.com/flags/gb.svg"
              },
              event_date: "2020-05-09T14:00:00+00:00",
              event_timestamp: 1589032800,
              firstHalfStart: null,
              secondHalfStart: null,
              round: "Regular Season - 37",
              status: "Not Started",
              statusShort: "NS",
              elapsed: 0,
              venue: "Tottenham Hotspur Stadium (London)",
              referee: null,
              homeTeam: {
                team_id: 47,
                team_name: "Tottenham",
                logo: "https://media.api-football.com/teams/47.png"
              },
              awayTeam: {
                team_id: 46,
                team_name: "Leicester",
                logo: "https://media.api-football.com/teams/46.png"
              },
              goalsHomeTeam: null,
              goalsAwayTeam: null,
              score: {
                halftime: null,
                fulltime: null,
                extratime: null,
                penalty: null
              }
            },
            {
              fixture_id: 157388,
              league_id: 524,
              league: {
                name: "Premier League",
                country: "England",
                logo: "https://media.api-football.com/leagues/2.png",
                flag: "https://media.api-football.com/flags/gb.svg"
              },
              event_date: "2020-05-17T14:00:00+00:00",
              event_timestamp: 1589724000,
              firstHalfStart: null,
              secondHalfStart: null,
              round: "Regular Season - 38",
              status: "Not Started",
              statusShort: "NS",
              elapsed: 0,
              venue: "Selhurst Park (London)",
              referee: null,
              homeTeam: {
                team_id: 52,
                team_name: "Crystal Palace",
                logo: "https://media.api-football.com/teams/52.png"
              },
              awayTeam: {
                team_id: 47,
                team_name: "Tottenham",
                logo: "https://media.api-football.com/teams/47.png"
              },
              goalsHomeTeam: null,
              goalsAwayTeam: null,
              score: {
                halftime: null,
                fulltime: null,
                extratime: null,
                penalty: null
              }
            }
          ]
        } 
  });

const searchLeagues = () =>
  Promise.resolve({
        api: {
          results: 1,
          leagues: [
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
          ]
        }
  });

export { 
  apiHost, 
  searchTeams, 
  searchLeagues, 
  returnTeamStats, 
  returnLeagueTable, 
  returnTeamFixtures 
};
