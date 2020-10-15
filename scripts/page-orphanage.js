const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

// create map
const map = L.map("mapid", options).setView([-27.2144037, -49.64051], 13);

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



//  create and add maker
L.marker([-27.2144037, -49.64051], { icon }).addTo(map)

// image gallery

function selectImage(event) {
    const button = event.currentTarget;
    console.log(button.children);
    // remover todas as classes .active
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach((button) => {
        button.classList.remove('active')
    });

    // const buttons = document.querySelectorAll(".images button")
    // buttons.forEach(removeActiveClass);
    

    // function removeActiveClass(button) {
    //     button.classList.remove('active')
    // }


    //  selecionar a imagem clicada
    const image = button.children[0];
    const imageContainer = document.querySelector('.orphanage-details > img');

    // atualizar o container da imagem
    imageContainer.src = image.src;

    // adicionar a classe .active no botão clicado
    button.classList.add('active');
};