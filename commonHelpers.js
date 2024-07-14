import{a as T,i as C,S as g}from"./assets/vendor-53a1b719.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();function y(e,o){const a=e.hits.map(({webformatURL:i,largeImageURL:t,tags:r,likes:n,views:M,comments:q,downloads:x})=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${t}">
        <img
          class="gallery-image"
          src="${i}"
          alt="${r}"
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
          <p class="value">${M}</p>
          </li>
          <li class='info-items'>
          <h3 class='info-title'>Comments</h3>
          <p class="value">${q}</p>
          </li>
          <li class='info-items'>
          <h3 class='info-title'>Downloads</h3>
         <p class="value"> ${x}</p>
          </li>
        </ul>
      </a>
    </li>
  `).join("");o.insertAdjacentHTML("beforeend",a)}function L(){let e=document.querySelector(".js-loader");e.innerHTML='<span class="loader"></span>'}function v(){let e=document.querySelector(".loader");e&&e.remove()}function f(){const e=s.firstElementChild.getBoundingClientRect().height;return console.log(e*2),window.scrollBy({top:e*2,behavior:"smooth"})}function m(e){e.classList.add(S)}function D(e){e.classList.remove(S)}async function b(e){const o="44752364-afb0e3777e04db30cc3f88e82",a=new URLSearchParams({key:o,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:u,per_page:w});return(await T.get(`https://pixabay.com/api/?${a}`)).data}function d(e){const o=document.querySelector(".info-meassage");o&&o.remove(),m(c),s.innerHTML="",p.reset(),C.error({theme:"dark",maxWidth:"432px",position:"topRight",messageLineHeight:"150%",messageSize:"16px",backgroundColor:"rgba(255, 190,190, 1)",progressBarColor:"rgba(181, 27,27, 1)",message:"Sorry, there are no images matching your search query. Please try again!"})}let l;l=new g(".gallery a",{captionSelector:"img",captionType:"attr",captionsData:"alt",captionDelay:250});const p=document.querySelector(".search-form"),s=document.querySelector(".js-gallery"),c=document.querySelector(".btn_load_more");p.addEventListener("submit",H);let u=1,w=200,h;const S="is-hidden";let P="<div class='info-meassage'>We're sorry, but you've reached the end of search results.</div>";m(c);async function E(){u+=1;const e=await b(h);L();try{y(e,s),l.refresh(),s.childElementCount>=e.totalHits&&(m(c),s.insertAdjacentHTML("afterend",P))}catch{d()}finally{v(),f()}}async function H(e){if(e.preventDefault(),e.currentTarget.elements.search.value.trim()==="")return d();s.hasChildNodes&&(s.innerHTML=""),h=e.currentTarget.elements.search.value.toLowerCase().trim();try{L(),u=1;const a=await b(h);if(Math.ceil(a.totalHits/w)>u&&(D(c),c.addEventListener("click",E)),a.hits.length===0)throw new Error(d());y(a,s),l?l.refresh():l=new g(".gallery a",{captionSelector:"img",captionType:"attr",captionsData:"alt",captionDelay:250}),f(),console.log(f())}catch{d()}finally{p.reset(),v()}}
//# sourceMappingURL=commonHelpers.js.map
