// Service Worker: Offline-Betrieb
const VERSION = 'ik-v8';
const FILES = ['./', 'index.html', 'uebungen.js', 'manifest.json', 'icon-128.png',
  'icon-180.png', 'icon-192.png', 'icon-512.png', 'icon-maskable-512.png',
  'ampel.jpg',
  'beobachten-sitzen.jpg',
  'blickkontakt.jpg',
  'decke-draussen.jpg',
  'drei-leckerli.jpg',
  'erst-schauen.jpg',
  'freigabesignal.jpg',
  'futterbeutel.jpg',
  'handtarget.jpg',
  'hunde-beobachtung.jpg',
  'leckerli-boden.jpg',
  'leckerli-jackpot.jpg',
  'name-test.jpg',
  'parcours.jpg',
  'richtungswechsel.jpg',
  'rueckwaerts.jpg',
  'ruhe-signal.jpg',
  'schau-weg.jpg',
  'spielzeug-aus.jpg',
  'spielzeug-frust.jpg',
  'tueren.jpg',
  'umorientierung.jpg',
  'versteckspiel.jpg'];

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
