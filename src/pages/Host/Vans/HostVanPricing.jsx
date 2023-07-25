import { useOutletContext } from 'react-router-dom';

const HostVanPricing = () => {
  const context = useOutletContext();

  return (
    <h3 className="host-van-price">
      ${context.price} <span>/day</span>{' '}
    </h3>
  );
};

export default HostVanPricing;
