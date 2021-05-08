const triads = [...document.querySelectorAll('.triad')];

const reportInfo = function(evt) {
    const fileName = evt.target.dataset.audioFile;
    console.log(fileName);
}

triads.forEach(triad => triad.addEventListener('click', reportInfo));