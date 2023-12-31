import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";

const Header = () => {
  const { user, logOutUser } = useContext(AuthContext);

  const handleLogOut = () => {
    logOutUser()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
    </>
  );

  const secondaryNavItems = (
    <>
      {user ? (
        <>
          <li>
            <Link onClick={handleLogOut}>Log out</Link>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link to="/login">login</Link>
          </li>
          <li>
            <Link to="/register">register</Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="absolute top-0 left-0 w-full text-white font-bold">
      <div className="navbar max-w-[85rem] mx-auto px-0 py-2">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <ul className="hidden lg:flex">{navItems}</ul>
        </div>
        <div className="navbar-center lg:flex">
          <Link className="text-xl" to="/">
            TaskNinja
          </Link>
        </div>
        <div className="navbar-end">
          <ul className="flex gap-3">{secondaryNavItems}</ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
