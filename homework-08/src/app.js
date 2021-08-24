const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];
const galleryRef = document.querySelector('.js-gallery');
console.log(galleryRef);

// create patern string
const createImageEl = (acc, { preview, original, description }) =>
  acc +
  `<li class="gallery_item">
    <img class="gallery__image"   src="${preview}" 
    data-source="${original}"
    alt ="${description}">
  </li>`;
// create array  and call function
const markUp = galleryItems.reduce(createImageEl, '');
// console.log(markUp);
galleryRef.insertAdjacentHTML('beforeend', markUp);
//append array in html
galleryRef.addEventListener('click', onOpenModalClick);

const lightBoxOpen = document.querySelector('.js-lightbox');
function onOpenModalClick(event) {
  window.addEventListener('keydown', logMessage);
  //console.dir(event.target);
  //console.log(event.target.dataset.source);
  lightBoxOpen.classList.add('is-open');
  const lightBox = document.querySelector('.lightbox__image');
  lightBox.src = event.target.dataset.source;
  console.log(event);
}
const lightBoxClose = document.querySelector('.lightbox__overlay');
lightBoxClose.addEventListener('click', onCloseModalClick);
const lightBoxCloseBtn = document.querySelector('.lightbox__button');
lightBoxCloseBtn.addEventListener('click', onCloseModalClick);

function logMessage({ type, key, code }) {
  //console.log(code);
  if (code === 'Escape') {
    onCloseModalClick();
  }
}
function onCloseModalClick() {
  window.removeEventListener('keydown', logMessage);
  const lightBoxOpen = document.querySelector('.js-lightbox');
  lightBoxOpen.classList.remove('is-open');
  const lightBox = document.querySelector('.lightbox__image');
  lightBox.src = '';
}
