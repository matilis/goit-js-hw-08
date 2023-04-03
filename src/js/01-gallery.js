import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items.js';

const galleryEl = document.querySelector('.gallery');

const images = galleryItems
  .map(
    photo =>
      `<li class="gallery__item"><a class="gallery__link" href="${photo.original}"><img class="gallery__image" src="${photo.preview}"  alt="${photo.description}"  /></a></li>`
  )
  .join('');
galleryEl.insertAdjacentHTML('beforeend', images);

const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});
