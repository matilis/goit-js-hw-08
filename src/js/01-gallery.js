import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items.js';

const galleryEl = document.querySelector('.gallery');

for (const image of galleryItems) {
  const imgEl = `<div class="gallery__item">
  <a class="gallery__link" href=${image.original}>
 <img class="gallery__image"
      src=${image.preview}
      data-source=${image.original}
      alt=${image.description}
    />
  </a>
  </div>`;

  galleryEl.insertAdjacentHTML('beforeend', imgEl);
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});
