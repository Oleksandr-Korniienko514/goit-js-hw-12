import{i as l}from"./assets/vendor-8e8cd629.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();function c(o){const t=document.querySelector(".form"),s=document.createElement("div");s.className="loader",t.insertAdjacentElement("afterend",s);const n="https://pixabay.com/api/",e=new URLSearchParams({key:"45213588-1347783919d0c1f7f1631233d",q:o,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:20}),r=`${n}?${e}`;return fetch(r).then(i=>{if(!i.ok)throw new Error(`HTTP error! status: ${i.status}`);return i.json()}).catch(i=>{throw console.error("Error fetching images:",i),l.error({title:"Error",message:"An error occurred while fetching images. Please try again later.",position:"topRight"}),i}).finally(()=>{s&&s.remove()})}const u=document.querySelector(".gallery");function m({webformatURL:o,largeImageURL:t,tags:s,likes:n,views:e,comments:r,downloads:i}){return`<li class="gallery-card"> 
    <figure class="image-container">
      <a href="${t}">
        <img class="image-thumbnail" src="${o}" alt="${s}" title="" width="360" height="200"/>
      </a>
      <figcaption class="image-details">
        <ul class="details-list">
          <li class="details-item">Likes<p class="details-count">${n}</p></li>
          <li class="details-item">Views<p class="details-count">${e}</p></li>
          <li class="details-item">Comments<p class="details-count">${r}</p></li>
          <li class="details-item">Downloads<p class="details-count">${i}</p></li>
        </ul>
      </figcaption>
    </figure>
  </li>`}function f(o){return o.map(m).join("")}function d(o){const t=f(o);u.innerHTML=t,new SimpleLightbox(".gallery a").refresh()}const a={btnSearch:document.querySelector(".btn-search"),form:document.querySelector(".form"),input:document.querySelector("input"),ul:document.querySelector("ul")};a.form.addEventListener("submit",o=>{o.preventDefault(),a.ul.innerHTML="",a.input.value.trim()?c(a.input.value).then(t=>{t&&t.total!==0?d(t.hits):l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}).catch(t=>{console.log("An error occurred:",t),l.error({title:"Error",message:"An error occurred while fetching images. Please check your internet connection and try again.",position:"topRight"})}).finally(()=>{a.input.value=""}):l.error({title:"Error",message:"Please enter a search term.",position:"topRight"})});
//# sourceMappingURL=commonHelpers.js.map
