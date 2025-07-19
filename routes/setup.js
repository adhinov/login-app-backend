const express = require("express");
const router = express.Router();
const db = require("../db");

// 🔍 Test koneksi database
router.get("/test-db", async (req, res) => {
  try {
    await db.promise().query("SELECT 1");
    res.send("✅ Koneksi Database Berhasil");
  } catch (err) {
    console.error("❌ Gagal koneksi DB:", err);
    res.status(500).send("❌ Gagal koneksi DB");
  }
});

// 🧹 Drop tabel `users` jika ada
router.get("/drop-users", async (req, res) => {
  try {
    await db.promise().query("DROP TABLE IF EXISTS users");
    res.send("✅ Tabel `users` berhasil dihapus.");
  } catch (err) {
    console.error("❌ Gagal drop tabel:", err);
    res.status(500).send("❌ Gagal drop tabel.");
  }
});

// 🧱 Buat ulang tabel `users`
router.get("/init-db", async (req, res) => {
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      email VARCHAR(255) NOT NULL UNIQUE,
      username VARCHAR(100),
      phone VARCHAR(20),
      password VARCHAR(255) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `;

  try {
    await db.promise().query(createTableQuery);
    res.send("✅ Tabel `users` berhasil dibuat.");
  } catch (err) {
    console.error("❌ Gagal bikin tabel:", err);
    res.status(500).send("❌ Gagal bikin tabel.");
  }
});

module.exports = router;

