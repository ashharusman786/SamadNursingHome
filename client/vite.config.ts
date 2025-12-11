import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
    server: {
        port: 3000,
        host: '0.0.0.0',
        strictPort: true,
        open: true
    },
    plugins: [react()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
        },
    },
    build: {
        outDir: "dist",
        emptyOutDir: true,
        rollupOptions: {
            output: {
                manualChunks: {
                    vendor: ['react', 'react-dom'],
                    ui: ['lucide-react'],
                },
            },
        },
    },
    preview: {
        port: 3000,
        host: true,
    },
}); 