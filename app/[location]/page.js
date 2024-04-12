import LocationInfo from "../components/LocationInfo";

const TemperaturePage = ({
  params: { location },
  searchParams: { latitude, longitude },
}) => {
  return <LocationInfo lat={latitude} lon={longitude} />;
};

export default TemperaturePage;
