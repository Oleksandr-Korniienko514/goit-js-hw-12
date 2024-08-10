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
  ul: document.querySelector('ul.gallery'),
  loadBtn: document.querySelector('.load-btn'),
};

let page = 1;
let query = '';
let gallery = new SimpleLightbox('.gallery a');
let totalHits = 0; 
let loadedImages = 0; 

refs.loadBtn.classList.add('hiddenBtn');

refs.form.addEventListener('submit', async e => {
  e.preventDefault();
  query = refs.input.value.trim();

  if (query === '') {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search query',
    });
    refs.loadBtn.classList.add('hiddenBtn');
    return;
  }

  refs.ul.innerHTML = '';
  page = 1;
  totalHits = 0;
  loadedImages = 0;
  startLoader();

  try {
    const result = await getImages(query, page);
    stopLoader();

    if (result.hits.length === 0) {
      iziToast.error({
        title: 'No results',
        message: 'No images found. Please try a different query.',
      });
      refs.loadBtn.classList.add('hiddenBtn');
    } else {
      totalHits = result.totalHits; 
      loadedImages += result.hits.length; 
      renderImg(result.hits);
      gallery.refresh();

      if (loadedImages >= totalHits) {
        refs.loadBtn.classList.add('hiddenBtn');
      } else {
        refs.loadBtn.classList.remove('hiddenBtn');
      }
    }
  } catch (error) {
    stopLoader();
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong.',
    });
    refs.loadBtn.classList.add('hiddenBtn');
  }
});

refs.loadBtn.addEventListener('click', async () => {
  page += 1;
  console.log('Page incremented:', page);
  startLoader();

  try {
    const result = await getImages(query, page);
    stopLoader();

    if (result.hits.length === 0) {
      iziToast.info({
        title: 'No more results',
        message: "We're sorry, but you've reached the end of search results.",
      });
      refs.loadBtn.classList.add('hiddenBtn');
    } else {
      loadedImages += result.hits.length;
      renderImg(result.hits);
      gallery.refresh();

      if (loadedImages >= totalHits) {
        refs.loadBtn.classList.add('hiddenBtn');
        iziToast.info({
          title: 'No more results',
          message: "We're sorry, but you've reached the end of search results.",
        });
      }
    }

    scrollToEnd();
  } catch (error) {
    stopLoader();
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong.',
    });
    refs.loadBtn.classList.add('hiddenBtn');
  }
});

function scrollToEnd() {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth',
  });
}

function startLoader() {
  refs.loadBtn.classList.add('hiddenBtn');
  refs.loadBtn.insertAdjacentHTML(
    'afterend',
    '<div id="loader" class="loader"></div>'
  );
}

function stopLoader() {
  const loader = document.querySelector('.loader');
  if (loader) loader.remove();

 
  if (loadedImages < totalHits) {
    refs.loadBtn.classList.remove('hiddenBtn');
  }
}
