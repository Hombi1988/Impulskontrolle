// Service Worker: Offline-Betrieb
const VERSION = 'ik-v4';
const FILES = ['./', 'index.html', 'uebungen.js', 'manifest.json', 'icon.svg',
  'icon-180.png', 'icon-192.png', 'icon-512.png', 'icon-maskable-512.png',
  'img/ampel.jpg',
  'img/beobachten-sitzen.jpg',
  'img/blickkontakt.jpg',
  'img/decke-draussen.jpg',
  'img/drei-leckerli.jpg',
  'img/erst-schauen.jpg',
  'img/freigabesignal.jpg',
  'img/futterbeutel.jpg',
  'img/handtarget.jpg',
  'img/hunde-beobachtung.jpg',
  'img/leckerli-boden.jpg',
  'img/leckerli-jackpot.jpg',
  'img/name-test.jpg',
  'img/parcours.jpg',
  'img/richtungswechsel.jpg',
  'img/rueckwaerts.jpg',
  'img/ruhe-signal.jpg',
  'img/schau-weg.jpg',
  'img/spielzeug-aus.jpg',
  'img/spielzeug-frust.jpg',
  'img/tueren.jpg',
  'img/umorientierung.jpg',
  'img/versteckspiel.jpg'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

// Netzwerk zuerst (damit Updates ankommen), offline aus dem Cache
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET' || url.origin !== location.origin) return;
  e.respondWith(
    fetch(e.request).then(res => {
      const copy = res.clone();
      caches.open(VERSION).then(c => c.put(e.request, copy));
      return res;
    }).catch(() => caches.match(e.request, { ignoreSearch: true })
      .then(r => r || caches.match('index.html')))
  );
});
