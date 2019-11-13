let api = "https://api-football-v1.p.rapidapi.com";
// const API_KEY = "03a08d2e01mshc2b16c59c72abe3p1e351ajsn0ac19ff3cdee";

const apiHost = host => {
  api = host;
};

const urlFor = resource => `${api}${resource}`;

const HTTP_OK = 200;

const throwResponseError = response => {
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
};

const emitNativeError = error => {
  throw error;
};

const statusCheck = successStatuses => response => {
  if (successStatuses.includes(response.status)) {
    return response;
  } else {
    throwResponseError(response);
  }
};

const okCheck = statusCheck([HTTP_OK]);

const headers = {
  "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
  "x-rapidapi-key": "bf32125d6dmsh076931bf8d25573p17b9f7jsn552250c042f3"
};

const parameters = params => {
  const result = new URLSearchParams(params);
  return result.get("q");
  //   result.set("api_key", API_KEY);
  //   return result;
};

const query = (resource, params) =>
  fetch(`${urlFor(resource)}${parameters(params)}`, {
    headers
  })
    .then(okCheck, emitNativeError)
    .then(response => response.json());

const searchTeams = params => query("/v2/", params);

const returnTeamStats = params => query("/v2/statistics/", params);

// const FetchTeamStats = async () => {
//   const stats = await fetch(
//     "https://api-football-v1.p.rapidapi.com/v2/statistics/524/47",
//     {
//       headers: {
//         "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
//         "x-rapidapi-key": "03a08d2e01mshc2b16c59c72abe3p1e351ajsn0ac19ff3cdee"
//       }
//     }
//   );
//   return stats.json();
// };

// const FetchLeagueInfo = async () => {
//   const info = await fetch(
//     "https://api-football-v1.p.rapidapi.com/v2/leagues/league/524",
//     {
//       headers: {
//         "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
//         "x-rapidapi-key": "03a08d2e01mshc2b16c59c72abe3p1e351ajsn0ac19ff3cdee"
//       }
//     }
//   );
//   return info.json();
// };

export { apiHost, searchTeams, returnTeamStats };

// const apiHost = () => {}; // No-op in our mock version.

// export { apiHost, searchTeamTottenham, searchTeamLiverpool, TeamFixtures, LeagueTable, TeamStats, LeagueInfo, FetchLeagueTable, FetchTeamInfo };
