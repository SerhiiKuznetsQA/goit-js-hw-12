import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import {
  galleryBox,
  searchForm,
  loadMoreBtn,
  page,
  perPage,
} from '../main';
import { hide } from './render-functions';



export async function fetchGetImage(query) {
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
export function onFetchError(error) {
  const infoMessDiv = document.querySelector('.info-meassage');
  if (infoMessDiv) {
    infoMessDiv.remove();
  }
  hide(loadMoreBtn);
  galleryBox.innerHTML = '';
  searchForm.reset();
  iziToast.error({
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