let speech = new SpeechSynthesisUtterance();
let voices = [];
const voiceselect = document.querySelector("select");
const button = document.querySelector("button");
const textarea = document.querySelector("textarea");

// Function to populate the voice options
function populateVoices() {
    voices = window.speechSynthesis.getVoices();
    voiceselect.innerHTML = ''; // Clear existing options
    voices.forEach((voice, index) => {
        const option = new Option(voice.name, index);
        voiceselect.add(option);
    });
    if (voices.length > 0) {
        speech.voice = voices[0]; // Default to the first voice
    }
}

// Event handler for when voices are loaded
window.speechSynthesis.onvoiceschanged = populateVoices;

// Event handler for when the voice selection changes
voiceselect.addEventListener("change", () => {
    const selectedIndex = parseInt(voiceselect.value, 10);
    if (voices[selectedIndex]) {
        speech.voice = voices[selectedIndex];
    }
});

// Event handler for when the button is clicked
button.addEventListener("click", () => {
    speech.text = textarea.value;
    window.speechSynthesis.speak(speech);
});

// Initial call to populate voices
populateVoices();
