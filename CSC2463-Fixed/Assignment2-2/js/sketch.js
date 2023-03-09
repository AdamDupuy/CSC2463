//Adam Dupuy 2023
//
let slider1;
let instrument = 1;

const synth = new Tone.PluckSynth();
const drum = new Tone.MembraneSynth();
const metal = new Tone.MetalSynth({
    "frequency": 45,
    "envelope": {
        "attack":0.001,
        "decay":0.4,
        "octaves":0.2
    },
    "harmonicity":8.5,
    "modulationIndex":40,
    "resonance":300,
    "octaves":1.5
});
const reverb = new Tone.JCReverb(0.4).toDestination();
synth.connect(reverb);
drum.connect(reverb);
metal.connect(reverb);

let notes = {

    'a':'C4',
    's':'D4',
    'd':'E4',
    'f':'F4',
    'g':'G4',
    'h':'A4',
    'j':'B4',
    'k':'C5'

}

function setup() {
    createCanvas(400,400);
    slider1 = new Nexus.Slider("#slider1");
    synth.release = 2;
    synth.resonance = 0.98;

    slider1.on('change', (v) => {
        reverb.roomSize.value = v;
    })
}

function draw() {
    background(220);
}

function keyPressed() {
    let whatNote = notes[key];
    //synth.harmonicity.value = 0.5;

    if (key == 1){
        instrument = 1;
    }
    else if (key == 2){
        instrument = 2;
    }
    else if (key == 3) {
        instrument = 3;
    }

    if (instrument == 1){
    synth.triggerAttackRelease(whatNote, "8n");
    }
    else if (instrument == 2){
    drum.triggerAttackRelease(whatNote, "8n");
    }
    else if (instrument == 3){
    metal.triggerAttackRelease(whatNote, "8n");
    }
}