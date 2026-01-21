#!/bin/bash

set -e

rm -f ./src/lib/assets/Viktor-Shchelochkov-Resume-preview.jpeg
resumeVersion=$(sed -n 's/.*const resumeVersion = "\(v[0-9]*\)".*/\1/p' ./src/lib/consts.ts)
rm -f "./static/$resumeVersion/background.avif"
rm -f "./static/$resumeVersion/background.jpeg"
rm -f "./static/$resumeVersion/background.webp"
rm -f "./static/$resumeVersion/Viktor-Shchelochkov-Resume-hq.avif"
rm -f "./static/$resumeVersion/Viktor-Shchelochkov-Resume-hq.jpeg"
rm -f "./static/$resumeVersion/Viktor-Shchelochkov-Resume.avif"
rm -f "./static/$resumeVersion/Viktor-Shchelochkov-Resume.jpeg"
rm -f "./static/$resumeVersion/Viktor-Shchelochkov-Resume.webp"
rm -f "./static/$resumeVersion/Viktor-Shchelochkov-Resume-pdf-background.jpeg"
rm -f "./static/$resumeVersion/Viktor-Shchelochkov-Resume.pdf"

magick "./static/$resumeVersion/source.png" -resize 256x -quality 45 ./src/lib/assets/Viktor-Shchelochkov-Resume-preview.jpeg

avifenc -q 90 -j 9 "./static/$resumeVersion/source-background.png" "./static/$resumeVersion/background.avif"
cjpegli --quiet -p 0 -q 87 "./static/$resumeVersion/source-background.png" "./static/$resumeVersion/background.jpeg"
cwebp -quiet -q 95 "./static/$resumeVersion/source-background.png" -o "./static/$resumeVersion/background.webp"

avifenc -q 99 -j 9 "./static/$resumeVersion/source.png" "./static/$resumeVersion/Viktor-Shchelochkov-Resume-hq.avif"
cjpegli --quiet -d 0 "./static/$resumeVersion/source.png" "./static/$resumeVersion/Viktor-Shchelochkov-Resume-hq.jpeg"

avifenc -q 80 -j 9 "./static/$resumeVersion/source.png" "./static/$resumeVersion/Viktor-Shchelochkov-Resume.avif"
cjpegli --quiet -p 0 -q 60 "./static/$resumeVersion/source.png" "./static/$resumeVersion/Viktor-Shchelochkov-Resume.jpeg"
cwebp -quiet -q 85 "./static/$resumeVersion/source.png" -o "./static/$resumeVersion/Viktor-Shchelochkov-Resume.webp"

cjpegli --quiet -p 0 "./static/$resumeVersion/source.png" "./static/$resumeVersion/source-background-pdf.jpeg" --distance 3 --chroma_subsampling 420 --std_quant

cp "./static/$resumeVersion/source-background-pdf.jpeg" "./figma-text-to-pdf/src/background.jpeg"
(cd ./figma-text-to-pdf/src && bun ./generate-pdf.ts 1190 1684 "./font.ttf")
cp ./figma-text-to-pdf/src/output.pdf "./static/$resumeVersion/Viktor-Shchelochkov-Resume.pdf"
