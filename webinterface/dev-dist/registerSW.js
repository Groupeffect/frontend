if('serviceWorker' in navigator) navigator.serviceWorker.register('/frontend/dev-sw.js?dev-sw', { scope: '/frontend/', type: 'classic' })