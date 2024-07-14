import{a as C,i as T,S as y}from"./assets/vendor-53a1b719.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();function L(e,o){const s=e.hits.map(({webformatURL:i,largeImageURL:t,tags:r,likes:n,views:M,comments:q,downloads:x})=>`
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
  `).join("");o.insertAdjacentHTML("beforeend",s)}function v(){let e=document.querySelector(".js-loader");e.innerHTML='<span class="loader"></span>'}function b(){let e=document.querySelector(".loader");e&&e.remove()}function f(){const e=a.firstElementChild.getBoundingClientRect().height;return window.scrollBy({top:e*2,behavior:"smooth"})}function p(e){e.classList.add(S)}function E(e){e.classList.remove(S)}async function w(e){const o="44752364-afb0e3777e04db30cc3f88e82",s=new URLSearchParams({key:o,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:u,per_page:h});return(await C.get(`https://pixabay.com/api/?${s}`)).data}function d(e){const o=document.querySelector(".info-meassage");o&&o.remove(),p(c),a.innerHTML="",g.reset(),T.error({theme:"dark",maxWidth:"432px",position:"topRight",messageLineHeight:"150%",messageSize:"16px",backgroundColor:"rgba(255, 190,190, 1)",progressBarColor:"rgba(181, 27,27, 1)",message:"Sorry, there are no images matching your search query. Please try again!"})}let l;l=new y(".gallery a",{captionSelector:"img",captionType:"attr",captionsData:"alt",captionDelay:250});const g=document.querySelector(".search-form"),a=document.querySelector(".js-gallery"),c=document.querySelector(".btn_load_more");g.addEventListener("submit",D);let u=1,h=15,m;const S="is-hidden";let H="<div class='info-meassage'>We're sorry, but you've reached the end of search results.</div>";p(c);async function P(){u+=1;const e=await w(m);v();try{L(e,a),l.refresh(),a.childElementCount<=e.totalHits&&(p(c),a.insertAdjacentHTML("afterend",H))}catch{d()}finally{b(),f()}}async function D(e){if(e.preventDefault(),e.currentTarget.elements.search.value.trim()==="")return d();a.hasChildNodes&&(a.innerHTML=""),m=e.currentTarget.elements.search.value.toLowerCase().trim();try{v(),u=1;const s=await w(m),i=Math.ceil(s.totalHits/h);if(a.childElementCount>=h&&(console.log(s.totalHits),console.log("teset")),i>u&&(E(c),c.addEventListener("click",P)),s.hits.length===0)throw new Error(d());L(s,a),l?l.refresh():l=new y(".gallery a",{captionSelector:"img",captionType:"attr",captionsData:"alt",captionDelay:250}),f(),console.log(f())}catch{d()}finally{g.reset(),b()}}
//# sourceMappingURL=commonHelpers.js.map
