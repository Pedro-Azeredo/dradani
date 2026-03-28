#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import os
import sys

os.chdir('images')

files_to_rename = [
    ("AvaliaA┬ºAo-facial-copiar.webp", "Avaliacao-facial-copiar.webp"),
    ("AvaliaA┬ºAo-facial-copiar-300x240.webp", "Avaliacao-facial-copiar-300x240.webp"),
    ("AvaliaA┬ºAo-facial-copiar-768x615.webp", "Avaliacao-facial-copiar-768x615.webp"),
    ("AvaliaA┬ºAo-facial-copiar-1024x820.webp", "Avaliacao-facial-copiar-1024x820.webp"),
    ("AvaliaA┬ºAo-facial-copiar-1536x1231.webp", "Avaliacao-facial-copiar-1536x1231.webp"),
    ("PrA┬│tese-3-copiar-scaled.webp", "Protese-3-copiar-scaled.webp"),
    ("PrA┬│tese-3-copiar-225x300.webp", "Protese-3-copiar-225x300.webp"),
    ("PrA┬│tese-3-copiar-768x1024.webp", "Protese-3-copiar-768x1024.webp"),
    ("PrA┬│tese-3-copiar-1152x1536.webp", "Protese-3-copiar-1152x1536.webp"),
    ("PrA┬│tese-3-copiar-1536x2048.webp", "Protese-3-copiar-1536x2048.webp")
]

print("Iniciando renomeação de arquivos...\n")

for old_name, new_name in files_to_rename:
    try:
        if os.path.exists(old_name):
            os.rename(old_name, new_name)
            print(f"✓ {new_name}")
        else:
            # Try to find the file with a different encoding
            files = os.listdir('.')
            for f in files:
                if 'facial' in f.lower() and 'copiar' in f and '.webp' in f:
                    if old_name not in files:
                        os.rename(f, new_name)
                        print(f"✓ {f} → {new_name}")
                        break
                elif 'tese' in f.lower() and 'copiar' in f and '.webp' in f:
                    if old_name not in files:
                        os.rename(f, new_name)
                        print(f"✓ {f} → {new_name}")
                        break
    except Exception as e:
        print(f"✗ Erro ao renomear {old_name}: {e}")

print("\n✓ Processo concluído!")
