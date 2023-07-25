import { useOutletContext } from 'react-router-dom';

const HostVanInfo = () => {
  const context = useOutletContext();

  return (
    <div>
      <p>
        <strong>Name:</strong> {context.name}
      </p>
      <p>
        <strong>Description:</strong> {context.description}
      </p>
    </div>
  );
};

export default HostVanInfo;
