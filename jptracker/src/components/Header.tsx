import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-blue-700">
          JPTracker
        </Link>

        <nav className="space-x-6">
          <Link to="/jobs" className="text-sm text-gray-700 hover:text-blue-700">
            Jobs
          </Link>
          <Link to="/procurement" className="text-sm text-gray-700 hover:text-blue-700">
            Procurement
          </Link>
          <Link to="/explore" className="text-sm text-gray-700 hover:text-blue-700">
            Explore
          </Link>
          <Link to="/about" className="text-sm text-gray-700 hover:text-blue-700">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
