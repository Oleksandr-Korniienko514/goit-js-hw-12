import { getImages } from './js/pixabay-api';
import { renderImg } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const refs = {
  btnSearch: document.querySelector('.btn-search'),
  form: document.querySelector('.form'),
  input: document.querySelector('input'),
  ul: document.querySelector('ul'),
};

refs.form.addEventListener('submit', e => {
  e.preventDefault();
  refs.ul.innerHTML = '';

  if (refs.input.value.trim()) {
    getImages(refs.input.value)
      .then(response => {
        if (response && response.total !== 0) {
          renderImg(response.hits);
        } else {
          iziToast.error({
            title: 'Error',
            message: 'Sorry, there are no images matching your search query. Please try again!',
            position: 'topRight',
          });
        }
      })
      .catch(error => {
        console.log('An error occurred:', error);
        iziToast.error({
          title: 'Error',
          message: 'An error occurred while fetching images. Please check your internet connection and try again.',
          position: 'topRight',
        });
      })
      .finally(() => {
        refs.input.value = '';
      });
  } else {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search term.',
      position: 'topRight',
    });
  }
});
