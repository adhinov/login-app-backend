const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "mysql.railway.internal",
  user: "root",
  password: "IZrhAeultryGAUBGseOELlFFiYfuNIoo",  // ← ganti dengan password asli
  database: "railway", // atau nama database dari Railway
});

db.connect((err) => {
  if (err) {
    console.error("❌ Database connection failed:", err);
  } else {
    console.log("✅ Connected to MySQL database");
  }
});

module.exports = db;
