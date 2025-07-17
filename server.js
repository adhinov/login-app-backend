// backend/server.js
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const db = require("./db");
const authRoutes = require("./routes/auth");
const passwordRoutes = require("./routes/passwordRoutes");

dotenv.config();

const app = express();
const PORT = parseInt(process.env.PORT) || 5000;

// CORS – hanya izinkan request dari frontend Vercel kamu
app.use(cors({
  origin: "https://login-app-lovat-one.vercel.app",
  credentials: true,
}));

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api", passwordRoutes);

app.get("/", (req, res) => res.send("✅ Backend is running"));

// 🎯 Pastikan binding host dan port sesuai:
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server berjalan di port ${PORT}`);
});

setInterval(() => {
  console.log("⏱ Server masih hidup...");
}, 30000);
