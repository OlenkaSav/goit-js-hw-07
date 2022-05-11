import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector(".gallery")
const galleryMarkup = createGalleryMarkup(galleryItems);

function createGalleryMarkup(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
        return `<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
}).join('');
}

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

galleryContainer.addEventListener('click', onClick);

function onClick(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return
    }

    const largeImgLink = event.target.dataset.source;
    // console.log(event.target.nodeName);

    const image = basicLightbox.create(`
		<img width="1400" height="900" src="${largeImgLink}">
	`, {
        onShow: (image) => { window.addEventListener('keydown', onEscDown, { once: true }); },

        onClose: (image) => { window.removeEventListener('keydown', onEscDown); }
    }
    );

    image.show();

    
 	//  * Function that gets executed before the lightbox will be shown.
	//  * Returning false will prevent the lightbox from showing.
	//  */
   

   

    function onEscDown(event) {
    if (event.code === 'Escape') {
        console.log(event);
        image.close()
    } 
}
}




