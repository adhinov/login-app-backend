// routes/setup.js
const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/create-users-table', async (req, res) => {
  try {
    const sql = `
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        email VARCHAR(100) NOT NULL UNIQUE,
        username VARCHAR(100),
        phone VARCHAR(20),
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;
    await db.query(sql);
    res.send('✅ Tabel users berhasil dibuat!');
  } catch (err) {
    console.error('❌ Gagal bikin tabel:', err);
    res.status(500).send('Gagal buat tabel');
  }
});

module.exports = router;
