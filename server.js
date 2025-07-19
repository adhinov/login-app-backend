// backend/server.js
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const db = require("./db");
const authRoutes = require("./routes/auth");
const passwordRoutes = require("./routes/passwordRoutes");
const setupRoutes = require("./routes/setup"); // ✅ Tambahkan ini

dotenv.config();

const app = express();
const PORT = parseInt(process.env.PORT) || 5000;

app.use(cors({
  origin: "https://login-app-lovat-one.vercel.app",
  credentials: true,
}));

app.use(express.json());

// ✅ API routes
app.use("/api/auth", authRoutes);
app.use("/api", passwordRoutes);
app.use("/api/setup", setupRoutes); // ✅ Tambahkan ini

// ✅ Root route
app.get("/", (req, res) => res.send("✅ Backend is running!"));

// ✅ Listen
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server berjalan di port ${PORT}`);
});

// Optional log
setInterval(() => {
  console.log("⏱ Server masih hidup...");
}, 30000);
