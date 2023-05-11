const setting = document.querySelector('.setting');
const playSection = document.querySelector('.play');
const language = document.getElementsByName('language');
const difficulty = document.getElementsByName('difficulty');
const okBtn = document.querySelector('.setting__ok');
const skill = document.querySelector('.play__skill');

const settingValueArr = [];
let skillArr = [];
let skillText;

let gameSpeed;
let multiplier;
let wordArr;

// 設定画面からプレイ画面に切り替える関数
function switchPlayScreen() {
  setting.style.display = 'none';
  playSection.style.display = 'block';
  document.querySelector('.play__input').focus();
  addPlayScreenEvent();
  runFrame();
}

// 設定を適用する関数
function applySetting() {
  // 言語の設定
  switch (settingValueArr[0]) {
    case 'korean':
      wordArr = JSON.parse(JSON.stringify(koreanWords));
      multiplier = 5;
      skillArr = ['무적', '회복', '정지'];
      skillText = '스킬 키워드 ( ';
      break;
    case 'english':
      wordArr = JSON.parse(JSON.stringify(englishWords));
      multiplier = 3;
      skillArr = ['invincible', 'heal', 'freeze'];
      skillText = 'skill keyword ( ';
      break;
    case 'japanese':
      wordArr = JSON.parse(JSON.stringify(japaneseWords));
      multiplier = 2;
      skillArr = ['むてき', 'かいふく', 'ていし'];
      skillText = 'スキルキーワード ( ';
      break;
  }
  skill.innerText = skillText + skillArr.join(', ') + ' )';

  // ゲームレベルの設定
  switch (settingValueArr[1]) {
    case 'easy':
      gameSpeed = 1;
      break;
    case 'normal':
      gameSpeed = 1.4;
      break;
    case 'hard':
      gameSpeed = 1.8;
      break;
  }
}

// OKボタンをクリックしたときに呼ばれる関数
function clickOkBtn(e) {
  language.forEach(node => {
    if (node.checked) {
      settingValueArr[0] = node.id;
    }
  });

  difficulty.forEach(node => {
    if (node.checked) {
      settingValueArr[1] = node.id;
    }
  });

  applySetting();
  switchPlayScreen();
}

okBtn.addEventListener('click', clickOkBtn);
