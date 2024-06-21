import { VitePWA } from 'vite-plugin-pwa'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
import vuetify from 'vite-plugin-vuetify'

const assets = process.env.NODE_ENV === 'production'
? '/frontend/assets/'
: '/frontend/src/assets/'
// https://vitejs.dev/config/
export default defineConfig({
	define: {
		"process.env": process.env
	},
	plugins: [
		vue(),
		VitePWA({
			registerType: 'autoUpdate',
			pwaAssets: {
				disabled: false,
				config: true,
			  },
			devOptions: {
				enabled: true
			},
			manifest: {
				name: 'webinterface',
				short_name: 'webinterface',
				description: 'Groupeffect',
				theme_color: '#ffffff',
				icons: [
					{
						src: assets + "android-chrome-192x192.png",
						sizes: "192x192",
						type: "image/png"
					},
					{
						src: assets + "android-chrome-512x512.png",
						sizes: "512x512",
						type: "image/png"
					},
					{
						src: assets + "apple-touch-icon.png",
						sizes: "180x180",
						type: "image/png"
					}
				],
			},

		}),
		vuetify({ autoImport: true }),
	],
	build: {
		outDir: "../docs"
	},
	base: process.env.NODE_ENV === 'production'
		? 'https://groupeffect.github.io/frontend'
		: '/frontend'
})
