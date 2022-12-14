<?php
include('template.php');
?>

<div id="corps">
    <legend>Légende :</legend>
    <div class="icones">
        <img src="view/img/capteur.png">Capteur
        <img src="view/img/feu.png">Feu
        <img src="view/img/camion.png">Camion
        <img src="view/img/caserne.png">Caserne
    </div>
    <div id="map"></div>
</div>
<footer>
</footer>

<script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js" integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA==" crossorigin="">
</script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script type="text/javascript" src="view/js/map.js"></script>
<script>
    var map = L.map('map').setView([45.76, 4.83], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    // setInterval(() => {
        afficheMap(map);
    // }, 5000);
</script>
</body>

</html>