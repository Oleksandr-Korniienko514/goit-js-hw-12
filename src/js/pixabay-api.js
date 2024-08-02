import 'izitoast/dist/css/iziToast.min.css';
import iziToast from 'izitoast';
import 'simplelightbox/dist/simple-lightbox.min.css';

export function getImages(img) {
  const form = document.querySelector('.form');
  const loader = document.createElement('div');
  loader.className = 'loader';
  form.insertAdjacentElement('afterend', loader);

  const BASE_URL = 'https://pixabay.com/api/';
  const params = new URLSearchParams({
    key: '45213588-1347783919d0c1f7f1631233d',
    q: img,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    per_page: 20,
  });

  const url = `${BASE_URL}?${params}`;

  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .catch(error => {
      console.error('Error fetching images:', error);
      iziToast.error({
        title: 'Error',
        message: 'An error occurred while fetching images. Please try again later.',
        position: 'topRight',
      });
      throw error;
    })
    .finally(() => {
      if (loader) {
        loader.remove();
      }
    });
}
