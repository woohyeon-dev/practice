// 318개의 한글 단어
const koreanWords = [
    '참다', '크기', '고기', '남기다', '서양', '주요', '지나치다', '가져오다', '냄새', '부드럽다', '여기다', '이', '공연', '남녀', '내놓다', '떼다', '만들어지다', '속도', '심각하다', '준비', '계속되다', '구월', '맑다', '소년', '소식', '유월', '작용', '허리', '골', '공업', '그중', '노인', '벌다', '살리다', '새', '영어', '출신', '결정', '경향', '기록', '나름', '대답하다', '반면', '썰다', '움직임', '이미지', '터지다', '특성', '교장', '벗다', '업무', '입시', '준비하다', '청소년', '돕다', '응', '이기다', '찾아보다', '취하다', '다루다', '달', '사장', '삼월', '그렇지만', '선배', '업체', '키', '구하다', '국회', '그러므로', '포함하다', '걱정', '결혼하다', '만약', '바르다', '세월', '숨', '행사', '깨닫다', '누나', '신', '왕', '점점', '질문', '특별', '판단', '해결하다', '거리', '계속하다', '그치다', '근처', '너무나', '높이다', '부정', '사정', '도대체', '막', '부모님', '수출', '계시다', '그', '자르다', '데리다', '마리', '무척', '비용', '비행기', '옳다', '원래', '처리', '최초', '꼴', '놀이', '뜨겁다', '뿌리', '수입', '초', '그리하여', '낮', '일찍', '직원', '찍다', '가볍다', '내부', '다소', '상대', '오전', '피부', '가게', '가득', '그저', '도', '벽', '장군', '무역', '부담', '약속', '인사', '줄', '쳐다보다', '충분히', '대', '신체', '에너지', '위원', '정리하다', '집안', '배경', '죽이다', '단순하다', '반대', '법칙', '빠지다', '소금', '오염', '자전거', '참여하다', '탓', '푸르다', '그래', '목', '발표', '범죄', '위', '흔들다', '기초', '논리', '드라마', '뽑다', '피우다', '감각', '미리', '부족하다', '인사', '저희', '진행되다', '교통', '기구', '법', '오랜', '젊은이', '후보', '거리', '과제', '근거', '기록하다', '다가오다', '불다', '시각', '이끌다', '종합', '한글', '가을', '개발하다', '내일', '떨다', '매일', '손가락', '수단', '자', '자유롭다', '적극적', '판매', '형성', '기울이다', '길이', '장면', '점차', '톤', '관련되다', '급', '나머지', '날씨', '더불다', '동물', '의사', '개방', '건강하다', '미래', '앞서', '여러분', '왜냐하면', '인구', '기대하다', '네', '도착하다', '병', '소프트웨어', '흘리다', '반응', '주인공', '당연하다', '따뜻하다', '따로', '비판', '빌리다', '세대', '축구', '형님', '놓이다', '당장', '무렵', '밝다', '사물', '일반적', '장소', '곱다', '바닥', '새끼', '생각되다', '서비스', '선택하다', '심다', '적다', '코', '간단하다', '고등학교', '공개', '교실', '스스로', '견디다', '기사', '막히다', '매체', '별', '복잡하다', '뿌리다', '영역', '체험', '구속', '때로', '어쩌면', '극복하다', '불법', '비밀', '색', '쓰이다', '일정하다', '다지다', '밝혀지다', '아까', '알맞다', '이념', '희다', '가리키다', '모시다', '발달', '수많다', '잘못', '치르다', '평화', '공사', '돌', '똑같다', '박사', '성', '전문가', '단지', '말씀하다', '무용', '불리다', '싸움', '자꾸', '차리다', '해외', '그리', '뜨다', '문화재', '미소', '보통', '식당', '의미하다', '이래', '체육', '구성되다', '독특하다', '땀', '사례'
];

// 247개의 영어 단어
const englishWords = [
    'about', 'across', 'afternoon', 'airplane', 'airport', 'apartment', 'apple', 'baby', 'back', 'bag', 'ball', 'balloon', 'banana', 'band', 'because', 'become', 'below', 'bench', 'beside', 'between', 'bicycle', 'big', 'bird', 'birthday', 'bread', 'break', 'breakfast', 'bridge', 'bright', 'cake', 'calendar', 'call', 'camera', 'camp', 'candle', 'candy', 'capital', 'cheap', 'cheese', 'chicken', 'child', 'chopstick', 'church', 'circle', 'city', 'dad', 'dance', 'danger', 'dark', 'date', 'daughter', 'day', 'dead', 'deep', 'deer', 'desk', 'dial', 'diary', 'dictionary', 'die', 'dinner', 'dirty', 'dish', 'ear', 'early', 'earth', 'east', 'echo', 'empty', 'end', 'engine', 'enjoy', 'enough', 'excite', 'excuse', 'exercise', 'eye', 'face', 'fact', 'fair', 'fall', 'family', 'famous', 'far', 'farm', 'film', 'finger', 'finish', 'floor', 'foot', 'for', 'forget', 'fork', 'game', 'garden', 'gas', 'gate', 'gentle', 'get', 'girl', 'give', 'glad', 'grape', 'grass', 'happen', 'happy', 'hard', 'hat', 'hate', 'hiking', 'hill', 'hit', 'hold', 'hole', 'holiday', 'home', 'interest', 'into', 'introduce', 'island', 'jet', 'job', 'join', 'juice', 'jump', 'jungle', 'just', 'keep', 'key', 'kick', 'kid', 'kill', 'kind', 'king', 'kitchen', 'knee', 'knife', 'knock', 'know', 'lady', 'lake', 'lamp', 'land', 'large', 'last', 'late', 'leg', 'lesson', 'let', 'letter', 'library', 'lie', 'light', 'like', 'line', 'lion', 'lip', 'list', 'listen', 'long', 'look', 'lose', 'make', 'man', 'many', 'map', 'march', 'market', 'marry', 'matter', 'melon', 'meter', 'middle', 'milk', 'million', 'minute', 'mirror', 'model', 'mom', 'money', 'monkey', 'month', 'moon', 'morning', 'mother', 'once', 'open', 'orange', 'other', 'out', 'over', 'page', 'paint', 'pair', 'pants', 'paper', 'pardon', 'peace', 'pear', 'pen', 'pencil', 'people', 'piano', 'pick', 'picnic', 'picture', 'piece', 'pig', 'pilot', 'radio', 'rain', 'rainbow', 'read', 'ready', 'real', 'record', 'red', 'remember', 'repeat', 'rest', 'restaurant', 'return', 'ribbon', 'rice', 'rich', 'ride', 'right', 'video', 'village', 'violin', 'visit', 'window', 'wing', 'winter', 'with', 'woman', 'wonder', 'wood', 'word', 'work', 'world', 'year', 'yellow', 'yes', 'yesterday', 'yet', 'young'
];

// 202개의 일본어 단어
const japaneseWords = [
    'あいかわらず', 'あいさつ', 'あいじょう', 'あいず', 'あいする', 'あいそ', 'あいだ', 'あかじ', 'あかちゃん', 'あきれる', 'あくび', 'あさましい', 'あした', 'あたえる', 'あつかましい', 'あわ', 'あんがい', 'いき', 'いきごむ', 'いせき', 'いただき', 'いたる', 'いちば', 'いっしゅん', 'いぬ', 'いりょう', 'いろいろ', 'うけつける', 'うそつき', 'うつす', 'うったえる', 'うっとうしい', 'うつむく', 'うれしい', 'えいぶん', 'えいゆう', 'えいよう', 'えんぜつ', 'えんせん', 'えんそう', 'おう', 'おうえん', 'おうきゅう', 'おうごん', 'おうたい', 'おうだん', 'おうふく', 'おくじょう', 'おせじ', 'おせん', 'おそい', 'おそう', 'おとうさん', 'おとうと', 'おどおど', 'かいしゃく', 'かいしゅう', 'かいぞう', 'かいそう', 'かいたく', 'かいだん', 'かえる', 'かがく', 'かかと', 'かきね', 'かくど', 'かこむ', 'かじょう', 'がっき', 'かなえる', 'かへい', 'かんごし', 'きげん', 'きごう', 'きたい', 'きゃくせき', 'きゅうきょく', 'きょうつう', 'ぎんこう', 'ぐうすう', 'くやしい', 'くわえる', 'ぐんしゅう', 'けいけん', 'けいえい', 'けいひ', 'げじゅん', 'けつごう', 'けっせき', 'げんかん', 'けんりょく', 'こうげき', 'こうしょう', 'こうどう', 'こえる', 'こくばん', 'こころえ', 'こせい', 'このむ', 'こんざつ', 'さいせい', 'さかえる', 'さくせい', 'さしかかる', 'さっか', 'さとう', 'さまたげる', 'さんしょう', 'しせい', 'したがう', 'じっさい', 'しぼむ', 'しゃっきん', 'しゅうにゅう', 'じょうけん', 'しょうたい', 'しょせき', 'すいせん', 'ずうずうしい', 'ぜいきん', 'せいげん', 'せいじゅく', 'せいしゅん', 'せいふく', 'せきにん', 'せめる', 'せんりょう', 'そうび', 'そくりょく', 'それとも', 'たいしょく', 'たいほ', 'だきょう', 'たとえ', 'だんかい', 'ちがう', 'ちかてつ', 'ちゃくりく', 'ちゅうけい', 'ちょうしんき', 'ついほう', 'つうしん', 'つよまる', 'ていか', 'てきおう', 'てちょう', 'なまぐさい', 'なまける', 'におい', 'にくたい', 'ぬま', 'はいたつ', 'ばからしい', 'ばくろ', 'はた', 'はじめる', 'はしわたし', 'はちみつ', 'はんげき', 'はんけつ', 'ひかる', 'ひげき', 'ひっこす', 'ひとじち', 'ひびき', 'ぶどう', 'ふんまつ', 'ぼうえき', 'ぼうけん', 'ぼうはん', 'ほけん', 'まあまあ', 'まかせる', 'みおくる', 'みだす', 'みまう', 'むしば', 'めぐる', 'めっきり', 'めんぜい', 'もくじ', 'もったいない', 'ものがたる', 'やかん', 'やじるし', 'ややこしい', 'ゆうしょう', 'ゆうひ', 'ようき', 'ようけん', 'ようせき', 'ようぼう', 'よわい', 'らくだい', 'りこん', 'りょうしつ', 'りれき', 'れいぼう', 'れんぞく', 'わき', 'わるい', 'われる'
];