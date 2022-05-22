const lightbox = document.querySelector('#lightbox');
const closeBtn = document.querySelector('#close');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const buttons = document.querySelector('#buttons');

const images = document.querySelectorAll('img');
const slide = Array.from(images);

images.forEach(image => {
    image.addEventListener('click', e => {
        lightbox.classList.add('active');
        buttons.style.display = 'block';
        const img = document.createElement('img');
        img.src = image.src;
        while (lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild);
        }
        lightbox.appendChild(img);
        console.log(slide.indexOf(image))
        let index = slide.indexOf(image)
        prev.addEventListener('click', e => {
            index--;
            if (index < 0) {
                index = slide.length-1;
                img.src = slide[index].src;
            }
            img.src = slide[index].src;
        })
        next.addEventListener('click', e => {
            index++;
            if (index > slide.length-1) {
                index = 0;
                img.src = slide[index].src;
            }
            img.src = slide[index].src;
        })
    })
})
closeBtn.addEventListener('click', e => {
    lightbox.classList.remove('active');
    buttons.style.display = 'none';
})
