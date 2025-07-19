const express = require("express");
const router = express.Router();
const db = require("../db");

// 🔥 Hapus tabel users
router.get("/drop-users-table", async (req, res) => {
  try {
    await db.promise().query("DROP TABLE IF EXISTS users");
    res.send("✅ Tabel 'users' berhasil dihapus");
  } catch (err) {
    console.error("❌ Gagal hapus tabel:", err);
    res.status(500).send("Gagal hapus tabel");
  }
});

// ✅ Buat ulang tabel users
router.get("/create-users-table", async (req, res) => {
  const createQuery = `
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      email VARCHAR(255) NOT NULL,
      username VARCHAR(100) NOT NULL,
      phone VARCHAR(20),
      password VARCHAR(255) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `;
  try {
    await db.promise().query(createQuery);
    res.send("✅ Tabel 'users' berhasil dibuat");
  } catch (err) {
    console.error("❌ Gagal buat tabel:", err);
    res.status(500).send("Gagal buat tabel");
  }
});

module.exports = router;
