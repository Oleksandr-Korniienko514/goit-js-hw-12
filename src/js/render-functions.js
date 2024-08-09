const gallery = document.querySelector('.gallery');

function imgTemplate({
  webformatURL,
  largeImageURL,
  tags,
  likes,
  views,
  comments,
  downloads,
}) {
  return `<li class="gallery-card"> 
    <figure class="image-container">
      <a href="${largeImageURL}">
        <img class="image-thumbnail" src="${webformatURL}" alt="${tags}" title="" width="360" height="200"/>
      </a>
      <figcaption class="image-details">
        <ul class="details-list">
          <li class="details-item">Likes<p class="details-count">${likes}</p></li>
          <li class="details-item">Views<p class="details-count">${views}</p></li>
          <li class="details-item">Comments<p class="details-count">${comments}</p></li>
          <li class="details-item">Downloads<p class="details-count">${downloads}</p></li>
        </ul>
      </figcaption>
    </figure>
  </li>`;
}


function imgsTemplate(arr) {
  return arr.map(imgTemplate).join('');
}

export function renderImg(hits) {
  const markup = imgsTemplate(hits);
  gallery.innerHTML += markup;
}