import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

export const getPlacesData = async (sw, ne) => {
  try {
    if (!sw || !ne || !sw.lat || !sw.lng || !ne.lat || !ne.lng) {
      console.error('Invalid data:', sw, ne);
      return null;  
    }

    const { data: { data } } = await axios.get(URL, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        'X-RapidAPI-Key': 'aa96309584mshec1f328ab39cff7p1e0b48jsne6625eb1284a',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
      }
    });

    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null; 
  }
};
