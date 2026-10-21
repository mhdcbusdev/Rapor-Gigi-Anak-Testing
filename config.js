/* =====================================================================
   config.js — VERSI TESTING (repo Rapor-Gigi-Anak-Testing)
   Dipakai oleh index.html dan input.html.
   Tidak menyambung ke Sheet / Apps Script / n8n production.
   ===================================================================== */

window.MHDC_CONFIG = {

  /* 1) URL Web App Apps Script TESTING (dari Code.gs di folder apps-script).
        Apps Script > Deploy > Manage deployments > salin "Web app URL". */
  API_URL: "TEMPEL_URL_WEB_APP_TESTING_DI_SINI",

  /* 2) Alamat halaman rapor testing */
  RAPOR_BASE: "https://mhdcbusdev.github.io/Rapor-Gigi-Anak-Testing/?id=",

  /* 2b) Kunci akses. HARUS sama persis dengan ACCESS_KEY di Code.gs testing. */
  ACCESS_KEY: "8e0610fc-c1b0-4534-baf5-0a00fbdcc3eb",

  /* 3) Gambar di halaman rapor (nama file di repo ini) */
  GAMBAR_JUDUL: "Judul_Rapor_Gigi.png",
  GAMBAR_GIGI:  "Gambar_Rapor_Gigi.png",

  /* 4) Peta gigi berwarna */
  PETA_WARNA: false,

  /* 5) Tombol "Tanya klinik" di halaman rapor. Kosong = disembunyikan. */
  WA_CRO: "",

  /* 6) Video edukasi (opsional) */
  VIDEO: { tambal: "", cabut: "", akar: "", karang: "", susunan: "" }
};
