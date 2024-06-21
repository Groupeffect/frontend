import {
    defineConfig,
    minimal2023Preset as preset,
} from '@vite-pwa/assets-generator/config'

export default defineConfig({
    headLinkOptions: {
        preset: '2023',
    },
    preset,
    images: [
        'assets/favicon.ico',
        'assets/apple-touch-icon.png',
        'assets/android-chrome-512x512.png',
        'assets/android-chrome-192x192.png'
    ],
})
