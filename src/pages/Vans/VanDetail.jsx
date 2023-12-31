import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const VanDetail = () => {
  const { id } = useParams();
  const [van, setVan] = useState(null);

  const getVan = async () => {
    const response = await fetch(`/api/vans/${id}`);
    const data = await response.json();
    setVan(data.vans);
  };

  useEffect(() => {
    getVan();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="van-detail-container">
      <Link to=".." relative="path" className="back-button">
        &larr; <span>Back to all vans</span>
      </Link>

      {van ? (
        <div className="van-detail">
          <img src={van.imageUrl} />
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
          <h2>{van.name}</h2>
          <p className="van-price">
            <span>${van.price}</span>/day
          </p>
          <p>{van.description}</p>
          <button className="link-button">Rent this van</button>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default VanDetail;
