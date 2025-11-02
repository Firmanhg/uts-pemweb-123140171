# Weather Dashboard

`Weather Dashboard` adalah aplikasi web dinamis yang dibuat dengan React dan Vite. Aplikasi ini memungkinkan pengguna untuk mencari data cuaca *real-time* dan prakiraan 5 hari ke depan untuk kota mana pun di dunia. Proyek ini memiliki desain *glassmorphism* "Aurora" yang modern, responsif, dan dilengkapi dengan *toggle* celius/fahrenheit serta *toggle* mode terang/gelap

## 👤 Profil

* **Nama:** Firman H Gultom
* **NIM:** 123140171

## Link Deployment

Aplikasi ini dapat diakses secara langsung melalui link berikut:

[https://LINK-DEPLOYMENT-ANDA.vercel.app/](https://LINK-DEPLOYMENT-ANDA.vercel.app/)

## Pratinjau (Preview)

Tampilan aplikasi dalam mode terang (Light Mode) dan mode gelap (Dark Mode).

<p align="center">
  <img src="image_43f2c3.png" width="48%" alt="Light Mode Preview">
  <img src="image_43854f.png" width="48%" alt="Dark Mode Preview">
</p>

## Fitur Utama

* **Form Input Nama Kota:** Dilengkapi dengan saran *autocomplete* saat pengguna mengetik, menggunakan OpenWeatherMap Geo API.
* **Display Cuaca Saat Ini:** Menampilkan suhu, deskripsi cuaca, kelembapan, dan kecepatan angin pada kartu detail.
* **Tabel Forecast 5 Hari:** Tampilan tabel yang rapi untuk prakiraan cuaca 5 hari ke depan.
* **Riwayat Pencarian:** Menyimpan 5 pencarian terakhir di `localStorage` agar mudah diakses kembali.
* **Toogle Unit:** Mengubah tampilan suhu antara Celcius (°C) dan Fahrenheit (°F).
* **Mode Terang & Gelap:** Tema "Aurora Glass" yang cantik dan dapat diganti. Preferensi tema disimpan di `localStorage`.
* **Hapus Riwayat:** Pengguna dapat menghapus item dari daftar riwayat satu per satu.
* **Ikon Modern:** Menggunakan Font Awesome untuk ikon cuaca yang jelas dan responsif terhadap tema (berbeda warna di *light* vs *dark mode*).

## Teknologi yang Digunakan

* **Vite:** *Build tool* dan *development server* super cepat.
* **React 19:** *Library* utama untuk membangun UI.
* **React Hooks:** Menggunakan `useState` dan `useEffect` untuk manajemen *state* dan *side effects*.
* **CSS Murni:** Untuk *styling* kustom, termasuk *Glassmorphism*, Flexbox, Grid, dan variabel CSS untuk *theming*.
* **Font Awesome (via CDN):** Untuk ikonografi yang bersih dan modern.
* **OpenWeatherMap API:** Sebagai sumber data cuaca (Geo API & 5-Day Forecast API).
* **ESLint:** Untuk *linting* kode.

## Cara Instalasi dan Menjalankan

Untuk menjalankan proyek ini secara lokal, ikuti langkah-langkah berikut:

1.  **Clone repositori ini:**
    ```sh
    git clone https://[text](https://github.com/Firmanhg/uts-pemweb-123140171).git
    cd uts-pemweb-123140171
    ```

2.  **Install dependencies:**
    ```sh
    npm install
    ```

3.  **Konfigurasi API Key:**
    Proyek ini membutuhkan API key dari [OpenWeatherMap](https://openweathermap.org/api).

    * Buat file baru di direktori *root* proyek dengan nama `.env`
    * Tambahkan API key Anda ke dalam file tersebut seperti ini:
        ```
        50b3a9ff8a5ab035ea1f548201b31b95
        ```

4.  **Menjalankan Proyek:**
    Setelah instalasi selesai, jalankan server development:
    ```sh
    npm run dev
    ```
    Aplikasi akan terbuka di `http://localhost:5173/` (atau port lain yang tersedia).