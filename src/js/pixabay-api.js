import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import 'simplelightbox/dist/simple-lightbox.min.css';
import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '45213588-1347783919d0c1f7f1631233d';
const STATUS_BAD_REQUEST = 400;

export async function getImages(query, page) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    per_page: 15,
    page: page,
  };

  try {
    const response = await axios.get(BASE_URL, { params: params });

   
    if (response.data && Array.isArray(response.data.hits)) {
      return response.data;
    } else {
      iziToast.error({
        title: 'Error',
        message: 'Unexpected API response format.',
        position: 'topRight',
      });
      return { hits: [] };  
    }
  } catch (error) {
   
    iziToast.error({
      title: 'Request error',
      message: `Something went wrong: ${error.message}`,
      position: 'topRight',
    });

    
    return { hits: [] };
  }
}
