import { Link } from 'react-router-dom';

const HostVans = () => {
  return (
    <div>
      <h2> HostVans List</h2>
      <ul>
        <Link to={`1`}>Van 1</Link>
        <li>Van 2</li>
        <li>Van 3</li>
      </ul>
    </div>
  );
};

export default HostVans;
