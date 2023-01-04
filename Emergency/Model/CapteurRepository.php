<?php
require_once('./Database/DatabaseConnexion.php');
class CapteurRepository extends DatabaseConnexion
{
    public function __construct()
    {
        $this->getConnexion();
    }

    function getAllCapteurs()
    {
        $sql = 'SELECT * FROM public."T_Capteur"';
        $query = $this->_connexion->prepare($sql);
        $query->execute();
        $resultat = $query->fetchAll(PDO::FETCH_CLASS);
        return $resultat;
    }

    function getCapteurById($id)
    {
        $sql = 'SELECT * FROM public."T_Capteur" WHERE id_capteur = :id';
        $query = $this->_connexion->prepare($sql);
        $query->bindParam(':id', $id);
        $query->execute();
        $resultat = $query->fetchAll(PDO::FETCH_CLASS);
        return $resultat;
    }

    function deleteCapteurById($id)
    {
        $sql = 'DELETE FROM public."T_Capteur" WHERE id_capteur = :id';
        $query = $this->_connexion->prepare($sql);
        $query->bindParam(':id', $id);
        $query->execute();
    }
}
