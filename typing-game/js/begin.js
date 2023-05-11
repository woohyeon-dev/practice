const initSection = document.querySelector('.init');
const settingSection = document.querySelector('.setting');
const text = document.querySelector('.init__text');
const keyboardIcon = document.querySelector('.init__keyboard');

setTimeout(resetTyping, 1000); // ページを読み込んで1秒後にタイピングの初期化作業を開始
setInterval(blink, 500); // 0.5秒ごとにカーソルの点滅効果を繰り返す
keyboardIcon.addEventListener('click', handleIconButton); // キーボードのアイコンにクリックイベントハンドラを登録

// アイコンがクリックされたときの画面遷移を処理する関数
function handleIconButton() {
  initSection.style.display = 'none';
  settingSection.style.display = 'block';
}

// タイピングの初期化関数
function resetTyping() {
  const textArr = ['Typing Game', 'Press icon to start']; // タイピングアニメーションで表示するテキストの配列
  let textStrArr;

  // テキストが空の場合
  if (text.textContent === '') {
    textStrArr = textArr[0].split(''); // 最初のテキストを1文字ずつ配列に分割
  } else {
    // 既に最後のテキストを表示した場合
    if (text.textContent === textArr[1]) {
      return; // 初期化作業を終了
    }
    text.textContent = ''; // テキストを初期化
    textStrArr = textArr[1].split(''); // 2番目のテキストを1文字ずつ配列に分割
  }

  setTimeout(function () {
    dynamic(textStrArr); // タイピングアニメーションを開始
  }, 500);
}

// 1文字ずつテキストを表示する関数
function dynamic(strArr) {
  if (strArr.length > 0) {
    text.textContent += strArr.shift(); // 1文字ずつテキストを追加
    setTimeout(function () {
      dynamic(strArr); // 再帰的に関数を呼び出して次の文字を表示
    }, 200);
  } else {
    setTimeout(resetTyping, 1000); // タイピングが完了したら初期化作業を開始
  }
}

// カーソルの点滅効果を実装する関数
function blink() {
  text.classList.toggle('active');
}
