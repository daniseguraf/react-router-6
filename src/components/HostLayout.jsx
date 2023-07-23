import { NavLink, Outlet } from 'react-router-dom';

const activeStyle = {
  fontWeight: 'bold',
  textDecoration: 'underline',
  color: '#161616',
};

const HostLayout = () => {
  return (
    <div>
      <h1>HostLayout</h1>
      <nav className="host-nav">
        <NavLink
          to="/host"
          style={({ isActive }) => (isActive ? activeStyle : null)}
          end
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/host/income"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Income
        </NavLink>
        <NavLink
          to="/host/vans"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Vans
        </NavLink>
        <NavLink
          to="/host/review"
          style={({ isActive }) => (isActive ? activeStyle : null)}
        >
          Review
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default HostLayout;
4165.55;
