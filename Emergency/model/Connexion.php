<?php
abstract class Connexion
{
    private $host = "localhost";
    private $db_name = "urgence";
    private $username = "pgtp";
    private $password = "tp";

    protected $_connexion;

    public function getConnexion()
    {
        $this->_connexion = null;
        try {
            $this->_connexion = new PDO("pgsql:host=" . $this->host . ";dbname=" . $this->db_name, $this->username, $this->password);
            $this->_connexion->exec("set names utf8");
        } catch (PDOException $exception) {
            echo "Connection failed : " . $exception->getMessage();
        }
    }
}
