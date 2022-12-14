<?php
// require('./controller/controleur.php');
// require('./controller/api.php');

// error_reporting(E_ALL ^ E_NOTICE);
// $params = explode('/', htmlspecialchars(rtrim($_GET['action'], '/')));

// > TESTING
require('./model/Repositories/IncendieRepository.php');
$incendieRepository = new IncendieRepository;
$listeIncendie = $incendieRepository->getAllIncendies();
echo json_encode($listeIncendie);
require('view/carte.php');
// < TESTING


// function recupJson()
// {
//     $chaine = '';
//     $putdata = fopen("php://input", "r");
//     while ($data = fread($putdata, 1024)) {
//         $chaine .= $data;
//     }
//     error_log('chaine : ' . $chaine);
//     return $chaine;
// }

// if ($params[0] == "api") {
//     $chaine = "";
//     $request_method = $_SERVER["REQUEST_METHOD"];

//     switch ($request_method) {

//         case 'GET':
//             if ($params[1] == "camion" || $params[1] == "camions") {
//                 api_get_camion($params[2]);
//             } elseif ($params[1] == "capteur" || $params[1] == "capteurs") {
//                 api_get_capteur($params[2]);
//             } elseif ($params[1] == "caserne" || $params[1] == "casernes") {
//                 api_get_caserne($params[2]);
//             } elseif ($params[1] == "equipe" || $params[1] == "equipes") {
//                 api_get_equipe($params[2]);
//             } elseif ($params[1] == "feu" || $params[1] == "feux") {
//                 api_get_feu($params[2]);
//             } elseif ($params[1] == "operation" || $params[1] == "operations") {
//                 api_get_operation($params[2]);
//             } elseif ($params[1] == "pompier" || $params[1] == "pompiers") {
//                 api_get_pompier($params[2]);
//             } else {
//                 header("HTTP/1.1 404 NOT FOUND");
//                 return "break";
//             }
//             break;

//         case 'PUT':
//             $chaine = recupJson();
//             //$chaine = $ess;      
//             if (!isset($params[2])) {
//                 if ($params[1] == "camions") {
//                     api_put_camion($chaine);
//                     header("HTTP/1.1 201 CREATED");
//                 } elseif ($params[1] == "capteurs") {
//                     api_put_capteur($chaine);
//                     header("HTTP/1.1 201 CREATED");
//                 } elseif ($params[1] == "casernes") {
//                     api_put_caserne($chaine);
//                     header("HTTP/1.1 201 CREATED");
//                 } elseif ($params[1] == "equipes") {
//                     api_put_equipe($chaine);
//                     header("HTTP/1.1 201 CREATED");
//                 } elseif ($params[1] == "feux") {
//                     api_put_feu($chaine);
//                     header("HTTP/1.1 201 CREATED");
//                 } elseif ($params[1] == "operations") {
//                     api_put_operation($chaine);
//                     header("HTTP/1.1 201 CREATED");
//                 } elseif ($params[1] == "pompiers") {
//                     api_put_pompier($chaine);
//                     header("HTTP/1.1 201 CREATED");
//                 } else {
//                     header("HTTP/1.1 404 NOT FOUND");
//                     break;
//                 }
//             } else {
//                 header("HTTP/1.1 404 NOT FOUND");
//                 break;
//             }
//             break;

//         case 'DELETE':
//             if (!isset($params[2])) {
//                 $chaine = recupJson();
//             }
//             if ($params[1] == "camion" || $params[1] == "camions") {
//                 api_delete_camion($params[2], $chaine);
//                 header("HTTP/1.1 200 DELETED");
//             } elseif ($params[1] == "capteur" || $params[1] == "capteurs") {
//                 api_delete_capteur($params[2], $chaine);
//                 header("HTTP/1.1 200 DELETED");
//             } elseif ($params[1] == "caserne" || $params[1] == "casernes") {
//                 api_delete_caserne($params[2], $chaine);
//                 header("HTTP/1.1 200 DELETED");
//             } elseif ($params[1] == "equipe" || $params[1] == "equipes") {
//                 api_delete_equipe($params[2], $chaine);
//                 header("HTTP/1.1 200 DELETED");
//             } elseif ($params[1] == "feu" || $params[1] == "feux") {
//                 api_delete_feu($params[2], $chaine);
//                 header("HTTP/1.1 200 DELETED");
//             } elseif ($params[1] == "operation" || $params[1] == "operations") {
//                 api_delete_operation($params[2], $chaine);
//                 header("HTTP/1.1 200 DELETED");
//             } elseif ($params[1] == "pompier" || $params[1] == "pompiers") {
//                 api_delete_pompier($params[2], $chaine);
//                 header("HTTP/1.1 200 DELETED");
//             } else {
//                 header("HTTP/1.1 404 NOT FOUND");
//                 break;
//             }
//             break;
//     }
//     exit();
// } else {
//      carte();
// }
