let layerGroup = L.layerGroup();
let listeIncendies;
let listeCasernes;
let listeCamions;

function getIncendies() {
    $.ajax({
        type: "GET",
        url: '/incendie',
        async: false,
        success: function (data) {
            listeIncendies = JSON.parse(data);
        }
    });
}

function getCasernes() {
    $.ajax({
        type: "GET",
        url: '/caserne',
        async: false,
        success: function (data) {
            listeCasernes = JSON.parse(data);
        }
    });
}

function getCamions() {
    $.ajax({
        type: "GET",
        url: '/camion',
        async: false,
        success: function (data) {
            listeCamions = JSON.parse(data);
        }
    });
}

function afficheMap(map) {
    //Load icons
    let camionIcon = L.icon({
        iconUrl: '/View/img/camion.png',
        shadowUrl: '',
        iconSize: [40, 40], // size of the icon
        shadowSize: [50, 64], // size of the shadow
        iconAnchor: [20, 20], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
    });

    // let capteurIcon = L.icon({
    //     iconUrl: '/View/img/capteur.png',
    //     shadowUrl: '',
    //     iconSize: [40, 40], // size of the icon
    //     shadowSize: [50, 64], // size of the shadow
    //     iconAnchor: [20, 20], // point of the icon which will correspond to marker's location
    //     shadowAnchor: [4, 62],  // the same for the shadow
    //     popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
    // });

    let IncendieIcon = L.icon({
        iconUrl: '/View/img/incendie.png',
        shadowUrl: '',
        iconSize: [40, 40], // size of the icon
        shadowSize: [50, 64], // size of the shadow
        iconAnchor: [20, 20], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
    });

    let caserneIcon = L.icon({
        iconUrl: '/View/img/caserne.png',
        shadowUrl: '',
        iconSize: [40, 40],
        shadowSize: [50, 64],
        iconAnchor: [20, 20],
        shadowAnchor: [4, 62],
        popupAnchor: [-3, -76]
    });

    window.onload = (event) => {
        //Get and add all incendies to the map
        getIncendies();
        for (let i in listeIncendies) {
            if (listeIncendies[i].inc_intensite > 0) {
                marker = new L.marker([listeIncendies[i].inc_latitude, listeIncendies[i].inc_longitude], { icon: IncendieIcon })
                    .bindPopup("Identifiant : " + listeIncendies[i].id_incendie + "<br>Intensité : " + listeIncendies[i].inc_intensite +
                        "<br>Coordonnées : " + "(" + listeIncendies[i].inc_latitude + " ; " + listeIncendies[i].inc_longitude + ")")
                layerGroup.addLayer(marker);
            }
        }
        layerGroup.addTo(map);

        //Get and add all casernes to the map
        getCasernes();
        for (let i in listeCasernes) {
            marker = new L.marker([listeCasernes[i].cas_longitude, listeCasernes[i].cas_latitude], { icon: caserneIcon })
                .bindPopup("Identifiant : " + listeCasernes[i].id_caserne +
                    "<br>Coordonnées : " + "(" + listeCasernes[i].cas_longitude + " ; " + listeCasernes[i].cas_latitude + ")")
            layerGroup.addLayer(marker);
        }
        layerGroup.addTo(map);

        //Get and add all camions to the map
        getCamions();
        for (let i in listeCamions) {
            marker = new L.marker([listeCamions[i].cam_latitude, listeCamions[i].cam_longitude], { icon: camionIcon })
                .bindPopup("Identifiant : " + listeCamions[i].id_camion +
                    "<br>Coordonnées : " + "(" + listeCamions[i].cam_latitude + " ; " + listeCamions[i].cam_longitude + ")")
            layerGroup.addLayer(marker);
        }
        layerGroup.addTo(map);
    };
}
