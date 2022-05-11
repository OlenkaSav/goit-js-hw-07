import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector(".gallery")
const galleryMarkup = createGalleryMarkup(galleryItems);

function createGalleryMarkup(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
        return `<li><a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a></li>`;
}).join('');
}

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

let gallery2 = new SimpleLightbox('.gallery a', {  captionDelay: 250, captionsData: "alt"});
gallery2.on('show.simplelightbox', function () {

});




// // with jQuery nearly the same
// let gallery2 = $('.gallery a').simpleLightbox();
// gallery.on('show.simplelightbox', function () {
// 	// do something…
// });


console.log(galleryItems);
