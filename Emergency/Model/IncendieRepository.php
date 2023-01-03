<?php
require_once('./Database/DatabaseConnexion.php');
class IncendieRepository extends DatabaseConnexion
{
    public function __construct()
    {
        $this->getConnexion();
    }

    function getAllIncendies()
    {
        $sql = 'SELECT * FROM public."T_Incendie"';
        $query = $this->_connexion->prepare($sql);
        $query->execute();
        $resultat = $query->fetchAll(PDO::FETCH_CLASS);
        return $resultat;
    }

    function getIncendieById($id)
    {
        $sql = 'SELECT * FROM public."T_Incendie" WHERE id_incendie = :id';
        $query = $this->_connexion->prepare($sql);
        $query->bindParam(':id', $id);
        $query->execute();
        $resultat = $query->fetchAll(PDO::FETCH_CLASS);
        return $resultat;
    }

    function deleteIncendieById($id)
    {
        $sql = 'DELETE FROM public."T_Incendie" WHERE id_incendie = :id';
        $query = $this->_connexion->prepare($sql);
        $query->bindParam(':id', $id);
        $query->execute();
    }
}
