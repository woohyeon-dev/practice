const resultModal = document.querySelector('.result-modal');
const resultMessage = document.querySelector('.result-modal__message');
const resultTime = document.querySelector('.result-modal__time');
const resultCount = document.querySelector('.result-modal__count');
const resultModalBtns = Array.from(
  document.querySelectorAll('.result-modal__buttons')
);

resultModalBtns.map(button => {
  button.addEventListener('click', handleResultBtns);
});

function handleResultBtns(e) {
  switch (e.target.innerText) {
    case 'RETRY':
      resultModal.classList.toggle('hidden');
      resetGame();
      applySetting();
      runFrame();
      break;
    case 'MENU':
      resultModal.classList.toggle('hidden');
      switchSettingScreen();
      resetGame();
      break;
  }
}

function openResultModal() {
  resultModal.classList.toggle('hidden');
  cancelAnimationFrame(animation);
  if (minute === 3) {
    resultMessage.innerText = 'Success!';
    resultMessage.style.color = 'rgba(151,188,98,0.7)';
  } else {
    resultMessage.innerText = 'Failed';
    resultMessage.style.color = 'red';
  }
  resultTime.innerText = `Time: ${playTime.innerText}`;
  resultCount.innerText = `Typing words: ${wordCnt}`;
}
