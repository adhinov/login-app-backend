// routes/setup.js
const express = require("express");
const router = express.Router();
const db = require("../db");

// 🔧 Test koneksi DB
router.get("/test-db", async (req, res) => {
  try {
    const [rows] = await db.promise().query("SELECT 1");
    res.send("✅ Koneksi ke database berhasil");
  } catch (err) {
    console.error("❌ Gagal koneksi DB:", err);
    res.status(500).send("❌ Gagal koneksi DB");
  }
});

module.exports = router;
