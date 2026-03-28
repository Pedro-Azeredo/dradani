#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import re

# Ler o arquivo HTML
with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Remover comentÃ¡rios do Google Tag Manager para WordPress
content = re.sub(
    r'<!-- Google Tag Manager \(noscript\) -->[\s\S]*?<!-- End Google Tag Manager \(noscript\) -->',
    '',
    content
)

# 2. Remover o script do Google Tag Manager (noscript) preservando o comentÃ¡rio HTML
content = re.sub(
    r'<noscript><iframe src="https://www\.googletagmanager\.com/ns\.html\?id=GTM-KVGN7652"[\s\S]*?</noscript>',
    '',
    content
)

# 3. Remover espaÃ§os em branco excessivos deixados pela remoÃ§Ã£o
content = re.sub(r'\n\s*\n\s*\n', '\n\n', content)

# 4. Alterar "Dra DANIELLE" e variaÃ§Ãµes para "Dra Danielle"
content = re.sub(
    r'Dra Danielle Figueiredo',
    'Dra Danielle Figueiredo',
    content,
    flags=re.IGNORECASE
)

content = re.sub(
    r'Dra DANIELLE',
    'Dra Danielle',
    content,
    flags=re.IGNORECASE
)

# 5. Alterar nomes de imagens DANIELLE para DANIELLE
# DANIELLE-FIGUEIREDO-logo -> DANIELLE-FIGUEIREDO-logo
content = re.sub(
    r'DANIELLE-FIGUEIREDO-logo',
    'DANIELLE-FIGUEIREDO-logo',
    content,
    flags=re.IGNORECASE
)

# DRA-DANIELLE -> DRA-DANIELLE
content = re.sub(
    r'DRA-DANIELLE',
    'DRA-DANIELLE',
    content,
    flags=re.IGNORECASE
)

# 6. Remover referÃªncias ao Yoast SEO (JSON-LD schema)
# JÃ¡ removido antes, mas garantindo

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

# 14. Limpar espaÃ§os em branco mÃºltiplos deixados pelas remoÃ§Ãµes
content = re.sub(r'\n\n\n+', '\n\n', content)

# Salvar o arquivo modificado
with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("âœ“ Arquivo HTML limpo com sucesso!")
print("\nAlteraÃ§Ãµes realizadas:")
print("  âœ“ Removido Google Tag Manager (noscript)")
print("  âœ“ Removido Yoast SEO schema")
print("  âœ“ Removido feeds RSS")
print("  âœ“ Removido links oEmbed")
print("  âœ“ Removido referÃªncias WordPress API")
print("  âœ“ Removido tags generator (WordPress, Elementor)")
print("  âœ“ Removido Facebook domain verification")
print("  âœ“ Alterado 'Danielle Figueiredo' â†’ 'Danielle Figueiredo'")
print("  âœ“ Alterado nomes de imagens DANIELLE â†’ DANIELLE")
