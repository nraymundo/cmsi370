import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import Tabs from "react-bootstrap/Tabs";
// import Tab from "react-bootstrap/Tab";

// import "react-tabs/style/react-tabs.scss";
import "./react-tabs.css";

import "./TeamInfo.css";

const TeamInfo = props => {
  const { data } = props;
  // console.log(data);
  return (
    <div className="Teams">
      <div className="TeamInfo">
        <div className="Circle">
          <img src={data.logo} alt="blah" id="TeamLogo" />
        </div>
        <div className="TeamData">
          <p id="TeamName">{data.name}</p>
          <p>
            {data.venue_city}, {data.country}
          </p>
          <p>{data.venue_name}</p>
        </div>
      </div>

      <Tabs>
        <TabList>
          <Tab>Fixtures</Tab>
          <Tab>Results</Tab>
          <Tab>Stats</Tab>
        </TabList>

        <TabPanel>
          <p>{data.name}</p>
        </TabPanel>
        <TabPanel>
          <p>{data.venue_city}</p>
        </TabPanel>
        <TabPanel>
          <p>{data.country}</p>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TeamInfo;
