import{S as p,i as M,a as T}from"./assets/vendor-f144e563.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();let l;l=new p(".gallery a",{captionSelector:"img",captionType:"attr",captionsData:"alt",captionDelay:250});const f=document.querySelector(".search-form"),s=document.querySelector(".js-gallery"),m=document.querySelector(".btn_load_more");f.addEventListener("submit",q);m.addEventListener("click",_);let d=1,h=200,u,P="<div>We're sorry, but you've reached the end of search results.</div>";async function g(e){const o="44752364-afb0e3777e04db30cc3f88e82",a=new URLSearchParams({key:o,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:d,per_page:h});return(await T.get(`https://pixabay.com/api/?${a}`)).data}async function _(){d+=1;const e=await g(u);try{L(),y(e,s),l.refresh(),s.childElementCount>=e.totalHits&&(m.classList.add("btn_load_more"),s.insertAdjacentHTML("beforeend",P))}catch{c()}finally{b()}}async function q(e){if(e.preventDefault(),e.currentTarget.elements.search.value.trim()==="")return c();s.hasChildNodes&&(s.innerHTML=""),u=e.currentTarget.elements.search.value.toLowerCase().trim();try{L(),d=1;const a=await g(u);if(Math.ceil(a.totalHits/h)>d&&m.classList.remove("btn_load_more"),a.hits.length===0)throw new Error(c);y(a,s),l?l.refresh():l=new p(".gallery a",{captionSelector:"img",captionType:"attr",captionsData:"alt",captionDelay:250})}catch{c()}finally{f.reset(),b()}}function y(e,o){const a=e.hits.map(({webformatURL:i,largeImageURL:t,tags:r,likes:n,views:v,comments:S,downloads:w})=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${t}">
        <img
          class="gallery-image"
          src="${i}"
          alt="${r}"
        />
        <ul class="gallery-info">
          <li class='info-items'>
          <h3 class='info-title'>Likes</h3>
          <p class="value"> ${n}</p>
          </li>
          <li class='info-items'>
          <h3 class='info-title'>Views</h3>
          <p class="value">${v}</p>
          </li>
          <li class='info-items'>
          <h3 class='info-title'>Comments</h3>
          <p class="value">${S}</p>
          </li>
          <li class='info-items'>
          <h3 class='info-title'>Downloads</h3>
         <p class="value"> ${w}</p>
          </li>
        </ul>
      </a>
    </li>
  `).join("");o.insertAdjacentHTML("beforeend",a)}function L(){let e=`
<span class="loader"></span>
`;f.insertAdjacentHTML("afterend",e)}function b(){let e=document.querySelector(".loader");e&&e.remove()}function c(e){s.innerHTML="",f.reset(),M.error({theme:"dark",maxWidth:"432px",position:"topRight",messageLineHeight:"150%",messageSize:"16px",backgroundColor:"rgba(255, 190,190, 1)",progressBarColor:"rgba(181, 27,27, 1)",message:"Sorry, there are no images matching your search query. Please try again!"})}
//# sourceMappingURL=commonHelpers.js.map
