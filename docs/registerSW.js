if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('https://groupeffect.github.io/frontend/sw.js', { scope: 'https://groupeffect.github.io/frontend/' })})}