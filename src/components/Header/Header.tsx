import Button from "components/Button/Button";
import { Link, Outlet } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
      </a>
      <div>
          <Link to="/sign-in">
            <Button text="Sign in" type="button" />
          </Link>
          <Link to="/dashboard">
            <Button text="Dashboard" type="button" />
          </Link>
      </div>
    </nav>
    <Outlet/>
    </>
  );
};

export default Header;
