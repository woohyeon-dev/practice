## Typing Game
### 1. 개요
이 프로젝트는 Javascript, HTML 그리고 CSS를 사용하여 개발한 Typing Game입니다. <br/>
Typing Game은 사용자가 왼쪽에서 오른쪽으로 지나가는 단어들을 타이핑하며 3분을 버티는 게임입니다. <br/>
### 2. 특징
🔹 게임 시작화면에 typing 애니메이션이 있습니다. <br/>
🔹 단어목록 중 랜덤한 단어가 왼쪽 벽의 랜덤한 위치에서 생성됩니다. <br/>
🔹 언어와 난이도 선택이 가능합니다. <br/>
🔹 체력 및 스킬(무적, 회복, 정지 3가지)이 있습니다. <br/>
🔹 입력 성공 여부에 따라 입력창의 테두리 색상 변화됩니다. <br/>
🔹 게임 일시정지 및 메뉴 이동 버튼을 제공합니다. <br/>
🔹 종료 후 결과 확인(입력한 단어 수, 게임 버틴 시간) 및 다시하기가 가능합니다.<br/>
### 3. 게임 설명
🔹 게임 시간은 총 3분이며 사용자가 3분동안 지나가는 단어들을 입력하여 체력 포인트를 지키면 성공하는 게임입니다. <br/>
🔹 사용자는 게임을 시작하기 전 플레이할 언어와 난이도를 선택할 수 있습니다. <br/>
🔹 선택할 수 있는 언어로는 한국어, 일본어, 영어가 있고 난이도는 easy, normal, hard로 구분되며 선택한 난이도에 따라 단어가 지나가는 속도에 차이가 있습니다. <br/>
🔹 게임이 시작되면 사용자에게 무적, 회복, 정지의 3가지 스킬이 주어집니다. <br/>
🔹 단어가 오른쪽 벽을 완전히 지나가서 보이지 않게 되면 지나간 단어의 글자 수에 따라 체력 포인트를 잃게 됩니다. (언어마다 글자 수에 따라 차감되는 포인트가 다릅니다.) <br/>
🔹 게임에서 사용되는 단어는 미리 선정된 단어 목록에서 랜덤하게 선택되어 왼쪽 벽의 랜덤한 위치에서 생성됩니다.<br/>
🔹 단어가 오른쪽 벽을 완전히 지나가서 보이지 않게 되면 지나간 단어의 글자 수에 따라 체력 포인트를 잃게 됩니다. (언어마다 글자 수에 따라 차감되는 포인트가 다릅니다.) <br/>
🔹 단어를 정확히 입력했으면 입력창의 테두리가 초록색이 되고 잘못 입력했을 경우 입력창의 테두리가 빨간색으로 변합니다. <br/>
🔹 게임 중간 왼쪽 상단의 pause 버튼을 눌러 일시정지를 하거나 메뉴로 돌아갈 수 있습니다. <br/>
🔹 게임이 종료되면, 사용자는 입력한 단어 수와 게임을 버틴 시간을 확인할 수 있습니다. <br/>
### 4. 스킬 설명
스킬은 한 게임당 각각 한 번씩만 사용할 수 있습니다. <br/>
🔹 무적: 무적 스킬을 사용하면 4초 동안 단어가 지나가도 체력 포인트를 잃지 않습니다. <br/>
🔹 회복: 회복 스킬을 사용하면 전체 체력의 50%를 회복합니다. <br/>
🔹 정지: 정지 스킬을 사용하면 지나가는 단어들을 4초 동안 멈출 수 있고 그동안 단어들을 입력하면 다시 움직이기 시작할 때 입력한 단어들이 사라집니다. <br/>
### 5. 실행 방법 및 실행 영상
**실행방법** : /typing-game 폴더의 **index.html** 파일을 웹 브라우저로 엽니다. <br/>
<br />
**실행영상** <br />
![japanese](https://user-images.githubusercontent.com/97883403/233922257-9cf75371-c21e-4781-a524-eb1c2e070594.gif) <br/>
![korean](https://user-images.githubusercontent.com/97883403/233922241-e7f6f4ad-441b-4acc-b7cb-9c5629e028e2.gif) <br/>
![english](https://user-images.githubusercontent.com/97883403/233922381-ac8067c6-b4be-4450-8a6d-9b055fdfd1f0.gif) <br/>
<br />
<br />

## Number baseball Game
### 1. 개요
이 프로젝트는 Javascript, HTML 그리고 CSS를 사용하여 개발한 Number baseball Game입니다. <br/>
Number baseball Game은 플레이어가 0~9까지의 랜덤한 4개의 숫자를 맞추는 게임입니다. <br/>
### 2. 특징
🔹 컴퓨터는 0~9까지의 랜덤한 4개의 숫자를 생성합니다. <br/>
🔹 사용자가 정확히 4자리의 숫자를 입력해야만 비교가 실행되도록 하였습니다. <br/>
🔹 정답과 비교한 결과가 전광판에 표시됩니다. <br/>
🔹 C(클리어) CE(방금 입력한 값만 지우기) 버튼을 제공합니다. <br/>
🔹 현재까지 입력한 숫자와 비교한 결과들이 왼쪽에 기록됩니다. <br/>
🔹 게임이 종료되면 계속하기 및 새로운 게임 시작하기 버튼을 제공합니다 <br/>
### 3. 게임 설명
🔹 게임은 사용자가 0~9까지의 랜덤한 4개의 숫자로 이루어진 정답을 맞출 때까지 진행됩니다. <br/>
🔹 사용자는 매 라운드마다 자신이 입력한 4개의 숫자와 컴퓨터가 생성한 4개의 숫자를 비교하여 스트라이크와 볼의 개수를 확인할 수 있습니다. <br/>
🔹 숫자와 위치가 모두 맞으면 스트라이크, 숫자만 맞고 위치가 틀리면 볼이 됩니다. <br/>
🔹 사용자가 현재까지 입력한 숫자와 비교한 기록들이 왼쪽에 표시됩니다. <br/>
🔹 사용자는 비교한 기록들을 보고 정답을 유추할 수 있습니다. <br/>
🔹 사용자가 정답을 맞추면 게임이 종료되고 게임이 종료된 후 사용자는 게임을 다시 시작할 수 있습니다. <br/>
### 4. 실행 방법 및 실행 영상
**실행방법** : /baseball 폴더의 **index.html**을 웹 브라우저로 엽니다. <br/>
<br />
**실행영상** <br />
![game-play-2](https://user-images.githubusercontent.com/97883403/233922160-cb53a377-6e65-4998-8d76-b00784227eb2.gif) <br/>
![game-play](https://user-images.githubusercontent.com/97883403/233922168-a40cb05e-192d-407d-9a19-f2ba8caa8e88.gif) <br/>
<br />
<br />

## Painting Board
### 1. 개요
이 프로젝트는 Javascript, HTML 그리고 CSS를 사용하여 개발한 Painting Board입니다. <br/>
Painting Boards는 사용자들이 다양한 붓 도구와 색을 사용하여 캔버스에 자유롭게 그릴 수 있습니다. <br/>
### 2. 특징
🔹 그림을 그리기 위한 캔버스와 브러시 색상 선택을 위한 색상 팔레트가 있습니다. <br/>
🔹 브러시의 크기를 선택할 수 있습니다. <br/>
🔹 전체 색 채우기를 할 수 있습니다. <br/>
🔹 그림을 이미지로 저장할 수 있습니다.<br/>
### 3. 실행 영상
**실행방법** : /paintjs 폴더의 **index.html** 파일을 웹 브라우저로 엽니다. <br/>
<br />
**실행영상** <br />
![painting-board](https://user-images.githubusercontent.com/97883403/233924303-9f13a6a1-7f80-4ccb-88fa-f529b559a10f.gif)<br />
<br />
<br />

## Calculator
### 1. 개요
이 프로젝트는 JavaScript와 HTML, CSS를 사용하여 개발한 간단한 계산기입니다. <br/>
### 2. 특징
🔹 덧셈, 뺄셈, 곱셈, 나눗셈 등의 사칙연산 및 나머지 계산을 수행할 수 있습니다. <br/>
🔹 소수점 연산이 가능합니다. <br/>
🔹 연산 우선순위를 고려하여 연산을 수행합니다. <br/>
🔹 C(클리어) 버튼을 제공합니다. <br/>
🔹 연속해서 계산을 수행할 수 있습니다. <br/>
🔹 음수 계산이 가능합니다. <br/>
🔹 계산 결과가 화면에 표시됩니다. <br/>
### 3. 실행 방법 및 실행 영상
**실행방법** : /calculator 폴더의 **index.html** 파일을 웹 브라우저로 엽니다. <br/>
<br />
**실행영상** <br />
![calculator](https://user-images.githubusercontent.com/97883403/233922580-b6a43111-81c2-4bd3-8d5c-73f08b9f0851.gif) <br/>
<br />
<br />
