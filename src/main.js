import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import axios from 'axios';

let lightbox;
lightbox = new SimpleLightbox('.gallery a', {
  captionSelector: 'img',
  captionType: 'attr',
  captionsData: 'alt',
  captionDelay: 250,
});

const searchForm = document.querySelector('.search-form');
const galleryBox = document.querySelector('.js-gallery');
const loadMoreBtn = document.querySelector('.btn_load_more');
searchForm.addEventListener('submit', handlerSearchImage);
loadMoreBtn.addEventListener('click', handerLoadMorePhoto);

let page = 1;
let perPage = 200; //15 должно біть
let queryValue;
let infoMessage = `<div>We're sorry, but you've reached the end of search results.</div>`;

async function fetchGetImage(query) {
  const API_KEY = '44752364-afb0e3777e04db30cc3f88e82';
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: page,
    per_page: perPage,
  });
  const response = await axios.get(`https://pixabay.com/api/?${params}`);
  return response.data;
}
async function handerLoadMorePhoto() {
  page += 1;
  const data = await fetchGetImage(queryValue);
  try {
  renderLoader();
renderImage(data, galleryBox);
    lightbox.refresh();
    if (galleryBox.childElementCount >= data.totalHits) {
      loadMoreBtn.classList.add('btn_load_more');
      galleryBox.insertAdjacentHTML('beforeend', infoMessage);
    }

    
  } catch (error) {
    onFetchError(error);
  } finally {
    removeLoader();
  }
}

async function handlerSearchImage(evt) {
  evt.preventDefault();
  if (evt.currentTarget.elements.search.value.trim() === '') {
    return onFetchError();
  } else if (galleryBox.hasChildNodes) {
    galleryBox.innerHTML = '';
  }
  const form = evt.currentTarget;
  queryValue = form.elements.search.value.toLowerCase().trim();
  
  try {
    renderLoader();
    page = 1;
    const data = await fetchGetImage(queryValue);
    const totalData = Math.ceil(data.totalHits / perPage);
    if (totalData > page) {
      loadMoreBtn.classList.remove('btn_load_more');
    }
    if (data.hits.length === 0) {
      throw new Error(onFetchError);
    }
    renderImage(data, galleryBox);
    if (lightbox) {
      lightbox.refresh();
    } else {
      lightbox = new SimpleLightbox('.gallery a', {
        captionSelector: 'img',
        captionType: 'attr',
        captionsData: 'alt',
        captionDelay: 250,
      });
    }
  } catch (error) {
    onFetchError(error);
  } finally {
    searchForm.reset();
    removeLoader()
  }
}

export function renderImage(data, galleryBox) {
  const markup = data.hits
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
    <li class="gallery-item">
      <a class="gallery-link" href="${largeImageURL}">
        <img
          class="gallery-image"
          src="${webformatURL}"
          alt="${tags}"
        />
        <ul class="gallery-info">
          <li class='info-items'>
          <h3 class='info-title'>Likes</h3>
          <p class="value"> ${likes}</p>
          </li>
          <li class='info-items'>
          <h3 class='info-title'>Views</h3>
          <p class="value">${views}</p>
          </li>
          <li class='info-items'>
          <h3 class='info-title'>Comments</h3>
          <p class="value">${comments}</p>
          </li>
          <li class='info-items'>
          <h3 class='info-title'>Downloads</h3>
         <p class="value"> ${downloads}</p>
          </li>
        </ul>
      </a>
    </li>
  `
    )
    .join('');
  galleryBox.insertAdjacentHTML('beforeend', markup);
}

export function renderLoader() {
  let spanLoader = `
<span class="loader"></span>
`;
  searchForm.insertAdjacentHTML('afterend', spanLoader);
}

export function removeLoader() {
  let loader = document.querySelector('.loader');
  if (loader) {
    loader.remove();
  }
}

export function onFetchError(error) {
  galleryBox.innerHTML = '';
  searchForm.reset();
  iziToast.error({
    //   messageColor: 'white',
    theme: 'dark',
    maxWidth: '432px',
    position: 'topRight',
    messageLineHeight: '150%',
    messageSize: '16px',
    backgroundColor: 'rgba(255, 190,190, 1)',
    progressBarColor: 'rgba(181, 27,27, 1)',
    message:
      'Sorry, there are no images matching your search query. Please try again!',
  });
}
