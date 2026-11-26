
import "dotenv/config";
import app from "./app.js";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./config/swagger.js";

// Swagger Documentation
app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpec)
);

// Swagger JSON
app.get("/api-docs.json", (req, res) => {
    res.json(swaggerSpec);
});

// Server
const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Swagger: http://localhost:${PORT}/api-docs`);
});
