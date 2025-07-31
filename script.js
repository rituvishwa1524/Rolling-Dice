const diceImage = document.getElementById('diceImage');
const rollingVideo = document.getElementById('rollingVideo');
const rollingAudio = document.getElementById('rollingAudio');
const rollBtn = document.getElementById('rollBtn');
const resultText = document.getElementById('resultText');

rollBtn.addEventListener('click', () => {
  diceImage.hidden = true;
  rollingVideo.hidden = false;
  rollingAudio.hidden = false;
   rollingAudio.play(); 
  resultText.textContent = 'Rolling...';

  setTimeout(() => {
    const roll = Math.floor(Math.random() * 6) + 1;
    diceImage.src = `assets/dice${roll}.png`;

    
    rollingVideo.hidden = true;
    rollingAudio.hidden = true;
    diceImage.hidden = false;
    resultText.textContent = `You rolled a ${roll}!`;
  }, 1000); 
});
