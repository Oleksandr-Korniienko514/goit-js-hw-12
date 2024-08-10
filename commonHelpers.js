import{a as B,i as a,S as L}from"./assets/vendor-31f4717e.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function l(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=l(t);fetch(t.href,o)}})();const w="https://pixabay.com/api/",S="45213588-1347783919d0c1f7f1631233d";async function h(e,s){const l={key:S,q:e,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15,page:s};try{const i=await B.get(w,{params:l});return i.data&&Array.isArray(i.data.hits)?i.data:(a.error({title:"Error",message:"Unexpected API response format.",position:"topRight"}),{hits:[]})}catch(i){return a.error({title:"Request error",message:`Something went wrong: ${i.message}`,position:"topRight"}),{hits:[]}}}const b=document.querySelector(".gallery");function v({webformatURL:e,largeImageURL:s,tags:l,likes:i,views:t,comments:o,downloads:d}){return`<li class="gallery-card"> 
    <figure class="image-container">
      <a href="${s}">
        <img class="image-thumbnail" src="${e}" alt="${l}" title="" width="360" height="200"/>
      </a>
      <figcaption class="image-details">
        <ul class="details-list">
          <li class="details-item">Likes<p class="details-count">${i}</p></li>
          <li class="details-item">Views<p class="details-count">${t}</p></li>
          <li class="details-item">Comments<p class="details-count">${o}</p></li>
          <li class="details-item">Downloads<p class="details-count">${d}</p></li>
        </ul>
      </figcaption>
    </figure>
  </li>`}function q(e){return e.map(v).join("")}function g(e){const s=q(e);b.innerHTML+=s}const r={btnSearch:document.querySelector(".btn-search"),form:document.querySelector(".form"),input:document.querySelector("input"),ul:document.querySelector("ul.gallery"),loadBtn:document.querySelector(".load-btn")};let c=1,m="",p=new L(".gallery a"),u=0,n=0;r.loadBtn.classList.add("hiddenBtn");r.form.addEventListener("submit",async e=>{if(e.preventDefault(),m=r.input.value.trim(),m===""){a.error({title:"Error",message:"Please enter a search query"}),r.loadBtn.classList.add("hiddenBtn");return}r.ul.innerHTML="",c=1,u=0,n=0,y();try{const s=await h(m,c);f(),s.hits.length===0?(a.error({title:"No results",message:"No images found. Please try a different query."}),r.loadBtn.classList.add("hiddenBtn")):(u=s.totalHits,n+=s.hits.length,g(s.hits),p.refresh(),n>=u?r.loadBtn.classList.add("hiddenBtn"):r.loadBtn.classList.remove("hiddenBtn"))}catch{f(),a.error({title:"Error",message:"Something went wrong."}),r.loadBtn.classList.add("hiddenBtn")}});r.loadBtn.addEventListener("click",async()=>{c+=1,console.log("Page incremented:",c),y();try{const e=await h(m,c);f(),e.hits.length===0?(a.info({title:"No more results",message:"We're sorry, but you've reached the end of search results."}),r.loadBtn.classList.add("hiddenBtn")):(n+=e.hits.length,g(e.hits),p.refresh(),n>=u&&(r.loadBtn.classList.add("hiddenBtn"),a.info({title:"No more results",message:"We're sorry, but you've reached the end of search results."}))),E()}catch{f(),a.error({title:"Error",message:"Something went wrong."}),r.loadBtn.classList.add("hiddenBtn")}});function E(){window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"})}function y(){r.loadBtn.classList.add("hiddenBtn"),r.loadBtn.insertAdjacentHTML("afterend",'<div id="loader" class="loader"></div>')}function f(){const e=document.querySelector(".loader");e&&e.remove(),n<u&&r.loadBtn.classList.remove("hiddenBtn")}
//# sourceMappingURL=commonHelpers.js.map
