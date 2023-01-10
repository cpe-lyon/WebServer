let layerGroup = L.layerGroup();
let listeIncendies, listeCasernes, listeCamions, listeCapteurs;

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

function getCapteurs() {
    $.ajax({
        type: "GET",
        url: '/capteur',
        async: false,
        success: function (data) {
            listeCapteurs = JSON.parse(data);
        }
    });
}

function afficheMap(map) {
    //Load icons
    let camionIcon = L.icon({
        iconUrl: '/View/img/camion.png',
        shadowUrl: '',
        iconSize: [40, 40],
        shadowSize: [50, 64],
        iconAnchor: [20, 20],
        shadowAnchor: [4, 62],
        popupAnchor: [-3, -76]
    });

    let IncendieIcon = L.icon({
        iconUrl: '/View/img/incendie.png',
        shadowUrl: '',
        iconSize: [40, 40],
        shadowSize: [50, 64],
        iconAnchor: [20, 20],
        shadowAnchor: [4, 62],
        popupAnchor: [-3, -76]
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

    let capteurIcon = L.icon({
        iconUrl: '/View/img/capteur.png',
        shadowUrl: '',
        iconSize: [40, 40],
        shadowSize: [50, 64],
        iconAnchor: [20, 20],
        shadowAnchor: [4, 62],
        popupAnchor: [-3, -76]
    });

    function updateMap() {

        //Remove icone
        layerGroup.clearLayers();

        //Get and add all incendies to the map
        getIncendies();
        for (let i in listeIncendies) {
            if (listeIncendies[i].inc_intensite > 0) {
                marker = new L.marker([listeIncendies[i].inc_latitude, listeIncendies[i].inc_longitude], {
                    icon: L.icon({
                        iconUrl: '/View/img/incendie.png',
                        shadowUrl: '',
                        iconSize: [listeIncendies[i].inc_intensite * 10, listeIncendies[i].inc_intensite * 10],
                        shadowSize: [50, 64],
                        iconAnchor: [20, 20],
                        shadowAnchor: [4, 62],
                        popupAnchor: [-3, -76]
                    })
                })
                    .bindPopup("Identifiant : " + listeIncendies[i].id_incendie + "<br>Intensité : " + listeIncendies[i].inc_intensite +
                        "<br>Coordonnées : " + "(" + listeIncendies[i].inc_latitude + " ; " + listeIncendies[i].inc_longitude + ")")
                layerGroup.addLayer(marker);
            }
        }

        //Get and add all casernes to the map
        getCasernes();
        for (let i in listeCasernes) {
            marker = new L.marker([listeCasernes[i].cas_longitude, listeCasernes[i].cas_latitude], {
                icon: L.icon({
                    iconUrl: '/View/img/caserne.png',
                    shadowUrl: '',
                    iconSize: [40, 40],
                    shadowSize: [50, 64],
                    iconAnchor: [20, 20],
                    shadowAnchor: [4, 62],
                    popupAnchor: [-3, -76]
                })
            })
                .bindPopup("    Identifiant : " + listeCasernes[i].id_caserne +
                    "<br>Coordonnées : " + "(" + listeCasernes[i].cas_longitude + " ; " + listeCasernes[i].cas_latitude + ")")
            layerGroup.addLayer(marker);
        }

        //Get and add all camions to the map
        getCamions();
        for (let i in listeCamions) {
            marker = new L.marker([listeCamions[i].cam_latitude, listeCamions[i].cam_longitude], {
                icon: L.icon({
                    iconUrl: '/View/img/camion.png',
                    shadowUrl: '',
                    iconSize: [40, 40],
                    shadowSize: [50, 64],
                    iconAnchor: [20, 20],
                    shadowAnchor: [4, 62],
                    popupAnchor: [-3, -76]
                })
            })
                .bindPopup("Identifiant : " + listeCamions[i].id_camion + "<br>Caserne : " + listeCamions[i].cam_id_caserne + (
                    listeCamions[i].cam_id_incendie ? "<br>Incendie : " + listeCamions[i].cam_id_incendie : "") +
                    "<br>Coordonnées : " + "(" + listeCamions[i].cam_latitude + " ; " + listeCamions[i].cam_longitude + ")")
            layerGroup.addLayer(marker);
        }

        //Get and add all capteurs to the map
        getCapteurs();
        for (let i in listeCapteurs) {
            marker = new L.marker([listeCapteurs[i].cap_latitude, listeCapteurs[i].cap_longitude], {
                icon: L.icon({
                    iconUrl: '/View/img/capteur.png',
                    shadowUrl: '',
                    iconSize: [40, 40],
                    shadowSize: [50, 64],
                    iconAnchor: [20, 20],
                    shadowAnchor: [4, 62],
                    popupAnchor: [-3, -76]
                })
            })
                .bindPopup("Identifiant : " + listeCapteurs[i].id_capteur +
                    "<br>Coordonnées : " + "(" + listeCapteurs[i].cap_latitude + " ; " + listeCapteurs[i].cap_longitude + ")")
            layerGroup.addLayer(marker);
        }
        layerGroup.addTo(map);
    }

    window.onload = (event) => {
        updateMap();
        setInterval(updateMap, 3000);
    };
}
