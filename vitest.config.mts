import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
    plugins: [react()],
    test: {
        globals: true,
        environment: 'jsdom',
        dir: "./src",
        setupFiles: ["./src/setup.tests.ts"],
        coverage: {
            exclude: ['**/node_modules/**', '**/.next/**', '**/*.d.ts', '*.config.js', '*.config.ts', "**/env.mjs", "**/config/*.ts", "**/index.ts", "**/page.tsx", "**/layout.tsx", "**/error.tss", "**/loadign.tss"],
            reporter: ['lcov', 'text']
        }
    },
    resolve: {
        alias: [{ find: "@", replacement: path.resolve(__dirname, "./src") }],
    }
})