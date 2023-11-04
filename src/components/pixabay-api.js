import axios from 'axios';

const API_KEY = '38878394-a369e9a7eb6d5533d1860e3f1';

const API_BASE_URL = 'https://pixabay.com/api/';
export const pageLimit = 12;

export const fetchPhoto = async (search, numberPage) => {
  const { data } = await axios.get(API_BASE_URL, {
    method: 'get',
    params: {
      key: API_KEY,
      q: search,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: pageLimit,
      page: numberPage,
    },
  });
  return data;
};
