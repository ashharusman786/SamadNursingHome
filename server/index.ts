import 'dotenv/config';
import express, { type Request, Response, NextFunction } from "express";
import cors from "cors";
import { registerRoutes } from "./routes.js";

const app = express();

// CORS configuration for production
const corsOptions = {
  origin: process.env.CORS_ORIGIN ? process.env.CORS_ORIGIN.split(',') : ['http://localhost:5173'],
  credentials: true,
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Request logging middleware
app.use((req: Request, res: Response, next: NextFunction) => {
  const start = Date.now();
  const path = req.path;

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      const logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      // Only log in development or if explicitly enabled
      if (process.env.NODE_ENV !== 'production' || process.env.ENABLE_REQUEST_LOGGING === 'true') {
        console.log(logLine);
      }
    }
  });

  next();
});

// Health check endpoint
app.get('/health', (req: Request, res: Response) => {
  res.json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

(async () => {
  const server = await registerRoutes(app);

  // Error handling middleware
  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });

    // Log error in development
    if (process.env.NODE_ENV === 'development') {
      console.error(err);
    }
  });

  // Get port from environment or default to 5000
  const port = process.env.PORT || 5000;
  const host = process.env.NODE_ENV === 'production' ? '0.0.0.0' : 'localhost';

  server.listen({
    port: parseInt(port.toString()),
    host
  }, () => {
    if (process.env.NODE_ENV !== 'production') {
      console.log(`🚀 Server running on ${host}:${port} in ${process.env.NODE_ENV || 'development'} mode`);
    }
  });
})();
