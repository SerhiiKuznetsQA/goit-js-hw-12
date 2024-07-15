import{a as P,i as C,S as p}from"./assets/vendor-53a1b719.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();function g(e,s){const r=e.hits.map(({webformatURL:i,largeImageURL:t,tags:o,likes:n,views:x,comments:q,downloads:T})=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${t}">
        <img
          class="gallery-image"
          src="${i}"
          alt="${o}"
          width="360px"
          heigth="200px"
        />
        <ul class="gallery-info">
          <li class='info-items'>
          <h3 class='info-title'>Likes</h3>
          <p class="value"> ${n}</p>
          </li>
          <li class='info-items'>
          <h3 class='info-title'>Views</h3>
          <p class="value">${x}</p>
          </li>
          <li class='info-items'>
          <h3 class='info-title'>Comments</h3>
          <p class="value">${q}</p>
          </li>
          <li class='info-items'>
          <h3 class='info-title'>Downloads</h3>
         <p class="value"> ${T}</p>
          </li>
        </ul>
      </a>
    </li>
  `).join("");s.insertAdjacentHTML("beforeend",r)}function y(){let e=document.querySelector(".js-loader");e.innerHTML='<span class="loader"></span>'}function L(){let e=document.querySelector(".loader");e&&e.remove()}function v(){const e=a.firstElementChild.getBoundingClientRect().height;return window.scrollBy({top:e*2,behavior:"smooth"})}function h(e){e.classList.add(M)}function D(e){e.classList.remove(M)}async function b(e){const s="44752364-afb0e3777e04db30cc3f88e82",r=new URLSearchParams({key:s,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:c,per_page:S});return(await P.get(`https://pixabay.com/api/?${r}`)).data}function d(e){w(),h(f),a.innerHTML="",m.reset(),C.error({theme:"dark",maxWidth:"432px",position:"topRight",messageLineHeight:"150%",messageSize:"16px",backgroundColor:"rgba(255, 190,190, 1)",progressBarColor:"rgba(181, 27,27, 1)",message:"Sorry, there are no images matching your search query. Please try again!"})}function w(){const e=document.querySelector(".info-meassage");e&&e.remove()}let l;l=new p(".gallery a",{captionSelector:"img",captionType:"attr",captionsData:"alt",captionDelay:250});const m=document.querySelector(".search-form"),a=document.querySelector(".js-gallery"),f=document.querySelector(".btn_load_more");m.addEventListener("submit",$);let c=1,S=15,u;const M="is-hidden";let E="<div class='info-meassage'>We're sorry, but you've reached the end of search results.</div>";h(f);async function H(){c+=1;const e=await b(u),s=Math.ceil(e.totalHits/S);console.log(s),y();try{g(e,a),l.refresh(),c===s&&(h(f),a.insertAdjacentHTML("afterend",E)),console.log(c,s)}catch{d()}finally{L(),v()}}async function $(e){if(e.preventDefault(),e.currentTarget.elements.search.value.trim()==="")return d();a.hasChildNodes&&(a.innerHTML=""),a.nextElementSibling.classList.contains("info-meassage")&&w(),u=e.currentTarget.elements.search.value.toLowerCase().trim(),c=1;try{y();const r=await b(u);if(r.hits.length>0&&r.hits.length!==r.totalHits&&(D(f),f.addEventListener("click",H)),r.hits.length===0)throw new Error(d());g(r,a),l?l.refresh():l=new p(".gallery a",{captionSelector:"img",captionType:"attr",captionsData:"alt",captionDelay:250}),v()}catch{d()}finally{m.reset(),L()}}
//# sourceMappingURL=commonHelpers.js.map
