import { VitePWA } from 'vite-plugin-pwa'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
import vuetify from 'vite-plugin-vuetify'


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
