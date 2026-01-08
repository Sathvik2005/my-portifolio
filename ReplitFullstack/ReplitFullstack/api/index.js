import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createRequire } from "module";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const require = createRequire(import.meta.url);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// API routes
app.post("/api/contact", async (req, res) => {
  try {
    // For now, just return success (database not required for deployment)
    res.status(201).json({
      success: true,
      message: "Message sent successfully. We'll get back to you soon!",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Failed to send message. Please try again later.",
    });
  }
});

// Serve static files from dist/public
const publicPath = path.join(__dirname, "../dist/public");
app.use(express.static(publicPath));

// Catch-all route to serve index.html for client-side routing
app.get("*", (_req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

export default app;
