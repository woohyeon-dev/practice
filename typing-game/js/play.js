// play
const playTime = document.querySelector('.play__play-time');
const stamina = document.querySelector('.play__current-stamina');
const canvas = document.querySelector('.play__game-board');
const input = document.querySelector('.play__input');
const pause = document.querySelector('.play__pause');
// play-modal
const pauseModal = document.querySelector('.pause-modal');
const pauseModalBtns = Array.from(
  document.querySelectorAll('.pause-modal__buttons')
);

const ctx = canvas.getContext('2d'); // キャンバスの2Dレンダリングコンテキスト
const GAME_WIDTH = 566; // ゲームボードの幅
const GAME_HEIGHT = 266; // ゲームボードの高さ
canvas.width = GAME_WIDTH; // キャンバスの幅を設定
canvas.height = GAME_HEIGHT; // キャンバスの高さを設定
const FRAME = 60; // ゲームのフレームレート（1秒あたり60フレーム）
let animation; // アニメーションフレームのリクエストID
let movingWordArr = []; // 移動する単語の配列
let timer = 0; // タイマーの値
let currentStamina = 100; // 現在のスタミナの値
let second = 0; // 経過時間（秒）
let minute = 0; // 経過時間（分）
let wordCnt = 0; // 入力した単語の数
let correct = false; // 入力した単語が正しいかどうか
let godMode = false; // 無敵モードかどうか

class MovingWord {
  constructor(word, x, y) {
    this.word = word; // 移動する単語
    this.x = x; // 単語のx座標
    this.y = y; // 単語のy座標
  }
  draw() {
    ctx.font = '15px Open Sans Condensed'; // 単語のフォント
    ctx.fillStyle = '#DDC6B6'; // 単語の色
    ctx.fillText(this.word, this.x, this.y); // 単語をキャンバスに描画
  }
}

// ゲームプレイ画面で発生するイベントを追加する関数（一時停止ボタン、一時停止モーダルのボタン、入力フィールドのキー入力イベントを処理）
function addPlayScreenEvent() {
  pause.addEventListener('click', handlePause);
  pauseModalBtns.map(button => {
    button.addEventListener('click', handlePauseBtns);
  });
  input.addEventListener('keyup', handleEnter);
}

// ポーズボタンをクリックするとポーズモーダルを表示し、アニメーションを停止する関数
function handlePause() {
  pauseModal.classList.toggle('hidden');
  cancelAnimationFrame(animation);
}

// ポーズモーダルのボタンを処理する関数
function handlePauseBtns(e) {
  switch (e.target.innerText) {
    // CONTINUEボタンをクリックすると、ポーズモーダルを非表示にし、アニメーションを再開
    case 'CONTINUE':
      pauseModal.classList.toggle('hidden');
      runFrame();
      break;
    // MENUボタンをクリックすると、ゲーム設定画面に戻る
    case 'MENU':
      pauseModal.classList.toggle('hidden');
      switchSettingScreen();
      resetGame();
      break;
  }
}

// ゲームをリセットする関数（移動する単語の配列、タイマー、現在のスタミナ、経過時間、タイプした単語の数などを初期値に設定）
function resetGame() {
  applySetting();
  movingWordArr = [];
  timer = 0;
  currentStamina = 100;
  stamina.style.width = currentStamina + '%';
  second = 0;
  minute = 0;
  wordCnt = 0;
  playTime.innerText = `${String(minute).padStart(2, '0')}:${String(
    second
  ).padStart(2, '0')}`;
}

// ゲーム設定画面に切り替える関数
function switchSettingScreen() {
  setting.style.display = 'block';
  playSection.style.display = 'none';
}

// Enterキーの入力を処理する関数
function handleEnter(e) {
  let key = e.key || e.keyCode;
  if (key === 'Enter' || key === 13) {
    // '무적', 'invincible', 'むてき'を入力した場合は無敵スキルを実行する
    if (
      input.value === '무적' ||
      input.value === 'invincible' ||
      input.value === 'むてき'
    ) {
      invincible();
    }
    // '회복', 'heal', 'かいふく'を入力した場合は回復スキルを実行する
    else if (
      input.value === '회복' ||
      input.value === 'heal' ||
      input.value === 'かいふく'
    ) {
      heal();
    }
    // '정지', 'freeze', 'ていし'を入力した場合は停止スキルを実行する
    else if (
      input.value === '정지' ||
      input.value === 'freeze' ||
      input.value === 'ていし'
    ) {
      screenFreeze();
    }
    // 入力値と一致する移動中の単語を見つけて削除し、タイピングした単語数を増やす
    else {
      movingWordArr.forEach((a, i, o) => {
        if (input.value === a.word) {
          o.splice(i, 1);
          input.value = '';
          correct = true;
          wordCnt++;
        }
      });
    }
    skill.innerText = skillText + skillArr.join(', ') + ' )';

    if (correct) {
      input.style.boxShadow = '0 0 5px darkgreen';
      input.style.borderColor = 'darkgreen';
      correct = false;
    } else {
      input.style.boxShadow = '0 0 5px red';
      input.style.borderColor = 'red';
    }
    input.value = '';
  }
}

// Enterキーの入力を処理する関数
function handleEnter(e) {
  let key = e.key || e.keyCode;
  if (key === 'Enter' || key === 13) {
    // '무적', 'invincible', 'むてき'を入力した場合は無敵スキルを実行する
    if (
      input.value === '무적' ||
      input.value === 'invincible' ||
      input.value === 'むてき'
    ) {
      invincible();
    }
    // '회복', 'heal', 'かいふく'を入力した場合は回復スキルを実行する
    else if (
      input.value === '회복' ||
      input.value === 'heal' ||
      input.value === 'かいふく'
    ) {
      heal();
    }
    // '정지', 'freeze', 'ていし'を入力した場合は停止スキルを実行する
    else if (
      input.value === '정지' ||
      input.value === 'freeze' ||
      input.value === 'ていし'
    ) {
      screenFreeze();
    }
    // 入力値と一致する移動中の単語を見つけて削除し、タイピングした単語数を増やす
    else {
      movingWordArr.forEach((a, i, o) => {
        if (input.value === a.word) {
          o.splice(i, 1);
          input.value = '';
          correct = true;
          wordCnt++;
        }
      });
    }
    skill.innerText = skillText + skillArr.join(', ') + ' )';

    if (correct) {
      input.style.boxShadow = '0 0 5px darkgreen';
      input.style.borderColor = 'darkgreen';
      correct = false;
    } else {
      input.style.boxShadow = '0 0 5px red';
      input.style.borderColor = 'red';
    }
    input.value = '';
  }
}

// 無敵スキルを実行する関数
function invincible() {
  if (skillArr.includes(input.value) && currentStamina != 0) {
    godMode = true;
    stamina.style.backgroundColor = 'goldenrod';
    canvas.style.borderColor = 'goldenrod';
    setTimeout(() => {
      godMode = false;
      stamina.style.backgroundColor = 'rgba(151,188,98,0.7)';
      canvas.style.borderColor = '#DDC6B6';
    }, 4000);
    skillArr = skillArr.filter(word => word != input.value);
  }
}

// 回復スキルを実行する関数
function heal() {
  if (skillArr.includes(input.value) && currentStamina != 0) {
    currentStamina += 50;
    if (currentStamina > 100) {
      currentStamina = 100;
    }
    skillArr = skillArr.filter(word => word != input.value);
    stamina.style.width = currentStamina + '%';
  }
}

// 停止スキルを実行する関数
function screenFreeze() {
  if (skillArr.includes(input.value) && currentStamina != 0) {
    cancelAnimationFrame(animation);
    setTimeout(runFrame, 4000);
    skillArr = skillArr.filter(word => word != input.value);
  }
}

// ゲームフレームを実行する関数
function runFrame() {
  animation = requestAnimationFrame(runFrame);
  timer++;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (timer % FRAME == 0) {
    controlPlayTime();

    let index = timer / FRAME - 1;
    if (index === wordArr.length - 1) {
      timer = 0;
    }
    shuffle(wordArr);
    // x軸は0固定、y軸は18〜265のランダムな数値
    let movingWord = new MovingWord(
      wordArr[index],
      0,
      Math.floor(Math.random() * 247 + 18)
    );
    movingWordArr.push(movingWord);
  }

  checkCollision();
}

// ゲームプレイ時間を管理する関数
function controlPlayTime() {
  second++;
  if (second == 60) {
    minute++;
    second = 0;
  }
  playTime.innerText = `${String(minute).padStart(2, '0')}:${String(
    second
  ).padStart(2, '0')}`;
  if (minute === 3) {
    openResultModal();
  }
}

// 移動中の単語との衝突を確認する関数
function checkCollision() {
  movingWordArr.forEach((el, index, arr) => {
    // 単語のx座標がゲーム領域を超えた場合
    if (el.x > GAME_WIDTH) {
      arr.splice(index, 1); // 配列から該当の単語を削除
      if (!godMode) {
        controlStamina(el.word);
      }
    }
    el.x += gameSpeed;
    el.draw();
  });
}

// スタミナを制御する関数
function controlStamina(word) {
  currentStamina -= multiplier * word.length;
  // スタミナが0以下になった場合は0に設定し、結果モーダルを表示する
  if (currentStamina <= 0) {
    currentStamina = 0;
    openResultModal();
  }
  stamina.style.width = currentStamina + '%';
}

// 配列をランダムにシャッフルする関数 -> Fisher-Yatesアルゴリズムを使用
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const randomPos = Math.floor(Math.random() * (i + 1));
    const temporary = arr[i];
    arr[i] = arr[randomPos];
    arr[randomPos] = temporary;
  }
}
