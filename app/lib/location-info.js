export const getLocationData = async (lat, lon) => {
  try {
    const res = await fetch(
      `https://api-bdc.net/data/reverse-geocode?latitude=${lat}&longitude=${lon}&localityLanguage=en&key=${process.env.BIG_DATA_COUD_API_KEY}`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const getLocationLatLongList = async () => {
  try {
    const res = await fetch(`http://localhost:3000/api/location`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const getLocationLatLong = async (locationName) => {
  try {
    const res = await fetch(
      `http://localhost:3000/api/location/${locationName}`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
};
