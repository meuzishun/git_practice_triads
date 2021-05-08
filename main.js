const triads = [...document.querySelectorAll('.triad')];

const reportInfo = function(evt) {
    const elem = evt.target;
    const parent = elem.parentElement;
    console.log(parent);
    console.log(elem);
}

triads.forEach(triad => triad.addEventListener('click', reportInfo));