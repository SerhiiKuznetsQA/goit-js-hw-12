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
import { removeInfoMeassage } from './js/pixabay-api';

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
let perPage = 15;
let queryValue;
const hiddenClass = 'is-hidden';
let infoMessage = `<div class='info-meassage'>We're sorry, but you've reached the end of search results.</div>`;
hide(loadMoreBtn);

export async function handerLoadMorePhoto() {
  page += 1;
  const data = await fetchGetImage(queryValue);
  const totalData = Math.ceil(data.totalHits / perPage);
  console.log(totalData);
  renderLoader();
  try {
    renderImage(data, galleryBox);
    lightbox.refresh();
    if (page === totalData) {
        hide(loadMoreBtn);
        galleryBox.insertAdjacentHTML('afterend', infoMessage);
    }
    console.log(page,totalData);

   
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
  // console.log(galleryBox.childNodes);
  if (galleryBox.nextElementSibling.classList.contains('info-meassage')) {
    removeInfoMeassage();
  }
  const form = evt.currentTarget;
  queryValue = form.elements.search.value.toLowerCase().trim();
  page = 1;
  try {
    renderLoader();

    const data = await fetchGetImage(queryValue);
    if (data.hits.length > 0 && data.hits.length !== data.totalHits) {
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
