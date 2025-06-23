import { generateId } from "../utils/GenerateID";

export const bookData = [
  {
    id: generateId(),
    title: "Setup Project",
    body: "Inisialisasi proyek dengan Vite atau Create React App.",
    createdAt: "2024-06-01T10:00:00.000Z",
    archived: false,
    status: "todo",
  },
  {
    id: generateId(),
    title: "Install Dependencies",
    body: "Pasang React, Tailwind CSS, dan React Router.",
    createdAt: "2024-06-02T11:00:00.000Z",
    archived: false,
    status: "inprogress",
  },
  {
    id: generateId(),
    title: "Create Layout",
    body: "Buat struktur halaman utama dengan header dan footer.",
    createdAt: "2024-06-03T09:30:00.000Z",
    archived: false,
    status: "todo",
  },
  {
    id: generateId(),
    title: "ToDo Card Component",
    body: "Komponen untuk menampilkan setiap item ToDo dalam bentuk kartu.",
    createdAt: "2024-06-04T13:45:00.000Z",
    archived: false,
    status: "done",
  },
  {
    id: generateId(),
    title: "State Management",
    body: "Gunakan useState atau context untuk mengelola data ToDo.",
    createdAt: "2024-06-05T08:15:00.000Z",
    archived: false,
    status: "inprogress",
  },
  {
    id: generateId(),
    title: "Add ToDo Feature",
    body: "Fitur untuk menambah item baru ke daftar ToDo.",
    createdAt: "2024-06-06T10:10:00.000Z",
    archived: false,
    status: "todo",
  },
  {
    id: generateId(),
    title: "Edit ToDo Feature",
    body: "Fitur untuk mengubah isi ToDo yang sudah dibuat.",
    createdAt: "2024-06-07T12:20:00.000Z",
    archived: false,
    status: "todo",
  },
  {
    id: generateId(),
    title: "Local Storage Sync",
    body: "Simpan dan ambil data ToDo dari localStorage.",
    createdAt: "2024-06-10T17:30:00.000Z",
    archived: false,
    status: "todo",
  },
  {
    id: generateId(),
    title: "Deploy App",
    body: "Deploy aplikasi ke Netlify atau Vercel.",
    createdAt: "2024-06-12T09:10:00.000Z",
    archived: false,
    status: "todo",
  },
];


export const modals = [
  {
    id: bookData[0]?.id,
    title: "View Details",
    body: "Lihat informasi detail tentang Babel.",
    isSave: false,
  },
  {
    id: bookData[1]?.id,
    title: "Edit Task",
    body: "Ubah informasi komponen fungsional dalam ToDoList.",
    isSave: true,
  },
  {
    id: bookData[2]?.id,
    title: "Delete Task",
    body: "Apakah Anda yakin ingin menghapus topik Modularization?",
    isSave: true,
  },
];

