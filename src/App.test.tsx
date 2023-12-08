import { render, screen } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import store from "store";
import configureStore from "redux-mock-store";
import "@testing-library/jest-dom";

const mockStore = configureStore();

describe("Tests for HomePage", () => {
  it("should have a top navigation bar", () => {
    window.history.pushState({}, "", "/");
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const headerElement = screen.queryByTestId("navigation-component"); // Assuming you have a data-testid on your Header component

    expect(headerElement).toBeInTheDocument();
  });

  it("renders Sign In button when not signed in", () => {
    const initialState = {
      auth: {
        userData: { email: null },
      },
    };
    const mockedStore: any = mockStore(initialState);
    render(
      <Provider store={mockedStore}>
        <App />
      </Provider>
    );

    const signInButton = screen.getByText("Sign in");
    expect(signInButton).toBeInTheDocument();
  });

  it("When user is signed in, user should have a top navigation bar with a 'dashboard' & a 'sign out' button", () => {
    const initialState = {
      auth: {
        userData: { email: "katiyarkartik0@gmail.com" },
      },
    };
    const mockedStore: any = mockStore(initialState);
    render(
      <Provider store={mockedStore}>
        <App />
      </Provider>
    );
    const signOutButton = screen.getByText("Sign Out");
    expect(signOutButton).toBeInTheDocument();
    const dashboardButton = screen.getByText("Dashboard");
    expect(dashboardButton).toBeInTheDocument();
  });
});

describe("Tests for dashboard", () => {
  it("should have a top navigation bar", () => {
    window.history.pushState({}, "", "/dashboard");
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const headerElement = screen.queryByTestId("navigation-component"); // Assuming you have a data-testid on your Header component

    expect(headerElement).toBeInTheDocument();
  });
});

describe("Tests for Sign-in Page", () => {
  it("should NOT have a top navigation bar", () => {
    window.history.pushState({}, "", "/sign-in");
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const headerElement = screen.queryByTestId("navigation-component"); // Assuming you have a data-testid on your Header component

    expect(headerElement).not.toBeInTheDocument();
  });
});
