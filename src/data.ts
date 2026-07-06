/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Service, Advantage, Testimonial, FaqItem, BuildingType } from "./types";

export const SERVICES_DATA: Service[] = [
  {
    id: "bongkar-pasang",
    name: "Bongkar Pasang AC Baru/Bekas",
    description: "Pemasangan rapi, aman, presisi, dan bergaransi. Melayani pemindahan unit AC lama ke lokasi baru dengan aman tanpa kebocoran freon.",
    iconName: "Wrench"
  },
  {
    id: "cuci-ac",
    name: "Cuci AC (Cleaning)",
    description: "Pembersihan menyeluruh unit indoor dan outdoor. Membersihkan debu, lumut, dan bakteri agar udara kembali segar, bersih, dingin maksimal, serta hemat listrik.",
    iconName: "Droplets"
  },
  {
    id: "isi-freon",
    name: "Isi & Tambah Freon",
    description: "Pengisian freon berkualitas tinggi (R32, R410a, R22) untuk mengembalikan suhu dingin optimal. Kami memeriksa potensi kebocoran sebelum pengisian.",
    iconName: "Snowflake"
  },
  {
    id: "perbaikan-ac",
    name: "Perbaikan AC Bermasalah",
    description: "Solusi cepat untuk AC tidak dingin, bocor air, mengeluarkan suara bising, mati total, sensor error, hingga perbaikan modul elektronik pcb.",
    iconName: "Hammer"
  },
  {
    id: "perawatan-rutin",
    name: "Perawatan Rutin Berkala",
    description: "Program kontrak perawatan berkala untuk perkantoran, toko, maupun rumah tangga untuk mencegah kerusakan fatal dan memperpanjang usia pakai AC Anda.",
    iconName: "ShieldCheck"
  }
];

export const ADVANTAGES_DATA: Advantage[] = [
  {
    id: "teknisi-ahli",
    title: "Teknisi Berpengalaman",
    description: "Tim teknisi kami terlatih, profesional, jujur, serta mengutamakan keselamatan dan kepuasan pelanggan.",
    iconName: "UserCheck"
  },
  {
    id: "cepat-rapi",
    title: "Kerja Cepat & Rapi",
    description: "Datang tepat waktu sesuai jadwal, pengerjaan efisien, teratur, dan kami selalu membersihkan kembali area kerja.",
    iconName: "Zap"
  },
  {
    id: "harga-bersahabat",
    title: "Harga Bersahabat",
    description: "Tarif jujur, transparan dan kompetitif. Estimasi pengerjaan disampaikan secara jelas di lokasi sebelum pengerjaan dimulai.",
    iconName: "DollarSign"
  },
  {
    id: "garansi-nyata",
    title: "Garansi Layanan Nyata",
    description: "Kami memberikan garansi dingin dan garansi perbaikan atas pengerjaan kami demi kenyamanan Anda.",
    iconName: "Award"
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "testi-1",
    name: "Ibu Rina",
    role: "Ibu Rumah Tangga, Panam",
    rating: 5,
    comment: "Teknisinya datang tepat waktu, kerjanya sangat rapi, dan AC di kamar langsung dingin menggigil kembali. Harganya juga sangat bersahabat dibanding servis AC lain di Pekanbaru!",
    avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: "testi-2",
    name: "Pak Doni",
    role: "Pemilik Toko Ritel, Jl. Sudirman",
    rating: 5,
    comment: "Sudah langganan cuci AC kantor dan toko tiap 3 bulan dengan Mr. Cool. Proses kerjanya cepat, tidak berisik, rapi, dan teknisinya ramah sekali. Recommended!",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80"
  },
  {
    id: "testi-3",
    name: "Pak Heru",
    role: "Pengelola Apartemen/Kost, Gobah",
    rating: 5,
    comment: "Pernah panggil untuk bongkar pasang 4 unit AC sekaligus. Hasil kerjanya presisi, pipa tertutup rapi, tidak ada bocor air, dan pengerjaannya sangat efisien. Mantap Mr. Cool!",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80"
  }
];

export const FAQ_DATA: FaqItem[] = [
  {
    id: "faq-1",
    question: "Berapa lama garansi servis yang diberikan?",
    answer: "Kami memberikan garansi pengerjaan selama 30 hari untuk cuci AC dan perbaikan. Jika AC mengalami kendala yang sama dalam masa garansi, kami akan memperbaikinya kembali gratis tanpa biaya tambahan."
  },
  {
    id: "faq-2",
    question: "Apakah bisa dipanggil di hari Minggu atau hari libur?",
    answer: "Ya, betul sekali! Kami memahami kenyamanan Anda adalah prioritas. Kami tetap melayani pemesanan servis AC pada hari Minggu dan hari libur nasional mulai pukul 08:00 hingga 20:00 WIB."
  },
  {
    id: "faq-3",
    question: "Bagaimana cara melakukan pemesanan servis AC?",
    answer: "Sangat mudah! Anda hanya perlu mengeklik tombol 'Pesan via WhatsApp' atau 'Telepon Sekarang' di website ini. Anda akan langsung terhubung ke admin kami untuk menentukan jadwal kunjungan teknisi."
  },
  {
    id: "faq-4",
    question: "Berapa frekuensi ideal untuk melakukan cuci AC?",
    answer: "Untuk penggunaan rumah tangga normal, kami menyarankan cuci AC berkala setiap 3 hingga 4 bulan sekali. Sedangkan untuk kantor atau toko dengan intensitas penggunaan tinggi, disarankan setiap 2 hingga 3 bulan sekali agar sirkulasi udara tetap bersih dan kompresor tidak bekerja terlalu berat."
  }
];

export const BUILDING_TYPES: BuildingType[] = [
  {
    id: "rumah",
    name: "Rumah Tinggal",
    iconName: "Home",
    description: "Menjaga kenyamanan dan kesehatan udara bagi keluarga tercinta Anda."
  },
  {
    id: "kantor",
    name: "Kantor & Instansi",
    iconName: "Building2",
    description: "Meningkatkan produktivitas kerja karyawan dengan sirkulasi udara yang sejuk."
  },
  {
    id: "toko",
    name: "Toko & Ruko",
    iconName: "Store",
    description: "Membuat pengunjung betah berbelanja dengan kenyamanan udara di toko Anda."
  },
  {
    id: "gedung",
    name: "Gedung & Masjid",
    iconName: "Building",
    description: "Solusi pendinginan skala besar dengan efisiensi energi yang optimal."
  }
];

export const CONTACT_INFO = {
  phone1: "0895329832165",
  phone1Formatted: "0895-3298-32165",
  phone2: "081374067878",
  phone2Formatted: "0813-7406-7878",
  whatsapp1Url: "https://wa.me/62895329832165?text=Halo%20Mr.%20Cool%2C%20saya%20ingin%20memesan%20layanan%20servis%20AC%20di%20Pekanbaru.",
  whatsapp2Url: "https://wa.me/6281374067878?text=Halo%20Mr.%20Cool%2C%20saya%20ingin%20memesan%20layanan%20servis%20AC%20di%20Pekanbaru.",
  email: "mrcoolpekanbaru@gmail.com",
  address: "Jl. Lintas Timur KM. 12, Tenayan Raya, Pekanbaru, Riau",
  hours: "Setiap Hari, 08.00 - 20.00 WIB",
  mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127672.48270138478!2d101.3734084!3d0.5070677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d5ac0efb520ff5%3A0xb5b7367e9154737d!2sPekanbaru%2C%20Riau!5e0!3m2!1sid!2sid!4v1710000000000!5m2!1sid!2sid"
};
