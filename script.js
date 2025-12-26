// 1. Array of sound names based exactly on your output image
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

// 2. Select the container where buttons will be added
const btnContainer = document.getElementById('buttons');

// 3. Create buttons for each sound effect
sounds.forEach(sound => {
    const btn = document.createElement('button');
    
    // Requirement: Must have class 'btn'
    btn.classList.add('btn');
    
    // Set the button text to match the sound name
    btn.innerText = sound;

    // Play sound on click
    btn.addEventListener('click', () => {
        stopSongs(); // Stop any currently playing sound
        document.getElementById(sound).play();
    });

    btnContainer.appendChild(btn);
});

// 4. Create the 'stop' button as requested
const stopBtn = document.createElement('button');

// Requirement: Must have class 'stop'
stopBtn.classList.add('stop');
stopBtn.innerText = 'stop';

stopBtn.addEventListener('click', () => {
    stopSongs();
});

btnContainer.appendChild(stopBtn);

// 5. Function to stop all audio and reset progress to the beginning
function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound);
        if (song) {
            song.pause();
            song.currentTime = 0; // Reset playback to 0 seconds
        }
    });
}