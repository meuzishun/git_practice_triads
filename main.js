const triads = [...document.querySelectorAll('.triad')];

const reportInfo = function(evt) {
    console.log(evt.target)
}

triads.forEach(triad => triad.addEventListener('click', reportInfo));