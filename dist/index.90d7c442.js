const o=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",description:"Container Haulage Freight"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",description:"Aerial Beach View"},{preview:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",original:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",description:"Flower Blooms"},{preview:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",original:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",description:"Alpine Mountains"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",description:"Mountain Lake Sailing"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",description:"Alpine Spring Meadows"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",description:"Nature Landscape"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",description:"Lighthouse Coast Sea"}],t={galleryEl:document.querySelector(".js-gallery"),lightBoxEl:document.querySelector(".js-lightbox"),lightBoxImgEl:document.querySelector(".lightbox__image"),lightBoxOverlayEl:document.querySelector(".lightbox__overlay"),closeBtnEl:document.querySelector("[data-action='close-lightbox']")};function e(){t.lightBoxEl.classList.remove("is-open"),t.lightBoxImgEl.src=""}t.galleryEl.addEventListener("click",(function(o){if(o.preventDefault(),"IMG"!==o.target.nodeName)return;const e=o.target.dataset.source;t.lightBoxEl.classList.add("is-open"),t.lightBoxImgEl.src=e,t.lightBoxImgEl.alt=o.target.alt})),t.closeBtnEl.addEventListener("click",e),t.lightBoxOverlayEl.addEventListener("click",(function(o){e()})),window.addEventListener("keydown",(function(o){"Escape"===o.code&&e()}));const i=o.map((({preview:o,original:t,description:e})=>`\n        <li class="gallery__item">\n          <a\n            class="gallery__link"\n            href="${t}"\n          >\n            <img\n              class="gallery__image"\n              src="${o}"\n              data-source="${t}"\n              alt="${e}"\n            />\n          </a>\n       </li>\n     `)).join("");t.galleryEl.insertAdjacentHTML("beforeend",i);
//# sourceMappingURL=index.90d7c442.js.map
