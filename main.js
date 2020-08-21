document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.myPhotos')

    images.forEach(image => {
        image.onclick = function () {
            this.classList.add('anim')

            this.addEventListener('animationend', function () {
                this.classList.remove('anim')
            })
        }
    });
})