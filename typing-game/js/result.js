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

// 結果モーダルのボタンを処理する関数
function handleResultBtns(e) {
  switch (e.target.innerText) {
    // RETRYボタンをクリックした場合、ゲームをリスタートする
    case 'RETRY':
      resultModal.classList.toggle('hidden');
      resetGame();
      applySetting();
      runFrame();
      break;
    // MENUボタンをクリックした場合、ゲーム設定画面に戻る
    case 'MENU':
      resultModal.classList.toggle('hidden');
      switchSettingScreen();
      resetGame();
      break;
  }
}

// 結果モーダルを開き、結果情報を表示する関数（結果に応じてメッセージ、時間、タイピングした単語数を表示）
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
