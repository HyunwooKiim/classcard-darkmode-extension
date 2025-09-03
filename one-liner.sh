#!/bin/bash

# One-line installer for Classcard Dark Mode Extension
curl -L https://github.com/HyunwooKiim/classcard-darkmode-extension/archive/refs/heads/master.zip -o /tmp/classcard-darkmode.zip && \
unzip -q /tmp/classcard-darkmode.zip -d /tmp/ && \
mkdir -p "$HOME/.classcard-darkmode-extension" && \
cp /tmp/classcard-darkmode-extension-master/* "$HOME/.classcard-darkmode-extension/" && \
rm -rf /tmp/classcard-darkmode* && \
echo "✅ Classcard Dark Mode Extension installed to: $HOME/.classcard-darkmode-extension" && \
echo "🌐 Open chrome://extensions/ or arc://extensions/ and load the unpacked extension" && \
(open -a "Google Chrome" "chrome://extensions/" 2>/dev/null || open -a "Arc" "arc://extensions/" 2>/dev/null || echo "Please manually open your browser's extensions page")
