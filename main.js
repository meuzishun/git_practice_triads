const audioCtx = new AudioContext();

async function getFile(audioContext, filepath) {
    const response = await fetch(filepath);
    const arrayBuffer = await response.arrayBuffer();
    const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
    return audioBuffer;
}

async function setupSample(audioFile) {
    const sample = await getFile(audioCtx, audioFile);
    return sample;
}

const triads = [...document.querySelectorAll('.triad')];

const reportInfo = function(evt) {
    const fileName = evt.target.dataset.audioFile;
    console.log(fileName);
}

triads.forEach(triad => triad.addEventListener('click', reportInfo));