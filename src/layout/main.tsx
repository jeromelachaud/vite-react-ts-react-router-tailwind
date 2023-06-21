import { NavLink, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="grid min-h-screen grid-rows-[min-content_1fr] items-center bg-[#282c34] text-white">
      <nav className="flex justify-center bg-gradient-to-r from-emerald-300 to-sky-300 py-6 text-2xl text-stone-800">
        <ul className="flex gap-4">
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? 'underline' : '')}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? 'underline' : '')}
              to="/page1"
            >
              Page1
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
