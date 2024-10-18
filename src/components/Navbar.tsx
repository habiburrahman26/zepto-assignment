import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="px-4 py-3 bg-blue-300">
      <nav className="flex justify-center">
        <div></div>
        <ul className="flex items-center gap-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'border-b-2  border-white' : ''
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/wishlist"
              className={({ isActive }) =>
                isActive ? 'border-b-2 border-white' : ''
              }
            >
              Wishlist
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
