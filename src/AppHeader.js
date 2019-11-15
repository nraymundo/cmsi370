import React from "react";

import "./AppHeader.css";

// Note how functional components that don’t have additional logic simply return their markup.
const AppHeader = () => (
  <div className="AppHeader">
    <h1>Take That For Data</h1>
    <h2>Premier League | Bundesliga | Serie A | La Liga | Ligue 1</h2>
  </div>
);

export default AppHeader;
