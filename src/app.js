
import express from "express";
import cors from "cors";
import helmet from "helmet";
import pool from "./config/db.js";

import studentRoutes from "./routes/studentRoutes.js";

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

// Home route
app.get("/", (req, res) => {
    res.json({
        message: "School Management API is running"
    });
});

// Database health check
app.get("/health", async (req, res) => {
    try {
        await pool.query("SELECT 1");

        res.json({
            status: "healthy",
            database: "connected"
        });

    } catch (error) {
    console.error("DATABASE CONNECTION ERROR:", error);

    res.status(500).json({
        status: "unhealthy",
        database: "disconnected",
        error: error.message
    });
}
});

// Student API
app.use("/api/students", studentRoutes);

export default app;
