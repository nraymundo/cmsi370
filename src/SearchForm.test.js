import React from "react";
import ReactDOM from "react-dom";
import TestRenderer from "react-test-renderer";
import ReactTestUtils from "react-dom/test-utils";

import sinon from "sinon";

import SearchForm from "./SearchForm";

import * as api from "./api";

// This test suite uses a distinct testing technique called _snapshot testing_. Go take
// a peek at the code then come back here for more commentary.
//
// Note how, with snapshot testing, you are truly dependent on that descriptive text.
// The enforcement is in the snapshot match, not a condition that is in the test code.
// This is where snapshot testing differs from traditional test-driven development:
// _It assumes that the code works initially._ This actually does line up fairly well
// with user interface development, because it tends to be easier to just “eyeball” a
// user interface first rather than write tests against it.
//
// It takes some adjustment to start “trusting” a snapshot test, just as it takes some
// adjustment to trust version control. If you want to manually check whether a snapshot
// is truly in the state that you want it to be, you can always look at the .snap file
// within the __snapshots__ folder.
//
// Handy reference:
// https://semaphoreci.com/community/tutorials/snapshot-testing-react-components-with-jest
//
it("should start with an empty search field", () => {
  const component = TestRenderer.create(<SearchForm />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it("should start with a disabled search button", () => {
  const component = TestRenderer.create(<SearchForm />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

describe("search button", () => {
  let div;
  beforeEach(() => {
    div = document.createElement("div");
    ReactTestUtils.act(() => {
      ReactDOM.render(<SearchForm />, div);
    });
  });

  afterEach(() => ReactDOM.unmountComponentAtNode(div));

  it("should be enabled when the search field is not blank", () => {
    const searchInput = div.querySelector("input");
    ReactTestUtils.act(() => {
      searchInput.value = "i can haz unit tests";
      ReactTestUtils.Simulate.change(searchInput);
    });

    const searchButton = div.querySelector("button");
    expect(searchButton.disabled).toBe(false);
  });

  it("should be disabled when the search field is blank", () => {
    const searchInput = div.querySelector("input");
    ReactTestUtils.act(() => {
      searchInput.value = "";
      ReactTestUtils.Simulate.change(searchInput);
    });

    const searchButton = div.querySelector("button");
    expect(searchButton.disabled).toBe(true);
  });
});

// Helper function for the next two test collections.
const setupAndQuerySearchForm = async () => {
  const div = document.createElement("div");
  ReactTestUtils.act(() => {
    ReactDOM.render(<SearchForm />, div);
  });

  const searchInput = div.querySelector("input");
  ReactTestUtils.act(() => {
    searchInput.value = "tottenham";
    ReactTestUtils.Simulate.change(searchInput);
  });

  const searchForm = div.querySelector("form");
  await ReactTestUtils.act(async () => {
    await ReactTestUtils.Simulate.submit(searchForm);
  });

  return div;
};

describe("API calls", () => {
  let div;
  beforeEach(async () => {
    sinon.stub(api, "searchTeams");

    // To manage size, we supply a mock response that contains _only_ what the app will need. This does mean
    // that we need to revise the mock response if our app starts using more (or different) data.
    api.searchTeams.returns(
      Promise.resolve({
        data: [
          {
            api: {
              results: 1,
              teams: [
                {
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
              ]
            }
          }
        ]
      })
    );

    div = await setupAndQuerySearchForm();
  });

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(div);
    api.searchTeams.restore();
  });

  it("should trigger a search when the search button is clicked", () => {
    // Note how this _isn’t_ a snapshot test because we’re checking whether a function was called with
    // the right arguments.
    expect(api.searchTeams.firstCall.args[0]).toEqual({
      team: 47,
      category: "search"
    });
  });

  it("should populate the image container when search results arrive", () => {
    // Our mock search results yield one image, so we expect our results container to have one child.
    const SearchResults = div.querySelector("div.SearchResults");
    expect(SearchResults.children.length).toEqual(0);
  });
});

// describe("failed API calls", () => {
//   let div;
//   beforeEach(async () => {
//     sinon.stub(api, "searchTeams");
//     api.searchGifs.returns(Promise.reject("Mock failure"));

//     div = await setupAndQuerySearchForm();
//   });

//   afterEach(() => {
//     ReactDOM.unmountComponentAtNode(div);
//     api.searchGifs.restore();
//   });

//   it("should display an alert when the API call fails", () => {
//     // The document should contain the error div.
//     const searchError = div.querySelector("div.error");
//     expect(searchError.textContent).toEqual("Sorry, but something went wrong.");
//   });
// });
