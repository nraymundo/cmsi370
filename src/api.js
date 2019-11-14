let api = "https://api-football-v1.p.rapidapi.com";
// const API_KEY = "03a08d2e01mshc2b16c59c72abe3p1e351ajsn0ac19ff3cdee";

const apiHost = host => {
  api = host;
};

const urlFor = resource => `${api}${resource}`;

const HTTP_OK = 200;

const throwResponseError = response => {
  const error = new Error(response.statusText);
  console.log("error", error);
  error.response = response;
  throw error;
};

const emitNativeError = error => {
  throw error;
};

const statusCheck = successStatuses => response => {
  //   if (successStatuses.includes(response.status)) {
  //     return response;
  //   } else {
  //     throwResponseError(response);
  //   }
  //   if (response.bodyUsed) {
  //     return response;
  //   } else {
  //     throwResponseError(response);
  //   }
  console.log("succ ", response);
  return response;
};

const okCheck = statusCheck([HTTP_OK]);

const headers = {
  "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
  "x-rapidapi-key": "a33e3f89c7mshef7125c633481b7p130005jsn350b4dc5d554"
};

const parameters = params => {
  const result = new URLSearchParams(params);
  if (result.get("category") === "search") {
    return result.get("team");
  } else if (result.get("category") === "teamStats") {
    return result.get("league") + "/" + result.get("team");
  } else if (result.get("category") === "league") {
    return result.get("league");
  } else if (result.get("category") === "table") {
    return result.get("league");
  } else if (result.get("category") === "fixtures") {
    return result.get("team") + "/" + result.get("league");
  } else {
    return result;
  }
};

const query = (resource, params) =>
  fetch(`${urlFor(resource)}${parameters(params)}`, {
    headers
  })
    .then(okCheck, emitNativeError)
    .then(response => response.json());

const tryIt = params => console.log("tried ", query("/v2/teams/team/", params));

const searchTeams = params => query("/v2/teams/team/", params);

const searchLeagues = params => query("/v2/leagues/league/", params);

const returnTeamStats = params => query("/v2/statistics/", params);

const returnLeagueTable = params => query("/v2/leagueTable/", params);

const returnTeamFixtures = params => query("/v2/fixtures/team/", params);

const FetchTeamStats = async () => {
  const stats = await fetch(
    "https://api-football-v1.p.rapidapi.com/v2/leagueTable/524",
    {
      headers: {
        "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
        "x-rapidapi-key": "03a08d2e01mshc2b16c59c72abe3p1e351ajsn0ac19ff3cdee"
      }
    }
  );
  return stats.json();
};

export {
  apiHost,
  searchTeams,
  searchLeagues,
  returnTeamStats,
  returnLeagueTable,
  returnTeamFixtures,
  FetchTeamStats,
  tryIt
};
