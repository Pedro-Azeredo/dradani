$utf8 = New-Object System.Text.UTF8Encoding($false)
$file = "c:\Users\Pedro\Downloads\saveweb2zip-com-hellensonaly-com\index.html"
$content = [System.IO.File]::ReadAllText($file, $utf8)
$origLen = $content.Length
Write-Host "Loaded file: $origLen chars"

$t1 = "`t" * 17
$nl = "`r`n"

function New-ImgTag($base, $alt) {
    $p = "images/tratamentos/$base"
    return "<img loading=`"lazy`" decoding=`"async`" width=`"2362`"${script:nl}${script:t1}height=`"2560`" src=`"${p}-2362x2560.webp`"${script:nl}${script:t1}class=`"attachment-full size-full`"${script:nl}${script:t1}alt=`"${alt}`"${script:nl}${script:t1}srcset=`"${p}-2362x2560.webp 2362w, ${p}-277x300.webp 277w, ${p}-945x1024.webp 945w, ${p}-768x832.webp 768w, ${p}-1417x1536.webp 1417w, ${p}-1890x2048.webp 1890w`"${script:nl}${script:t1}sizes=`"(max-width: 2362px) 100vw, 2362px`">"
}

# Card 1: LASER INTIMO
$old1 = "<img loading=`"lazy`" decoding=`"async`" width=`"1290`"`n${t1}height=`"1284`" src=`"images/tratamentos/tratamento-laser-intimo.webp`"`n${t1}class=`"attachment-full size-full wp-image-336`"`n${t1}alt=`"`"`n${t1}srcset=`"images/tratamentos/tratamento-laser-intimo.webp 1290w, images/tratamentos/tratamento-laser-intimo-300x300.webp 300w, images/tratamentos/tratamento-laser-intimo-1024x1019.webp 1024w, images/tratamentos/tratamento-laser-intimo-150x150.webp 150w, images/tratamentos/tratamento-laser-intimo-768x764.webp 768w`"`n${t1}sizes=`"(max-width: 1290px) 100vw, 1290px`">"
$new1 = New-ImgTag "laser_intimo" "Laser Íntimo"
if ($content.Contains($old1)) { $content = $content.Replace($old1, $new1); Write-Host "1. Laser Intimo - OK" } else { Write-Host "1. Laser Intimo - NOT FOUND" }

# Card 2: IMPLANON
$old2 = "<img loading=`"lazy`" decoding=`"async`" width=`"2362`"`n${t1}height=`"2560`" src=`"images/tratamentos/tratamento-implanon-scaled.webp`"`n${t1}class=`"attachment-full size-full wp-image-248`"`n${t1}alt=`"`"`n${t1}srcset=`"images/tratamentos/tratamento-implanon-scaled.webp 2362w, images/tratamentos/tratamento-implanon-277x300.webp 277w, images/tratamentos/tratamento-implanon-945x1024.webp 945w, images/tratamentos/tratamento-implanon-768x832.webp 768w, images/tratamentos/tratamento-implanon-1417x1536.webp 1417w, images/tratamentos/tratamento-implanon-1890x2048.webp 1890w`"`n${t1}sizes=`"(max-width: 2362px) 100vw, 2362px`">"
$new2 = New-ImgTag "implanon" "Implanon"
if ($content.Contains($old2)) { $content = $content.Replace($old2, $new2); Write-Host "2. Implanon - OK" } else { Write-Host "2. Implanon - NOT FOUND" }

# Card 3: DIU (special - old image was dra-danielle-rosto, not in tratamentos/)
$old3 = "<img loading=`"lazy`" decoding=`"async`" width=`"554`"`n${t1}height=`"554`" src=`"images/dra-danielle-rosto.webp`"`n${t1}class=`"attachment-full size-full wp-image-338`"`n${t1}alt=`"`"`n${t1}srcset=`"images/dra-danielle-rosto.webp 554w, images/dra-danielle-rosto-300x300.webp 300w, images/dra-danielle-rosto-150x150.webp 150w`"`n${t1}sizes=`"(max-width: 554px) 100vw, 554px`">"
$new3 = New-ImgTag "diu" "DIU"
if ($content.Contains($old3)) { $content = $content.Replace($old3, $new3); Write-Host "3. DIU - OK" } else { Write-Host "3. DIU - NOT FOUND" }

# Card 4: BOTOX (was .png)
$old4 = "<img loading=`"lazy`" decoding=`"async`" width=`"1717`"`n${t1}height=`"1220`"`n${t1}src=`"images/tratamentos/tratamento-botox.png`"`n${t1}class=`"attachment-full size-full wp-image-164`"`n${t1}alt=`"`"`n${t1}srcset=`"images/tratamentos/tratamento-botox.png 1717w, images/tratamentos/tratamento-botox-300x213.png 300w, images/tratamentos/tratamento-botox-1024x728.png 1024w, images/tratamentos/tratamento-botox-768x546.png 768w, images/tratamentos/tratamento-botox-1536x1091.png 1536w`"`n${t1}sizes=`"(max-width: 1717px) 100vw, 1717px`">"
$new4 = New-ImgTag "botox" "Botox"
if ($content.Contains($old4)) { $content = $content.Replace($old4, $new4); Write-Host "4. Botox - OK" } else { Write-Host "4. Botox - NOT FOUND" }

# Card 5: PREENCHIMENTO LABIAL
$old5 = "<img loading=`"lazy`" decoding=`"async`" width=`"2362`"`n${t1}height=`"2560`" src=`"images/tratamentos/tratamento-preenchimento-labial-scaled.webp`"`n${t1}class=`"attachment-full size-full wp-image-249`"`n${t1}alt=`"`"`n${t1}srcset=`"images/tratamentos/tratamento-preenchimento-labial-scaled.webp 2362w, images/tratamentos/tratamento-preenchimento-labial-277x300.webp 277w, images/tratamentos/tratamento-preenchimento-labial-945x1024.webp 945w, images/tratamentos/tratamento-preenchimento-labial-768x832.webp 768w, images/tratamentos/tratamento-preenchimento-labial-1417x1536.webp 1417w, images/tratamentos/tratamento-preenchimento-labial-1890x2048.webp 1890w`"`n${t1}sizes=`"(max-width: 2362px) 100vw, 2362px`">"
$new5 = New-ImgTag "labial" "Preenchimento Labial"
if ($content.Contains($old5)) { $content = $content.Replace($old5, $new5); Write-Host "5. Preenchimento Labial - OK" } else { Write-Host "5. Preenchimento Labial - NOT FOUND" }

# Card 6: BIOESTIMULADOR CORPORAL
$old6 = "<img loading=`"lazy`" decoding=`"async`" width=`"2362`"`n${t1}height=`"2560`" src=`"images/tratamentos/tratamento-bioestimulador-scaled.webp`"`n${t1}class=`"attachment-full size-full wp-image-252`"`n${t1}alt=`"`"`n${t1}srcset=`"images/tratamentos/tratamento-bioestimulador-scaled.webp 2362w, images/tratamentos/tratamento-bioestimulador-277x300.webp 277w, images/tratamentos/tratamento-bioestimulador-945x1024.webp 945w, images/tratamentos/tratamento-bioestimulador-768x832.webp 768w, images/tratamentos/tratamento-bioestimulador-1417x1536.webp 1417w, images/tratamentos/tratamento-bioestimulador-1890x2048.webp 1890w`"`n${t1}sizes=`"(max-width: 2362px) 100vw, 2362px`">"
$new6 = New-ImgTag "Bioestimulador-corporal" "Bioestimulador Corporal"
if ($content.Contains($old6)) { $content = $content.Replace($old6, $new6); Write-Host "6. Bioestimulador - OK" } else { Write-Host "6. Bioestimulador - NOT FOUND" }

# Card 7: CIRURGIA CISTOS
$old7 = "<img loading=`"lazy`" decoding=`"async`" width=`"1200`"`n${t1}height=`"754`" src=`"images/tratamentos/tratamento-cirurgia-cistos.webp`"`n${t1}class=`"attachment-full size-full wp-image-358`"`n${t1}alt=`"`"`n${t1}srcset=`"images/tratamentos/tratamento-cirurgia-cistos.webp 1200w, images/tratamentos/tratamento-cirurgia-cistos-300x189.webp 300w, images/tratamentos/tratamento-cirurgia-cistos-1024x643.webp 1024w, images/tratamentos/tratamento-cirurgia-cistos-768x483.webp 768w`"`n${t1}sizes=`"(max-width: 1200px) 100vw, 1200px`">"
$new7 = New-ImgTag "cirurgia_cisto" "Cirurgia de Retirada de Cistos"
if ($content.Contains($old7)) { $content = $content.Replace($old7, $new7); Write-Host "7. Cirurgia Cistos - OK" } else { Write-Host "7. Cirurgia Cistos - NOT FOUND" }

# Card 8: CIRURGIA INTIMA (was .jpg)
$old8 = "<img loading=`"lazy`" decoding=`"async`" width=`"1080`"`n${t1}height=`"1080`" src=`"images/tratamentos/tratamento-cirurgia-intima.jpg`"`n${t1}class=`"attachment-full size-full wp-image-253`"`n${t1}alt=`"`"`n${t1}srcset=`"images/tratamentos/tratamento-cirurgia-intima.jpg 1080w, images/tratamentos/tratamento-cirurgia-intima-300x300.jpg 300w, images/tratamentos/tratamento-cirurgia-intima-1024x1024.jpg 1024w, images/tratamentos/tratamento-cirurgia-intima-150x150.jpg 150w, images/tratamentos/tratamento-cirurgia-intima-768x768.jpg 768w`"`n${t1}sizes=`"(max-width: 1080px) 100vw, 1080px`">"
$new8 = New-ImgTag "cirurgia_intima" "Cirurgia Íntima"
if ($content.Contains($old8)) { $content = $content.Replace($old8, $new8); Write-Host "8. Cirurgia Intima - OK" } else { Write-Host "8. Cirurgia Intima - NOT FOUND" }

# Card 9: BLEFAROPLASTIA
$old9 = "<img loading=`"lazy`" decoding=`"async`" width=`"678`"`n${t1}height=`"452`" src=`"images/tratamentos/tratamento-blefaroplastia.webp`"`n${t1}class=`"attachment-full size-full wp-image-340`"`n${t1}alt=`"`"`n${t1}srcset=`"images/tratamentos/tratamento-blefaroplastia.webp 678w, images/tratamentos/tratamento-blefaroplastia-300x200.webp 300w`"`n${t1}sizes=`"(max-width: 678px) 100vw, 678px`">"
$new9 = New-ImgTag "blefaroplastia" "Blefaroplastia"
if ($content.Contains($old9)) { $content = $content.Replace($old9, $new9); Write-Host "9. Blefaroplastia - OK" } else { Write-Host "9. Blefaroplastia - NOT FOUND" }

# Card 10: CIRURGIA PLASTICA
$old10 = "<img loading=`"lazy`" decoding=`"async`" width=`"2121`"`n${t1}height=`"1414`"`n${t1}src=`"images/tratamentos/tratamento-cirurgia-plastica.webp`"`n${t1}class=`"attachment-full size-full wp-image-357`"`n${t1}alt=`"`"`n${t1}srcset=`"images/tratamentos/tratamento-cirurgia-plastica.webp 2121w, images/tratamentos/tratamento-cirurgia-plastica-300x200.webp 300w, images/tratamentos/tratamento-cirurgia-plastica-1024x683.webp 1024w, images/tratamentos/tratamento-cirurgia-plastica-768x512.webp 768w, images/tratamentos/tratamento-cirurgia-plastica-1536x1024.webp 1536w, images/tratamentos/tratamento-cirurgia-plastica-2048x1365.webp 2048w`"`n${t1}sizes=`"(max-width: 2121px) 100vw, 2121px`">"
$new10 = New-ImgTag "cirurgia_plastica" "Cirurgia Plástica"
if ($content.Contains($old10)) { $content = $content.Replace($old10, $new10); Write-Host "10. Cirurgia Plastica - OK" } else { Write-Host "10. Cirurgia Plastica - NOT FOUND" }

# Save
$bytes = $utf8.GetBytes($content)
[System.IO.File]::WriteAllBytes($file, $bytes)
Write-Host "Saved. New length: $($content.Length) (was $origLen)"

# Verify no old references remain
$remaining = ([regex]::Matches($content, 'tratamento-')).Count
Write-Host "Remaining 'tratamento-' references: $remaining"
$newRefs = ([regex]::Matches($content, 'images/tratamentos/(laser_intimo|implanon|diu|botox|labial|Bioestimulador|cirurgia_cisto|cirurgia_intima|blefaroplastia|cirurgia_plastica)')).Count
Write-Host "New image references: $newRefs"
