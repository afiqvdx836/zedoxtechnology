# Video scroll untuk section "Isi. Tekan. Minum."

Section `CycleStory` boleh guna video sebenar yang bergerak ikut scroll (bukan autoplay).
Bila `cycle.video.src` kosong atau video gagal dimuat, botol lukisan SVG digunakan.

## 1. Shoot

Satu take, kamera atas tripod, **jangan gerak langsung** (zoom, pan dan auto-exposure akan nampak bergegar bila di-scrub).

- Latar gelap, satu lampu dari atas atau belakang (cyan atau putih) — ikut gaya spotlight site.
- Kunci exposure dan fokus (iPhone: tekan lama pada skrin sampai keluar AE/AF LOCK).
- Rakam 4K atau 1080p, 30 fps atau 60 fps.
- Urutan dalam satu take:
  1. Botol kosong → isi air sampai penuh
  2. Tekan butang → lampu biru menyala, timer mula 03:00
  3. Gelembung naik sepanjang kitaran → timer sampai 00:00

## 2. Edit

Pendekkan jadi **4–6 saat**. Kitaran 3 minit dipercepatkan (timelapse). Ikut nisbah ni supaya caption sepadan
dengan video (nilai dalam `cycle.phaseEnds`):

| Bahagian | Bahagian video |
| --- | --- |
| Isi air | 0% – 28% |
| Kitaran (03:00 → 00:00) | 28% – 85% |
| Siap, gelembung penuh | 85% – 100% |

Kalau masa dalam video tak ikut nisbah ni, tukar `cycle.phaseEnds` dalam `src/config/site.ts`.
Kalau timer dalam video dah jelas, set `cycle.video.showTimer: false`.

## 3. Encode

Video scroll perlu **keyframe pada setiap frame** (`-g 1`), kalau tak ia akan tersekat bila di-scrub ke belakang.
Buang audio. Sasarkan bawah 3 MB.

```bash
# Desktop (landscape atau square)
ffmpeg -i raw.mov -vf "scale=1280:-2,fps=30" -c:v libx264 -preset slow -crf 24 -g 1 -pix_fmt yuv420p -movflags +faststart -an public/media/cycle.mp4

# Mobile (crop potret 4:5)
ffmpeg -i raw.mov -vf "crop=ih*4/5:ih,scale=720:-2,fps=30" -c:v libx264 -preset slow -crf 26 -g 1 -pix_fmt yuv420p -movflags +faststart -an public/media/cycle-mobile.mp4

# Poster (frame pertama)
ffmpeg -i public/media/cycle.mp4 -frames:v 1 -q:v 3 public/media/cycle-poster.jpg
```

Kalau fail terlalu besar, naikkan `-crf` (contoh 28) atau kecilkan `scale`, jangan tukar `-g 1`.

## 4. Pasang

Dalam `src/config/site.ts`:

```ts
video: {
  src: "/media/cycle.mp4",
  srcMobile: "/media/cycle-mobile.mp4",
  poster: "/media/cycle-poster.jpg",
  showTimer: true,
},
```

## Nota teknikal

- Video dimuat penuh sebagai blob bila section hampir masuk skrin, supaya seek serta-merta.
- Playhead "dikejar" secara lembut ke posisi scroll setiap frame (`ScrollVideo.tsx`).
- iOS Safari: video di-`play()`/`pause()` sekali selepas dimuat supaya frame yang di-seek kelihatan. Perlu diuji pada iPhone sebenar.
