#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import re

# Ler o arquivo HTML
with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Substituições
replacements = [
    # Substitui todas as referências à avaliação facial
    ('AvaliaA%C2%A7Ao-facial-copiar', 'Avaliacao-facial-copiar'),
    # Substitui todas as referências à prótese
    ('PrA%C2%B3tese-3-copiar', 'Protese-3-copiar'),
]

for old, new in replacements:
    content = content.replace(old, new)
    print(f"Substituído: {old} → {new}")

# Escrever o arquivo corrigido
with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("\n✓ Arquivo HTML corrigido com sucesso!")
