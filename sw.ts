declare var workbox;

importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js');

if (workbox) {
    workbox.routing.registerRoute(
        new RegExp('.*\.js'),
        workbox.strategies.networkFirst()
    );
} else {
    console.log('Workbox didn\'t load');
}