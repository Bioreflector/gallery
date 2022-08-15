function Gallery(gallery){
    if(!gallery){
        throw new Error('Gallery element Should be passed!')
    }
    const images = gallery.querySelectorAll('img')
    const modal = document.querySelector('.modal')
    const prevButton = document.querySelector('.prev')
    const nexButton = document.querySelector('.next')
    let currentImage
    function openModal(){
        if(modal.matches('.open')){
            console.info('modal is open')
        }
        modal.classList.add('open')
        nexButton.addEventListener('click' , showNextImage)
        prevButton.addEventListener('click' , showPrevImage)
        window.addEventListener('keydown' , handleKeyUp)
        
    }
    function closeModal(){
        modal.classList.remove('open')
        window.removeEventListener('keydown' , handleKeyUp)
        nexButton.removeEventListener('click' , showNextImage)
        prevButton.removeEventListener('click' , showPrevImage)
       
    }
    function showImage(image){
        currentImage = image
        console.log(image)
        modal.querySelector('img').src = image.src
        modal.querySelector('h2').textContent = image.title
        modal.querySelector('figcaption p').textContent = image.dataset.description
        openModal()
    }
    function showNextImage(){
        showImage(currentImage.nextElementSibling)
    }
    function showPrevImage(){
        showImage(currentImage.previousElementSibling)
    }
    function handleKeyUp(e){
        if(e.key === 'Escape')  return closeModal()
        if(e.key === 'ArrowLeft') return showPrevImage()
        if(e.key === 'ArrowRight') return showNextImage()
    }
    function handleOutModalClick(e){
        if(e.target === e.currentTarget){
            closeModal()
        }
    }


    images.forEach((image) =>

    image.addEventListener('click', ({ currentTarget }) =>

      showImage(currentTarget),

    ),

  );

    modal.addEventListener('click' , closeModal)
    
}
const gallery1 = Gallery(document.querySelector('.gallery1'))
const gallery2 = Gallery(document.querySelector('.gallery2'))

