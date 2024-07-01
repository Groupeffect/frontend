import { VitePWA } from 'vite-plugin-pwa'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
import vuetify from 'vite-plugin-vuetify'
const baseUrlLocal = ''
// const baseUrlOnline = process.env['BASE_URL'] || 'https://groupeffect.github.io'
const baseUrlOnline = process.env['BASE_URL'] || ''
const baseUrlPrefix = process.env['BASE_URL_PREFIX'] || 'frontend'
const backendUrl = "https://gcp-django-xdcyoa6ryq-ey.a.run.app/"

if(!process.env['BASE_URL']){
	process.env.NODE_ENV === 'production'
		? process.env.BASE_URL = baseUrlOnline
		: process.env.BASE_URL = baseUrlLocal
}
if(!process.env['BASE_URL_PREFIX']){
	process.env.BASE_URL_PREFIX = baseUrlPrefix
}

if(!process.env['BACKEND_URL']){
	process.env.NODE_ENV === 'production'
	? process.env.BACKEND_URL = backendUrl
	: process.env.BACKEND_URL = "http://localhost"
	// process.env.BACKEND_URL = "http://localhost:8000"
}

if(!process.env['PICTURES_URL']){
	process.env.PICTURES_URL = process.env.BACKEND_URL+"/pictures"
}


const assets = process.env.NODE_ENV === 'production'
	? '/'+baseUrlPrefix+'/assets/'
	: '/'+baseUrlPrefix+'/src/assets/'
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
			workbox: {
				globPatterns: ['**/*.{js,css,html,svg,png,ico}'],
				cleanupOutdatedCaches: true,
				clientsClaim: true,
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
		? baseUrlOnline +'/'+baseUrlPrefix
		: baseUrlLocal+'/'+baseUrlPrefix
})
