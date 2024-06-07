import { resolve } from 'path';

export default {
    root: resolve(__dirname, 'src'),
    build: {
        outDir: resolve(__dirname, 'dist'),
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'src/index.html'),
                en: resolve(__dirname, 'src/en/index.html')
            }
        }
    },
    server: {
        port: 8080
    },
    publicDir: resolve(__dirname, 'public')
}
