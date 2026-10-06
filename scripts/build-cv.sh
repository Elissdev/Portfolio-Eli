#!/usr/bin/env bash
#
# Gera o PDF do currículo a partir de curriculo/curriculo.html usando o
# Chrome/Chromium em modo headless.
#
# Uso: npm run build:cv   (ou: bash scripts/build-cv.sh)
#
set -euo pipefail

RAIZ="$(cd "$(dirname "$0")/.." && pwd)"
FONTE="$RAIZ/curriculo/curriculo.html"
SAIDA="$RAIZ/assets/curriculo-elissandra-silva-qa-automation.pdf"

if [ ! -f "$FONTE" ]; then
    echo "Fonte não encontrada: $FONTE" >&2
    exit 1
fi

CHROME="$(command -v google-chrome || command -v google-chrome-stable || command -v chromium || command -v chromium-browser || true)"
if [ -z "$CHROME" ]; then
    echo "Chrome/Chromium não encontrado. Instale o Google Chrome ou o Chromium para gerar o PDF." >&2
    exit 1
fi

# Copia a fonte para um diretório temporário sem espaços/acentos no caminho,
# evitando problemas com a URL file:// do Chrome.
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT
cp "$FONTE" "$TMP/curriculo.html"

"$CHROME" \
    --headless=new \
    --disable-gpu \
    --no-sandbox \
    --no-pdf-header-footer \
    --print-to-pdf="$SAIDA" \
    "file://$TMP/curriculo.html" >/dev/null 2>&1

echo "PDF gerado em: $SAIDA"
