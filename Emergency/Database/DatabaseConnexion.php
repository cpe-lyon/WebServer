<?php
include 'config/config.php';
abstract class DatabaseConnexion
{
    protected PDO $_connexion;

    public function getConnexion()
    {
        try {
            $this->_connexion = new PDO('pgsql:host=' . DB_HOST . ';dbname=' . DB_NAME . ';', DB_USERNAME, DB_PASSWORD);
        } catch (PDOException $exception) {
            echo "Connection failed : " . $exception->getMessage();
        }
    }
}
