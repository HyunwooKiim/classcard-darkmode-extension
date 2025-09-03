#!/bin/bash

# Classcard Dark Mode Extension Auto Installer
echo "🌙 Classcard Dark Mode Extension Installer"
echo "==========================================="

# 홈 디렉토리에 확장 프로그램 폴더 생성
INSTALL_DIR="$HOME/.classcard-darkmode-extension"

echo "📁 Creating installation directory..."
mkdir -p "$INSTALL_DIR"

# 현재 디렉토리의 파일들을 설치 디렉토리로 복사
echo "📋 Copying extension files..."
cp manifest.json "$INSTALL_DIR/"
cp content.js "$INSTALL_DIR/"
cp darkmode.css "$INSTALL_DIR/"
cp popup.html "$INSTALL_DIR/"
cp popup.js "$INSTALL_DIR/"

echo "✅ Files copied to: $INSTALL_DIR"

# 브라우저별 안내
echo ""
echo "🌐 Next Steps:"
echo "1. Open your browser:"
echo "   - Chrome: chrome://extensions/"
echo "   - Arc: arc://extensions/"
echo "   - Edge: edge://extensions/"
echo ""
echo "2. Enable 'Developer mode'"
echo "3. Click 'Load unpacked extension'"
echo "4. Select folder: $INSTALL_DIR"
echo ""

# macOS에서 브라우저 열기 시도
if [[ "$OSTYPE" == "darwin"* ]]; then
    echo "🚀 Attempting to open Chrome extensions page..."
    open -a "Google Chrome" "chrome://extensions/" 2>/dev/null || 
    open -a "Arc" "arc://extensions/" 2>/dev/null ||
    echo "⚠️  Please manually open your browser's extensions page"
fi

echo ""
echo "📖 Installation complete! Extension ready to load."
echo "🔗 GitHub: https://github.com/HyunwooKiim/classcard-darkmode-extension"
