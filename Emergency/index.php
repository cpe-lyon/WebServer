<?php
ini_set("display_errors", 1);
error_reporting(E_ALL);

require_once('Router/Router.php');
require_once('Router/Route.php');
require_once('Router/HttpRequest.php');

$configFile = file_get_contents('Config/config.json');
$config = json_decode($configFile);

spl_autoload_register(function ($class) use ($config) {
    foreach ($config->autoloadFolder as $folder) {
        if (file_exists($folder . '/' . $class . '.php')) {
            require_once($folder . '/' . $class . '.php');
            break;
        }
    }
});

$httpRequest = new HttpRequest();
$router = new Router();
$httpRequest->setRoute($router->findRoute($httpRequest));
$httpRequest->run($config);