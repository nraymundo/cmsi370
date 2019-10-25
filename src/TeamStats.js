import React from "react";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./react-tabs.css";

import "./TeamStats.css";

const TeamStats = props => {
  const { data } = props;
  console.log(data);
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Fixtures</Tab>
          <Tab>Results</Tab>
          <Tab>Stats</Tab>
        </TabList>

        <TabPanel>
          <p id="name">{data}</p>
        </TabPanel>
        <TabPanel>
          <p id="city"></p>
        </TabPanel>
        <TabPanel>
          <p id="country"></p>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TeamStats;
