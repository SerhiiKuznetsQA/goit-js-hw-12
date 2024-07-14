import {
  galleryBox,
  hiddenClass,
} from '../main';




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
          width="360px"
          heigth="200px"
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
  let loader = document.querySelector('.js-loader');
  loader.innerHTML = `<span class="loader"></span>`;
}
export function removeLoader() {
  let loader = document.querySelector('.loader');
  if (loader) {
    loader.remove();
  }
}



export function scroll() {
  const a = galleryBox.firstElementChild.getBoundingClientRect().height;
  console.log(a * 2);
  return window.scrollBy({
    top: a * 2,
    behavior: 'smooth',
  });
}

// hide(loadMoreBtn)
export function hide(loadMoreBtn) {
  loadMoreBtn.classList.add(hiddenClass);
}

export function show(loadMoreBtn) {
  loadMoreBtn.classList.remove(hiddenClass);
}
