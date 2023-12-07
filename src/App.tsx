import { BrowserRouter, Route, Routes } from "react-router-dom";

import UnauthorizedPage from "pages/unauthorizedPage/UnauthorizedPage";
import AuthenticationPage from "pages/auth/authenticationPage";

import "./App.css";
import HomePage from "pages/homepage/HomePage";
import Header from "components/Header/Header";

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Routes>
          <Route path="/sign-in" element={<AuthenticationPage />}></Route>
          <Route path="/" element={<Header />}>
            <Route path="home" element={<HomePage />}></Route>
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
