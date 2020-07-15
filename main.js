let indicator = 0;
let element = document.querySelector('#insertHTML');
function info() {
    if (indicator === 0) {
        element.innerHTML = 'You may have noticed that there are not many <b>good</b> photos of mine. Alas!!';
        indicator = 1;
    }
    else {
        element.innerHTML = '';
        indicator = 0;
    }
}