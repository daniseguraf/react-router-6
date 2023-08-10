import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

const Vans = () => {
  const [vans, setVans] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const typeFilter = searchParams.get('type');

  const getVans = async () => {
    const response = await fetch('/api/vans');
    const data = await response.json();

    setVans(data.vans);
  };

  useEffect(() => {
    getVans();
  }, []);

  const displayedVans = typeFilter
    ? vans.filter((van) => van.type === typeFilter)
    : vans;

  function handleFilterChange(key, value) {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }

  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <div className="van-list-filter-buttons">
        <button
          onClick={() => handleFilterChange('type', 'simple')}
          className={`van-type simple ${
            typeFilter === 'simple' ? 'selected' : ''
          }`}
        >
          Simple
        </button>
        <button
          onClick={() => handleFilterChange('type', 'luxury')}
          className={`van-type luxury ${
            typeFilter === 'luxury' ? 'selected' : ''
          }`}
        >
          Luxury
        </button>
        <button
          onClick={() => handleFilterChange('type', 'rugged')}
          className={`van-type rugged ${
            typeFilter === 'rugged' ? 'selected' : ''
          }`}
        >
          Rugged
        </button>
        {typeFilter ? (
          <button
            onClick={() => handleFilterChange({})}
            className="van-type clear-filters"
          >
            Clear
          </button>
        ) : null}
      </div>
      <div className="van-list">
        {displayedVans.map(({ id, imageUrl, name, price, type }) => (
          <div key={id} className="van-tile">
            <Link to={id}>
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
