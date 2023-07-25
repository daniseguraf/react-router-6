import { useOutletContext } from 'react-router-dom';

const HostVanPhotos = () => {
  const context = useOutletContext();

  return (
    <div>
      <img src={context.imageUrl} className="host-van-detail-image" />
    </div>
  );
};

export default HostVanPhotos;
