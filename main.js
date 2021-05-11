
const audioCtx = new AudioContext();
const audioFiles = {};
const triads = [...document.querySelectorAll('.triad')];

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

const loadAudio = async function(file) {
    const sample = await setupSample(`audio/${file}`);
    audioFiles[file] = sample;
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
    const sample = audioFiles[fileName];
    // console.log(file);
    playSample(sample);
}



triads.forEach(triad => triad.addEventListener('click', reportInfo, { capture: true }));

window.addEventListener('load', () => {
    triads.forEach(triad => {
        const audioFile = triad.dataset.audioFile;
        console.log(audioFile);
        loadAudio(audioFile);
    });
});

// document.addEventListener('click', () => {
//     playSample(testAudio);
// });

