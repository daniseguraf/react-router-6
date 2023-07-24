import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Vans = () => {
  const [vans, setVans] = useState([]);

  const getVans = async () => {
    const response = await fetch('/api/vans');
    const data = await response.json();

    setVans(data.vans);
  };

  useEffect(() => {
    getVans();
  }, []);

  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <div className="van-list">
        {vans.map(({ id, imageUrl, name, price, type }) => (
          <div key={id} className="van-tile">
            <Link to={`/vans/${id}`}>
              <img src={imageUrl} />
              <div className="van-info">
                <h3>{name}</h3>
                <p>
                  ${price}
                  <span>/day</span>
                </p>
              </div>
              <i className={`van-type ${type} selected`}>{type}</i>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vans;
