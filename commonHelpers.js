import{S as g,i as x,a as T}from"./assets/vendor-f144e563.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();let l;l=new g(".gallery a",{captionSelector:"img",captionType:"attr",captionsData:"alt",captionDelay:250});const f=document.querySelector(".search-form"),s=document.querySelector(".js-gallery"),u=document.querySelector(".btn_load_more"),m=document.querySelector(".info-meassage");f.addEventListener("submit",P);u.addEventListener("click",D);let d=1,y=200,h,q="<div class='info-meassage'>We're sorry, but you've reached the end of search results.</div>";async function L(e){const a="44752364-afb0e3777e04db30cc3f88e82",o=new URLSearchParams({key:a,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:d,per_page:y});return(await T.get(`https://pixabay.com/api/?${o}`)).data}async function D(){d+=1;const e=await L(h);try{v(),b(e,s),l.refresh(),s.childElementCount>=e.totalHits&&(u.classList.add("btn_load_more"),s.insertAdjacentHTML("afterend",q))}catch{c(),console.log(m)}finally{w(),p()}}async function P(e){if(e.preventDefault(),e.currentTarget.elements.search.value.trim()==="")return c();s.hasChildNodes&&(s.innerHTML=""),h=e.currentTarget.elements.search.value.toLowerCase().trim();try{v(),d=1;const o=await L(h);if(Math.ceil(o.totalHits/y)>d&&u.classList.remove("btn_load_more"),o.hits.length===0)throw console.log(m),new Error(c());b(o,s),l?l.refresh():l=new g(".gallery a",{captionSelector:"img",captionType:"attr",captionsData:"alt",captionDelay:250}),p(),console.log(p())}catch{c(),console.log(m)}finally{f.reset(),w()}}function b(e,a){const o=e.hits.map(({webformatURL:n,largeImageURL:t,tags:r,likes:i,views:S,comments:M,downloads:_})=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${t}">
        <img
          class="gallery-image"
          src="${n}"
          alt="${r}"
          width="360px"
          heigth="200px"
        />
        <ul class="gallery-info">
          <li class='info-items'>
          <h3 class='info-title'>Likes</h3>
          <p class="value"> ${i}</p>
          </li>
          <li class='info-items'>
          <h3 class='info-title'>Views</h3>
          <p class="value">${S}</p>
          </li>
          <li class='info-items'>
          <h3 class='info-title'>Comments</h3>
          <p class="value">${M}</p>
          </li>
          <li class='info-items'>
          <h3 class='info-title'>Downloads</h3>
         <p class="value"> ${_}</p>
          </li>
        </ul>
      </a>
    </li>
  `).join("");a.insertAdjacentHTML("beforeend",o)}function v(){let e=`
<span class="loader"></span>
`;f.insertAdjacentHTML("afterend",e)}function w(){let e=document.querySelector(".loader");e&&e.remove()}function c(e){u.classList.add("btn_load_more"),s.innerHTML="",f.reset(),x.error({theme:"dark",maxWidth:"432px",position:"topRight",messageLineHeight:"150%",messageSize:"16px",backgroundColor:"rgba(255, 190,190, 1)",progressBarColor:"rgba(181, 27,27, 1)",message:"Sorry, there are no images matching your search query. Please try again!"})}function p(){const e=s.firstElementChild.getBoundingClientRect().height;return console.log(e*2),window.scrollBy({top:e*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
