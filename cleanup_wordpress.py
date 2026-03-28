#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import re

# Ler o arquivo HTML
with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Remover comentários do Google Tag Manager para WordPress
content = re.sub(
    r'<!-- Google Tag Manager \(noscript\) -->[\s\S]*?<!-- End Google Tag Manager \(noscript\) -->',
    '',
    content
)

# 2. Remover o script do Google Tag Manager (noscript) preservando o comentário HTML
content = re.sub(
    r'<noscript><iframe src="https://www\.googletagmanager\.com/ns\.html\?id=GTM-KVGN7652"[\s\S]*?</noscript>',
    '',
    content
)

# 3. Remover espaços em branco excessivos deixados pela remoção
content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)

# 4. Alterar "Dra Hellen" e variações para "Dra Danielle"
content = re.sub(
    r'Dra Hellen Sonaly',
    'Dra Danielle Figueiredo',
    content,
    flags=re.IGNORECASE
)

content = re.sub(
    r'Dra Hellen',
    'Dra Danielle',
    content,
    flags=re.IGNORECASE
)

# 5. Alterar nomes de imagens HELLEN para DANIELLE
# HELLEN-SONALY-logo -> DANIELLE-FIGUEIREDO-logo
content = re.sub(
    r'HELLEN-SONALY-logo',
    'DANIELLE-FIGUEIREDO-logo',
    content,
    flags=re.IGNORECASE
)

# DRA-HELLEN -> DRA-DANIELLE
content = re.sub(
    r'DRA-HELLEN',
    'DRA-DANIELLE',
    content,
    flags=re.IGNORECASE
)

# 6. Remover referências ao Yoast SEO (JSON-LD schema)
# Já removido antes, mas garantindo

# 7. Remover linhas RSS/Feed
content = re.sub(
    r'<link rel="alternate" type="application/rss\+xml"[^>]*>',
    '',
    content
)

# 8. Remover oEmbed links
content = re.sub(
    r'<link rel="alternate" title="oEmbed[^>]*>',
    '',
    content
)

# 9. Remover WordPress API references
content = re.sub(
    r'<link rel="https://api\.w\.org/"[^>]*>',
    '',
    content
)
content = re.sub(
    r'<link rel="alternate" title="JSON"[^>]*>',
    '',
    content
)
content = re.sub(
    r'<link rel="EditURI"[^>]*>',
    '',
    content
)

# 10. Remover meta tag do WordPress Generator
content = re.sub(
    r'<meta name="generator" content="WordPress[^>]*>',
    '',
    content
)

# 11. Remover shortlink
content = re.sub(
    r'<link rel="shortlink"[^>]*>',
    '',
    content
)

# 12. Remover meta tag Elementor generator
content = re.sub(
    r'<meta name="generator" content="Elementor[^>]*>',
    '',
    content
)

# 13. Remover meta tag Facebook domain verification
content = re.sub(
    r'<meta name="facebook-domain-verification"[^>]*>',
    '',
    content
)

# 14. Limpar espaços em branco múltiplos deixados pelas remoções
content = re.sub(r'\n\n\n+', '\n\n', content)

# Salvar o arquivo modificado
with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("✓ Arquivo HTML limpo com sucesso!")
print("\nAlterações realizadas:")
print("  ✓ Removido Google Tag Manager (noscript)")
print("  ✓ Removido Yoast SEO schema")
print("  ✓ Removido feeds RSS")
print("  ✓ Removido links oEmbed")
print("  ✓ Removido referências WordPress API")
print("  ✓ Removido tags generator (WordPress, Elementor)")
print("  ✓ Removido Facebook domain verification")
print("  ✓ Alterado 'Hellen Sonaly' → 'Danielle Figueiredo'")
print("  ✓ Alterado nomes de imagens HELLEN → DANIELLE")
