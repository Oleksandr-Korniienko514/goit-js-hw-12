import{S as c,i as a}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const l of e.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function i(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function s(t){if(t.ep)return;t.ep=!0;const e=i(t);fetch(t.href,e)}})();function u(r){document.querySelector(".form").insertAdjacentHTML("afterend",'<div class="loader"></div>');const i="https://pixabay.com/api/",s=new URLSearchParams({key:"45213588-1347783919d0c1f7f1631233d",q:r,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:20}),t=`${i}?${s}`;return fetch(t).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>e).catch(e=>{console.error("Error fetching images:",e)}).finally(()=>{const e=document.querySelector(".loader");e&&e.remove()})}const m=document.querySelector(".gallery");function f({webformatURL:r,largeImageURL:o,tags:i,likes:s,views:t,comments:e,downloads:l}){return`<li class="gallery-card"> 
    <figure class="image-container">
      <a href="${o}">
        <img class="image-thumbnail" src="${r}" alt="${i}" title="" width="360" height="200"/>
      </a>
      <figcaption class="image-details">
        <ul class="details-list">
          <li class="details-item">Likes<p class="details-count">${s}</p></li>
          <li class="details-item">Views<p class="details-count">${t}</p></li>
          <li class="details-item">Comments<p class="details-count">${e}</p></li>
          <li class="details-item">Downloads<p class="details-count">${l}</p></li>
        </ul>
      </figcaption>
    </figure>
  </li>`}function d(r){return r.map(f).join("")}function p(r){const o=d(r);m.innerHTML=o}const n={btnSearch:document.querySelector(".btn-search"),form:document.querySelector(".form"),input:document.querySelector("input"),ul:document.querySelector("ul")};n.form.addEventListener("submit",r=>{r.preventDefault(),n.ul.innerHTML="",n.input.value.trim()?u(n.input.value).then(i=>{i.total!==0?(p(i.hits),new c(".gallery a").refresh()):a.error({message:"SSorry, there are no images matching your search query. Please try again!",position:"topRight"})}).catch(i=>console.log(i)).finally(()=>{n.input.value=""}):a.error({message:"Enter value",position:"topRight"})});
//# sourceMappingURL=commonHelpers.js.map
