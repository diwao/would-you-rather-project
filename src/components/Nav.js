import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-purple-500 p-6">
      <ul className="w-full block flex-grow">
        <li className="inline-block mt-0 text-purple-200 hover:text-white mr-4">
          <NavLink to="/" exact activeClassName="italic font-bold">
            Home
          </NavLink>
        </li>
        <li className="inline-block mt-0 text-purple-200 hover:text-white mr-4">
          <NavLink to="/add" activeClassName="italic font-bold">
            New Question
          </NavLink>
        </li>
        <li className="inline-block mt-0 text-purple-200 hover:text-white mr-4">
          <NavLink to="/leaderboard" activeClassName="italic font-bold">
            Leader Board
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
