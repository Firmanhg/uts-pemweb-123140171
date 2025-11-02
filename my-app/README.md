# Weather Dashboard

`Weather Dashboard` adalah aplikasi web dinamis yang dibuat dengan React dan Vite. Aplikasi ini memungkinkan pengguna untuk mencari data cuaca *real-time* dan prakiraan 5 hari ke depan untuk kota mana pun di dunia. Proyek ini memiliki desain *glassmorphism* "Aurora" yang modern, responsif, dan dilengkapi dengan *toggle* celius/fahrenheit serta *toggle* mode terang/gelap

## 👤 Profil

* **Nama:** Firman H Gultom
* **NIM:** 123140171

## Link Deployment

Aplikasi ini dapat diakses secara langsung melalui link berikut:

https://uts-pemweb-123140171.vercel.app/

## Pratinjau (Preview)

Tampilan aplikasi dalam mode terang (Light Mode) dan mode gelap (Dark Mode).

<p align="center">
  <img width="1919" height="964" alt="image" src="https://github.com/user-attachments/assets/6eb8ebac-f349-43f8-af35-bc27470d5306" />
  <img width="1919" height="952" alt="image" src="https://github.com/user-attachments/assets/142ce968-5fb3-4022-b51a-f2ea607216a9" />
</p>

## Fitur Utama

* **Form Input Nama Kota:** Dilengkapi dengan saran *autocomplete* saat pengguna mengetik, menggunakan OpenWeatherMap Geo API.
<img width="1919" height="970" alt="image" src="https://github.com/user-attachments/assets/2d55c7a0-e502-41d9-8c4d-12082c4d0901" />

* **Display Cuaca Saat Ini:** Menampilkan suhu, deskripsi cuaca, kelembapan, dan kecepatan angin pada kartu detail.
<img width="1919" height="970" alt="image" src="https://github.com/user-attachments/assets/04bf763d-d0d5-42b3-98ce-6bfde3f17560" />

* **Tabel Forecast 5 Hari:** Tampilan tabel yang rapi untuk prakiraan cuaca 5 hari ke depan.
<img width="1918" height="562" alt="image" src="https://github.com/user-attachments/assets/d7d14e31-8c6a-4638-ace2-37bb68bd96fa" />
  
* **Riwayat Pencarian:** Menyimpan 5 pencarian terakhir di `localStorage` agar mudah diakses kembali.
<img width="1919" height="937" alt="image" src="https://github.com/user-attachments/assets/d150a1a1-cb35-4a08-b22b-79b33fca129e" />

* **Toogle Unit:** Mengubah tampilan suhu antara Celcius (°C) dan Fahrenheit (°F).
<img width="1919" height="145" alt="image" src="https://github.com/user-attachments/assets/e7004dc1-6074-4ce9-b58e-b9aa5d7fbdd1" />

* **Mode Terang & Gelap:** Tema "Aurora Glass" yang cantik dan dapat diganti. Preferensi tema disimpan di `localStorage`.
<img width="1919" height="926" alt="image" src="https://github.com/user-attachments/assets/ce974e1d-77a7-40ca-bd08-c7d519e875fc" />

* **Hapus Riwayat:** Pengguna dapat menghapus item dari daftar riwayat satu per satu.
<img width="1919" height="234" alt="image" src="https://github.com/user-attachments/assets/b5e6b85a-1504-451b-affe-0b98ca5c849e" />

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
