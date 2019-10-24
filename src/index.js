import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
// import "./fonts/Oswald/static/Oswald-Bold.ttf";
// import "./fonts/Oswald/static/Oswald-Regular.ttf";

// import './assets/css/fonts.css';

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
