import { BrowserRouter, Route, Routes } from "react-router-dom";

import UnauthorizedPage from "pages/unauthorizedPage/UnauthorizedPage";
import AuthenticationPage from "pages/auth/authenticationPage";
import HomePage from "pages/homepage/HomePage";
import Header from "components/Header/Header";
import Dashboard from "pages/dashboard/Dashboard";

import "./App.css";

function App() {
  const homePageRoutes = ["", "home"].map((path) => (
    <Route path={path} element={<HomePage />}></Route>
  ));
  return (
    <div className="app-container">
      <BrowserRouter>
        <Routes>
          <Route path="/sign-in" element={<AuthenticationPage />}></Route>
          <Route path="/" element={<Header />}>
            {homePageRoutes}
            <Route path="dashboard" element={<Dashboard />} />
            <Route
              path="*"
              element={
                <UnauthorizedPage
                  path={"/"}
                  displayMessage={
                    "You are not authorized to access this page. Please log in to continue."
                  }
                />
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
