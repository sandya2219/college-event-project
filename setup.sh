#!/bin/bash

# Vignan's Institute Event Review System - Quick Setup Script
# This script helps you get started with the project quickly

echo "🎓 Vignan's Institute Event Review System - Setup"
echo "================================================="
echo ""

# Check if we're in the right directory
if [ ! -f "index.html" ]; then
    echo "❌ Error: index.html not found. Please run this script from the project root directory."
    exit 1
fi

echo "✅ Project files detected"

# Check for Node.js (optional)
if command -v node &> /dev/null; then
    echo "✅ Node.js found: $(node --version)"

    if [ -f "package.json" ]; then
        echo "📦 Installing development dependencies..."
        npm install
        echo "✅ Dependencies installed"
    fi
else
    echo "ℹ️  Node.js not found (optional for static hosting)"
fi

# Check for Python (alternative server)
if command -v python3 &> /dev/null; then
    echo "✅ Python 3 found: $(python3 --version)"
elif command -v python &> /dev/null; then
    echo "✅ Python found: $(python --version)"
else
    echo "ℹ️  Python not found (optional for local server)"
fi

echo ""
echo "🚀 Setup complete! You can now:"
echo ""
echo "Option 1: Open index.html directly in your browser"
echo "Option 2: Start a local server:"

if command -v node &> /dev/null; then
    echo "   npm run dev"
fi

if command -v python3 &> /dev/null; then
    echo "   python3 -m http.server 8000"
elif command -v python &> /dev/null; then
    echo "   python -m http.server 8000"
fi

echo ""
echo "📖 For more information, see README.md"
echo "🌐 Live demo: https://hizawiqv.gensparkspace.com/"
echo ""
echo "Happy event managing! 🎉"
