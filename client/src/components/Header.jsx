import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          {/* wrap into multiple lines if components can't fit in one line */}
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-500">Riddhi</span>
            <span className="text-slate-700">Estate</span>
          </h1>
        </Link>
        <form className="bg-slate-100 p-3 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-slate-600" />
        </form>
        <ul className="flex gap-4 text-slate-700">
         <Link to='/'>
          <li className="hidden hover:underline sm:inline">Home</li>
          </Link>
          <Link to='/about'>
          <li className="hidden hover:underline sm:inline">About</li>
          </Link>
          <Link to='/sign-in'>
          <li>Sign In</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
