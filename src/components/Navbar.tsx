import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className='px-4 py-3 bg-blue-300'>
      <nav className='flex justify-between'>
        <div></div>
        <ul className='flex items-center gap-4'>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/wishlist">Wishlist</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
