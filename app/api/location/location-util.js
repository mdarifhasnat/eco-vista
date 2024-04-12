const data = [
  {
    location: "London",
    latitude: 51.5073219,
    longitude: -0.1276474,
  },
  {
    location: "New York",
    latitude: 40.7128,
    longitude: -74.006,
  },
  {
    location: "Tokyo",
    latitude: 35.6895,
    longitude: 139.6917,
  },
  {
    location: "Paris",
    latitude: 48.8566,
    longitude: 2.3522,
  },
  {
    location: "Sydney",
    latitude: -33.8688,
    longitude: 151.2093,
  },
  {
    location: "Los Angeles",
    latitude: 34.0522,
    longitude: -118.2437,
  },
  {
    location: "Moscow",
    latitude: 55.7558,
    longitude: 37.6176,
  },
  {
    location: "Rio de Janeiro",
    latitude: -22.9068,
    longitude: -43.1729,
  },
  {
    location: "Berlin",
    latitude: 52.52,
    longitude: 13.405,
  },
  {
    location: "Rome",
    latitude: 41.9028,
    longitude: 12.4964,
  },
  {
    location: "Toronto",
    latitude: 43.65107,
    longitude: -79.347015,
  },
];

function getLocations() {
  return data;
}

function getLocationByName(location) {
  if (!location) return null;

  const found = data.find(
    (item) => item.location.toLowerCase() === location.toLowerCase()
  );

  return found || {};
}

export { getLocationByName, getLocations };
