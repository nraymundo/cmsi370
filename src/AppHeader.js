import React from "react";

import "./AppHeader.css";

// Note how functional components that don’t have additional logic simply return their markup.
const AppHeader = () => (
  <div className="AppHeader">
    <h1>Take That For Data</h1>
    <h2>
      Data from the teams in the Premier League, Bundesliga, Serie A, and La
      Liga
    </h2>
  </div>
);

export default AppHeader;
