import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { fetchGetImage } from './js/pixabay-api';
import { renderImage } from './js/render-functions';
import { hide } from './js/render-functions';
import { show } from './js/render-functions';
import { renderLoader } from './js/render-functions';
import { removeLoader } from './js/render-functions';
import { onFetchError } from './js/pixabay-api';
import { scroll } from './js/render-functions';

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

let page = 1;
let perPage = 200; //15 должно біть
let queryValue;
const hiddenClass = 'is-hidden';
let infoMessage = `<div class='info-meassage'>We're sorry, but you've reached the end of search results.</div>`;
hide(loadMoreBtn);





export async function handerLoadMorePhoto() {
  page += 1;
  const data = await fetchGetImage(queryValue);
  renderLoader();
  try {
    renderImage(data, galleryBox);
    lightbox.refresh();
    if (galleryBox.childElementCount >= data.totalHits) {
      hide(loadMoreBtn)
      galleryBox.insertAdjacentHTML('afterend', infoMessage);
    }
  } catch (error) {
    onFetchError(error);
  } finally {
    removeLoader();
    scroll();
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
      show(loadMoreBtn);
      loadMoreBtn.addEventListener('click', handerLoadMorePhoto);
    }
    if (data.hits.length === 0) {
      throw new Error(onFetchError());
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
    scroll();
    console.log(scroll());
  } catch (error) {
    onFetchError(error);
  } finally {
    searchForm.reset();
    removeLoader();
  }
}


 

export {
  galleryBox,
  searchForm,
  loadMoreBtn,
  hiddenClass,
  page,
  perPage,
  infoMessage,
};