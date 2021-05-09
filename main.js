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

const reportInfo = function(evt) {
    const fileName = evt.target.dataset.audioFile;
    console.log(fileName);
}

let testAudio = null;
const loadAudio = function() {
    const testSample = 'audio/60.wav';
    const sample = setupSample(testSample);
    testAudio = sample;
    // triads.forEach(triad => {
        // const audioFile = triad.dataset.audioFile;
        // const sample = setupSample(`audio/${audioFile}`);
    // });
}

const playSample = function(sample) {
    console.log(sample);
    let sampleSource = audioCtx.createBufferSource();
    console.log(sampleSource);
    sampleSource.buffer = sample;
    console.log(sampleSource);
    // sampleSource.connect(audioCtx.destination);
    // sample.start();
}

const triads = [...document.querySelectorAll('.triad')];


triads.forEach(triad => triad.addEventListener('click', reportInfo));

window.addEventListener('load', loadAudio);

document.addEventListener('click', () => {
    playSample(testAudio);
});