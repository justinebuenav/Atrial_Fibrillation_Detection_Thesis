import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";

export default defineConfig({
    plugins: [
        laravel({
            input: ["resources/css/app.css", "resources/js/app.js"],
            refresh: true,
        }),
    ],
    server: {
        host: "0.0.0.0",
        port: 5174,
        cors: true, // <-- ADD THIS LINE
        hmr: {
            host: "afsense.local",
            protocol: "http",
            port: 5174,
        },
    },
});
