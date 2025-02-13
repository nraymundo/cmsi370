let api = "https://api-football-v1.p.rapidapi.com";

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

const checkForError = (data, error) => {
  if (data.api.hasOwnProperty("error")) {
    throw error;
  } else {
    return data;
  }
};

const statusCheck = successStatuses => response => {
  if (successStatuses.includes(response.status)) {
    return response;
  } else {
    throwResponseError(response);
  }
  if (response.bodyUsed) {
    return response;
  } else {
    throwResponseError(response);
  }
};

const okCheck = statusCheck([HTTP_OK]);

const headers = {
  "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
  // "x-rapidapi-key": "593f94778cmsh7c603020ac34b09p1cf2a9jsnbb3212787667"
  "x-rapidapi-key": "03a08d2e01mshc2b16c59c72abe3p1e351ajsn0ac19ff3cdee"
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

const searchTeams = params =>
  query("/v2/teams/team/", params).then(checkForError);

const searchLeagues = params => query("/v2/leagues/league/", params);

const returnTeamStats = params => query("/v2/statistics/", params);

const returnLeagueTable = params => query("/v2/leagueTable/", params);

const returnTeamFixtures = params => query("/v2/fixtures/team/", params);

export {
  apiHost,
  searchTeams,
  searchLeagues,
  returnTeamStats,
  returnLeagueTable,
  returnTeamFixtures
};
