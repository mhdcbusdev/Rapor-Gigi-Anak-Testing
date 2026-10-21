# Rapor Gigi Anak — TESTING (Temu Dokter)

Versi testing yang terpisah total dari Rapor Gigi Anak production.

Alur: input.html → Apps Script testing (Sheet baru) → n8n `/webhook/rapor-gigi-test` → DataTable `rapor_gigi` / FCM ke app Temu Dokter.

## Isi repo
- `input.html` — form dokter (email wajib, cabang hanya "Medikids Test", tombol "Isi data contoh")
- `index.html` — halaman rapor untuk orang tua (sama seperti production)
- `config.js` — pengaturan testing
- `Judul_Rapor_Gigi.png`, `Gambar_Rapor_Gigi.png` — gambar rapor
- `apps-script/Code.gs` — kode Apps Script (ditempel di Google Sheet, bukan dipakai GitHub)

## Setup
1. Buat Google Sheet baru, misalnya "Rapor Gigi Anak TESTING".
2. Extensions → Apps Script → hapus isi Code.gs → tempel `apps-script/Code.gs` → Save.
3. Deploy → New deployment → Web app. Execute as: Me. Who has access: Anyone. Lalu Authorize.
4. Salin Web app URL → tempel ke `API_URL` di `config.js`.
5. Upload semua file ke repo `Rapor-Gigi-Anak-Testing`, lalu aktifkan Settings → Pages (branch main, folder root).
6. Buka `https://mhdcbusdev.github.io/Rapor-Gigi-Anak-Testing/input.html`.

Kalau Code.gs diubah, harus Deploy → Manage deployments → Edit → Version: New version. Kalau tidak, perubahannya belum aktif.
