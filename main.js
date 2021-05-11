
const audioCtx = new AudioContext();
const audioFiles = {};

const getFile = async function(audioContext, filepath) {
    const response = await fetch(filepath);
    const arrayBuffer = await response.arrayBuffer();
    const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
    return audioBuffer;
}

const setupSample = async function(audioFile) {
    const sample = await getFile(audioCtx, audioFile);
    return sample;
}

const loadAudio = async function() {
    const testSample = 'audio/60.wav';
    const sample = await setupSample(testSample);
    audioFiles[testSample] = sample;
    // triads.forEach(triad => {
        // const audioFile = triad.dataset.audioFile;
        // const sample = await setupSample(`audio/${audioFile}`);
        // audioFiles[audioFile] = sample;
    // });
    console.table(audioFiles);
}

const playSample = function(sample) {
    let sampleSource = audioCtx.createBufferSource();
    sampleSource.buffer = sample;
    sampleSource.connect(audioCtx.destination);
    sampleSource.start();
}
    
const reportInfo = function(evt) {
    const fileName = evt.target.dataset.audioFile;
    console.log(fileName);
}
const triads = [...document.querySelectorAll('.triad')];


triads.forEach(triad => triad.addEventListener('click', reportInfo));

window.addEventListener('load', loadAudio);

document.addEventListener('click', () => {
    playSample(testAudio);
});

