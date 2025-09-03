# Classcard Dark Mode Extension 🌙

[English](#english) | [한국어](#한국어)

---

## 한국어

Classcard 사이트에 다크모드를 추가하는 Chrome/Arc 브라우저 익스텐션입니다.

### 한 줄 설치 🚀

터미널에서 실행:
```bash
curl -L https://raw.githubusercontent.com/HyunwooKiim/classcard-darkmode-extension/master/one-liner.sh | bash
```

### 주요 기능

- ✨ 자동 활성화: Classcard 접속 시 자동으로 다크모드 적용
- 🔄 수동 토글: 익스텐션 아이콘 클릭 또는 Ctrl+D 단축키
- 💾 설정 저장: 브라우저 재시작 후에도 설정 유지
- 👁️ 눈 보호: 어두운 배경으로 눈의 피로 감소

### 적용법

1. arc://extensions/ 또는 chrome://extensions/ 접속
2. 개발자 모드 활성화
3. 압축해제된 확장 프로그램을 로드합니다 클릭
4. ~/.classcard-darkmode-extension 폴더 선택

### 적용 대상

- flip-card-front: 메인 플래시카드
- CardItem: 카드 아이템
- start-opt-box: 옵션 박스
- bg-success2: 성공 요소 (검은색)
- bottom-fixed: 하단 고정 요소 (검은색)
- spell-content.font-32: 철자 텍스트 (밝은 흰색)

---

## English

A Chrome/Arc browser extension that adds dark mode to Classcard website.

### One-Line Installation 🚀

Run in terminal:
```bash
curl -L https://raw.githubusercontent.com/HyunwooKiim/classcard-darkmode-extension/master/one-liner.sh | bash
```

### Features

- ✨ Auto-enabled: Dark mode automatically activates when visiting Classcard
- 🔄 Manual toggle: Extension icon click or Ctrl+D shortcut
- 💾 Settings saved: Settings remembered across browser sessions
- 👁️ Eye-friendly: Dark theme reduces eye strain

### How to Apply

1. Go to arc://extensions/ or chrome://extensions/
2. Enable Developer mode
3. Click Load unpacked extension
4. Select ~/.classcard-darkmode-extension folder

### Targeted Elements

- flip-card-front: Main flashcards
- CardItem: Card items
- start-opt-box: Option boxes
- bg-success2: Success elements (black)
- bottom-fixed: Fixed bottom elements (black)
- spell-content.font-32: Spelling text (bright white)

### Troubleshooting

If extension does not work:
1. Refresh Classcard page (F5)
2. Restart browser
3. Check extension is enabled
4. Try manual toggle with extension popup

### 📁 Files

- manifest.json: Extension config
- content.js: Page script
- darkmode.css: Dark styles
- popup.html: Interface
- popup.js: Popup logic
- install.sh: Installation script

### 📝 License

MIT License

### 👨‍💻 Author

GitHub: @HyunwooKiim

