#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import os

os.chdir('images')

# List files
files = os.listdir('.')
avaliacao_files = [f for f in files if 'Avalia' in f and 'facial' in f]
protese_files = [f for f in files if 'tese' in f and 'copiar' in f]

print("=== ARQUIVO S AVALIAÇÃO ===")
for f in sorted(avaliacao_files):
    print(f)

print("\n=== ARQUIVOS PRÓTESE ===")
for f in sorted(protese_files):
    print(f)
