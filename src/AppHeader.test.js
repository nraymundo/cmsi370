import React from "react";
import TestRenderer from "react-test-renderer";

import AppHeader from "./AppHeader.js";

it("should render the App Header", () => {
  const component = TestRenderer.create(<AppHeader />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
