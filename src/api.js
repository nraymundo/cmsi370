const apiHost = () => {}; // No-op in our mock version.

const searchTeams = () =>
  Promise.resolve({
    data: {
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
  });

export { apiHost, searchTeams };
