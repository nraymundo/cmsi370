import React, { useEffect, useState } from "react";

import { FetchTeamStats } from "./api";

// const teamList = props => {
//   const [teams, setTeams] = useState({});

//   const fetchTeams = async event => {
//     try {
//       const result = await FetchTeamStats({});
//       setTeams(result.data);
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   useEffect(() => {
//     fetchTeams();
//   }, []);

//   return console.log(teams);
// };

// export default teamList;

// function fillObject(array) {
//   let teams = {};
//   for (let i = 0; i < 19; i++) {
//     let team_name = array[i].team_id;
//     teams.team_name = {
//       team_id: array[i].team_id,
//       league_id: 0
//     };
//   }
//   return teams;
// }

export const teams = {
  TOTTENHAM: {
    team_id: 47,
    league_id: 524
  },
  LIVERPOOL: {
    team_id: 40,
    league_id: 524
  },
  "MANCHESTER CITY": {
    team_id: 50,
    league_id: 524
  },
  LEICESTER: {
    team_id: 46,
    league_id: 524
  },
  CHELSEA: {
    team_id: 49,
    league_id: 524
  }
  // LIVERPOOL: {
  //   team_id: 40,
  //   league_id: 524
  // },
  // LIVERPOOL: {
  //   team_id: 40,
  //   league_id: 524
  // },
  // LIVERPOOL: {
  //   team_id: 40,
  //   league_id: 524
  // },
  // LIVERPOOL: {
  //   team_id: 40,
  //   league_id: 524
  // },
  // LIVERPOOL: {
  //   team_id: 40,
  //   league_id: 524
  // },
  // LIVERPOOL: {
  //   team_id: 40,
  //   league_id: 524
  // },
  // LIVERPOOL: {
  //   team_id: 40,
  //   league_id: 524
  // },
  // LIVERPOOL: {
  //   team_id: 40,
  //   league_id: 524
  // },
  // LIVERPOOL: {
  //   team_id: 40,
  //   league_id: 524
  // },
  // LIVERPOOL: {
  //   team_id: 40,
  //   league_id: 524
  // },
  // LIVERPOOL: {
  //   team_id: 40,
  //   league_id: 524
  // },
  // LIVERPOOL: {
  //   team_id: 40,
  //   league_id: 524
  // },
  // LIVERPOOL: {
  //   team_id: 40,
  //   league_id: 524
  // },
  // LIVERPOOL: {
  //   team_id: 40,
  //   league_id: 524
  // },
  // LIVERPOOL: {
  //   team_id: 40,
  //   league_id: 524
  // }
};
