# ⚡ GUIA RÁPIDO - Danielle Figueiredo Site

## 🚀 COMECE AQUI

```
1. Abra: index.html com navegador
2. Veja funcionando: Menu, Carrossel, WhatsApp
3. Quer editar? Continue lendo abaixo
```

---

## 📝 EDIÇÕES MAIS COMUNS

### 1. Mudar Texto (Fácil ⭐)

```
1. Abra index.html com Notepad/VSCode
2. Ctrl+F e procure o texto
3. Edite-o
4. Salve (Ctrl+S)
5. Atualize navegador (Ctrl+F5)
```

**Exemplos de textos**:
```html
"Renove Sua Confiança"      → seu heading
"Agende sua consulta"        → botão WhatsApp
"Tratamentos"                → seção
"Sobre Mim"                  → seção
```

---

### 2. Mudar Link WhatsApp (Fácil ⭐)

**Procure no arquivo**: `5521972518469`

```
Antes: https://wa.me/5521972518469?text=...
Depois: https://wa.me/SEU_NUMERO_AQUI?text=...
```

Formato: +55 + DDD + numero (ex: 5521987654321)

---

### 3. Trocar Logo (Médio ⭐⭐)

**Arquivo atual**: `images/DANIELLE-FIGUEIREDO-logo-White.png`

```
1. Crie sua nova logo
2. Salve como: DANIELLE-FIGUEIREDO-logo-White.png
3. Coloque em: images/
4. Ao salvar, sobrescreve a antiga automaticamente
```

---

### 4. Trocar Foto Profissional (Médio ⭐⭐)

**Arquivo atual**: `images/DRA-DANIELLE-765x1024.webp`

```
1. Crie 5 variantes da sua foto:
   - 224x300 (tiny)
   - 765x1024 (medium)
   - 768x1028 (tablet)
   - 1148x1536 (large)
   - 1530x2048 (xlarge)

2. Converta para WebP (use online converter)

3. Nome-os como:
   - DRA-DANIELLE-224x300.webp
   - DRA-DANIELLE-765x1024.webp
   - DRA-DANIELLE-768x1028.webp
   - DRA-DANIELLE-1148x1536.webp
   - DRA-DANIELLE-1530x2048.webp

4. Coloque em: images/

5. Sobrescreve os antigos automaticamente
```

**Ferramentas úteis**:
- Resize: https://www.birme.net (batch resize)
- WebP Convert: https://cloudconvert.com

---

### 5. Mudar Cores (Médio ⭐⭐)

**Arquivo CSS**: `css/carousel-fix.css`

```css
/* Procure por: */
.elementor-swiper-button {
  background: rgba(255,255,255,0.8);  /* Botões carrossel - BRANCO/TRANSPARENTE */
  color: #333;
}

/* Para mudar para azul escuro: */
.elementor-swiper-button {
  background: rgba(0,0,100,0.8);      /* AZUL ESCURO */
  color: white;
}
```

**Cores populares**:
- Branco: `rgba(255,255,255,0.8)`
- Preto: `rgba(0,0,0,0.8)`
- Azul: `rgba(0,0,255,0.8)`
- Rosa: `rgba(255,0,127,0.8)`
- Verde: `rgba(0,255,0,0.8)`

---

### 6. Mudar Título da Página (Fácil ⭐)

**Procure no HTML**:
```html
<title>Danielle Figueiredo - Cirurgia Plástica</title>
```

Mude para:
```html
<title>Seu novo título aqui</title>
```

Isso muda:
- Aba do navegador
- Resultado Google
- Social media preview

---

### 7. Adicionar Nova Seção (Difícil ⭐⭐⭐)

1. Copie uma seção similar
2. Edite conteúdo + ID único
3. Cole onde quiser
4. Teste no navegador

**Onde copiar**: Entre as divs `<section>` ou `<div class="elementor-...">`

---

## 🎨 PERSONALIZAÇÃO

### Tipografia (Fontes)

**Procure no HTML**:
```html
font-family="Roboto", Sans-serif;
font-family="Poppins", Sans-serif;
font-family="Judson", Sans-serif;
```

**Substitua em CSS** se quiser mudar fonte globalmente:
```css
body {
  font-family: "Sua-Fonte", sans-serif;
}
```

### Espaçamento Carrossel

**Arquivo**: `css/carousel-fix.css`

```css
.swiper-wrapper {
  gap: 20px;      /* Desktop - EDITE AQUI */
}

@media (max-width: 1024px) {
  .swiper-wrapper {
    gap: 15px;    /* Tablet - EDITE AQUI */
  }
}

@media (max-width: 768px) {
  .swiper-wrapper {
    gap: 10px;    /* Mobile - EDITE AQUI */
  }
}
```

Mude os números:
- Maior gap = mais espaço entre slides
- Menor gap = slides mais juntos

---

## 🔧 TROUBLESHOOTING

### ❌ Imagens não aparecem
```
Solução:
1. Verifique o nome da imagem em: images/
2. Verifique se está escrito corretamente no HTML
3. Limpador cache: Ctrl+Shift+Del
```

### ❌ Carrossel não funciona
```
Solução:
1. Abra console (F12)
2. Procure por erros vermelhos
3. Verifique se js/carousel-fix.js existe
4. Volte para cópia de backup
```

### ❌ Menu não abre em mobile
```
Solução:
1. Teste em navegador diferente
2. Limpe cache (Ctrl+Shift+Del)
3. Teste com Ctrl+F5 (hard refresh)
```

### ❌ Tipografia estranha
```
Solução:
1. Espere carregar Google Fonts (precisa internet)
2. Se offline, vai usar fonte fallback
3. Verifique conexão internet
```

---

## 📊 ESTRUTURA RÁPIDA

```
HTML
├── HEADER (Logo + Menu)
├── HERO (Renove Sua Confiança + CTA)
├── CAROUSEL (3 Tratamentos)
├── FACELIFT (Descrição + fotos)
├── ABOUT (Sobre mim)
├── CLINIC (A Clínica)
└── FOOTER (Contato + Copyright)

CSS
├── Cores: padrão do template
├── Fonts: Google Fonts
└── Custom: carousel-fix.css

JS
├── jQuery: compatibilidade
├── Elementor: framework
└── Custom: carousel-fix.js
```

---

## 🌐 DEPLOY (Se quiser em hosting)

### Opção 1: Netlify (Gratuito)
```
1. Crie conta em netlify.com
2. Arraste pasta do site
3. Pronto! Site online
4. URL: seu-site.netlify.app
```

### Opção 2: GitHub Pages (Gratuito)
```
1. Crie repositório GitHub
2. Faça upload dos arquivos
3. Vá em: Settings > Pages > Main
4. Pronto! Site online
5. URL: seu-usuario.github.io/seu-site
```

### Opção 3: seu próprio hosting
```
1. Crie conta em hosting (ex: Hostinger)
2. Via FTP, copie arquivos
3. Aponte domínio para hosting
4. Pronto!
```

**Dica**: Site estático funciona em qualquer hosting barato (0,99$/mês)

---

## 📞 REFERÊNCIAS IMPORTANTES

| Item | Localização |
|------|-------------|
| Seu WhatsApp | `index.html` - busque `5521972518469` |
| Meta tags SEO | `index.html` - linha ~12-20 |
| Estilos personalizados | `css/carousel-fix.css` |
| Script customizado | `js/carousel-fix.js` |
| Imagens | Pasta `images/` |

---

## ✅ CHECKLIST ANTES DE PUBLICAR

- [ ] Testei em Chrome, Firefox, Safari
- [ ] Testei em mobile (iPhone + Android)
- [ ] Testei WhatsApp link
- [ ] Testei carrossel (setas + bullets)
- [ ] Testei menu mobile
- [ ] Testei todas as imagens carregam
- [ ] Sem erros no console (F12)
- [ ] Fiz backup do arquivo HTML
- [ ] Documente mudanças em CHANGELOG

---

## 🎯 PRÓXIMAS HABILIDADES

**Depois de dominar o básico:**
- [ ] Adicione formulário de contato
- [ ] Integre Analytics
- [ ] Adicione testimoniais/reviews
- [ ] Crie galeria interativa
- [ ] Adicione agendamento online

**Recursos**:
- Netlify Forms (gratuito)
- Google Analytics
- Formspree (formulários)

---

## 📖 DOCUMENTOS RELACIONADOS

1. **RESUMO_MIGRACAO.md** - O que foi mudado
2. **RELATORIO_ESTRUTURA_SITE.md** - Documentação técnica completa (400+ linhas)
3. **GUIA_RAPIDO.md** - Este arquivo! ⭐

---

## 🆘 EM CASO DE DÚVIDA

1. Consulte `RELATORIO_ESTRUTURA_SITE.md` (Seção 11: Manutenção)
2. Procure no `index.html` pelo texto que quer mudar
3. Teste mudanças pequenas primeiro
4. Faça backup antes de grandes alterações

---

**Última atualização**: 25 de Março de 2026  
**Versão**: 1.0 - Release  
**Status**: ✅ Pronto para uso

Bom trabalho! 🚀
