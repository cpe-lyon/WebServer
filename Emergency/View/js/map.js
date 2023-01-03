// function requeteApi(element, methode) {
//     let requestURL = 'http://127.0.0.1/~/ProjetScientifique/WebServer/Emergency/Controller/' + element + 'Controller';
//     let request = new XMLHttpRequest();
//     request.open(methode, requestURL);
//     request.responseType = 'json';
//     return request;
// }
var listeIncendies;

function getIncendies() {
    $.ajax({
        type: "GET",
        url: '/incendie',
        success: function (data) {
            console.log(data);
            listeIncendies = JSON.parse(data);
        }
    });
}

function afficheMap(map) {
    //Remove icone
    map.eachLayer(function (layer) {
        if (layer.options && (layer.options.pane === "markerPane" || layer.options.pane === "overlayPane")) {
            map.removeLayer(layer);
        }
    });

    //Création des icones
    var camionIcon = L.icon({
        iconUrl: '/view/img/camion.png',
        shadowUrl: '',
        iconSize: [30, 30], // size of the icon
        shadowSize: [50, 64], // size of the shadow
        iconAnchor: [15, 15], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
    });

    var capteurIcon = L.icon({
        iconUrl: '/view/img/capteur.png',
        shadowUrl: '',
        iconSize: [30, 30], // size of the icon
        shadowSize: [50, 64], // size of the shadow
        iconAnchor: [15, 15], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
    });

    var feuIcon = L.icon({
        iconUrl: '/view/img/feu.png',
        shadowUrl: '',
        iconSize: [30, 30], // size of the icon
        shadowSize: [50, 64], // size of the shadow
        iconAnchor: [15, 15], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
    });

    var caserneIcon = L.icon({
        iconUrl: '/view/img/caserne.png',
        shadowUrl: '',
        iconSize: [30, 30], // size of the icon
        shadowSize: [50, 64], // size of the shadow
        iconAnchor: [15, 15], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
    });

    var layerGroup = L.layerGroup();

    window.onload = (event) => {
        getIncendies();
        for (let i in listeIncendies) {
            marker = new L.marker([listeIncendies[i].inc_longitude, listeIncendies[i].inc_latitude], { icon: feuIcon })
                .bindPopup("Incendie : " + listeIncendies[i].id_incendie + "<br>Intensité : " + listeIncendies[i].inc_intensite +
                    "<br>Coordonnée : " + "(" + listeIncendies[i].inc_longitude + " ; " + listeIncendies[i].inc_latitude + ")")
            layerGroup.addLayer(marker);
        }
        layerGroup.addTo(map);
    };

    // var listeCamions;
    // var listeCapteurs;
    // var listeFeux;
    // var listeCasernes;

    // let requestCamions = requeteApi('camions', 'GET');
    // requestCamions.onload = function() {
    //     listeCamions = requestCamions.response;   
    //     for(var i in listeCamions){
    //         marker = new L.marker([listeCamions[i].coordonnee_x, listeCamions[i].coordonnee_y], {icon: camionIcon})
    //                         .bindPopup("Camion : " + listeCamions[i].id_camion + "<br>Caserne : " + listeCamions[i].id_caserne + 
    //                             "<br>Type de produit  : " + listeCamions[i].type_produit + "<br>Capacité : " + listeCamions[i].capacite + 
    //                             "<br>Nb pompier : " + listeCamions[i].nb_pompier + "<br>Coordonnée : " + "("+listeCamions[i].coordonnee_x +" ; " + listeCamions[i].coordonnee_y + ")" +
    //                             "<br>Destination : " + "("+listeCamions[i].coordonnee_dest_x +" ; " + listeCamions[i].coordonnee_dest_y + ")")
    //         layerGroup.addLayer(marker);  
    //     }
    //     layerGroup.addTo(map);
    // }
    // requestCamions.send();

    // let requestCapteurs = requeteApi('capteurs', 'GET');
    // requestCapteurs.onload = function() {
    //     listeCapteurs = requestCapteurs.response;   
    //     for(var i in listeCapteurs){
    //         marker = new  L.marker([listeCapteurs[i].coordonnee_x, listeCapteurs[i].coordonnee_y], {icon: capteurIcon})
    //                         .bindPopup("Capteur : " + listeCapteurs[i].id_capteur + "<br>Intensité : " + listeCapteurs[i].intensite +
    //                             "<br>Périmètre : " + listeCapteurs[i].perimetre + "<br>Coordonnée : " +  "("+listeCapteurs[i].coordonnee_x +" ; " + listeCapteurs[i].coordonnee_y + ")")
    //         layerGroup.addLayer(marker);  
    //     }
    //     layerGroup.addTo(map);
    // }
    // requestCapteurs.send();

    // let requestFeux = requeteApi('feux', 'GET');
    // requestFeux.onload = function() {
    //     listeFeux = requestFeux.response;   
    //     for(var i in listeFeux){
    //         marker = new  L.marker([listeFeux[i].coordonnee_x, listeFeux[i].coordonnee_y], {icon: feuIcon})
    //                         .bindPopup("Feu : " + listeFeux[i].id_feu + "<br>Capteur : " + listeFeux[i].id_capteur + "<br>Intensité : " + listeFeux[i].intensite + "<br>Fréquence : " + listeFeux[i].frequence +
    //                              "<br>Coordonnée : " +  "("+listeFeux[i].coordonnee_x +" ; " + listeFeux[i].coordonnee_y + ")")
    //         layerGroup.addLayer(marker);  
    //     }
    //     layerGroup.addTo(map);
    // }
    // requestFeux.send();

    // let requestCasernes = requeteApi('casernes', 'GET');
    // requestCasernes.onload = function() {
    //     listeCasernes = requestCasernes.response;   
    //     for(var i in listeCasernes){
    //         marker = new  L.marker([listeCasernes[i].coordonnee_x, listeCasernes[i].coordonnee_y], {icon: caserneIcon})
    //                         .bindPopup("Caserne : " + listeCasernes[i].id_caserne + "<br>Total des pompiers : " + listeCasernes[i].total_pompier + 
    //                             "<br>Coordonnée : " +  "("+listeCasernes[i].coordonnee_x +" ; " + listeCasernes[i].coordonnee_y + ")")
    //         layerGroup.addLayer(marker);  
    //     }
    //     layerGroup.addTo(map);
    // }
    // requestCasernes.send();

}
