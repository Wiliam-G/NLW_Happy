// create map
const map = L.map("mapid").setView([-27.2144037, -49.64051], 13);

// create tile layer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

// crate icon
const icon = L.icon({
  iconUrl: "./images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

// create popup overlay
const popup = L.popup({
  closeButton: false,
  className: 'map-pupup',
  minWidth: 240,
  minHeight: 240,
}).setContent(
  'Lar das meninas <a href="orphanage.html?id=1" class="choose-orphanage"> <img src="./images/arrow-white.svg"> </a>'
);

//  create and add maker
L.marker([-27.2144037, -49.64051], { icon }).addTo(map).bindPopup(popup);
