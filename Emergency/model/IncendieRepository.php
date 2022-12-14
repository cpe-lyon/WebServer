<?php
require_once('Database/DatabaseConnexion.php');
class IncendieRepository extends DatabaseConnexion
{
    public function __construct()
    {
        $this->getConnexion();
    }

    function getAllIncendies()
    {
        $sql = "SELECT * FROM public.incendie";
        $query = $this->_connexion->prepare($sql);
        $query->execute();
        $resultat = $query->fetchAll(PDO::FETCH_CLASS);
        return $resultat;
    }

    function getIncendieById($id)
    {
        $sql = " SELECT * FROM public.incendie WHERE id_incendie = $id ";
        $query = $this->_connexion->prepare($sql);
        $query->execute();
        $resultat = $query->fetchAll(PDO::FETCH_CLASS);
        return $resultat;
    }

    // function putAllIncendies($data){
    //     $data = json_decode($data, true);
    //     foreach($data as $key => $val){
    //         $sql = "
    //             INSERT INTO public.incendie (id_feu, id_capteur, intensite, frequence, coordonnee_x, coordonnee_y) 
    //             VALUES ({$data[$key]['id_feu']}, {$data[$key]['id_capteur']}, {$data[$key]['intensite']}, {$data[$key]['frequence']}, {$data[$key]['coordonnee_x']}, {$data[$key]['coordonnee_y']})
    //             ON DUPLICATE KEY UPDATE intensite= VALUES(intensite), frequence= VALUES(frequence), coordonnee_x=  VALUES(coordonnee_x), coordonnee_y=  VALUES(coordonnee_y)
    //         ";
    //         $query = $this->_connexion->prepare($sql);
    //         $query->execute();
    //     }
    // }

    function deleteIncendieById($id)
    {
        $sql = "DELETE FROM public.incendie WHERE id_incendie = {$id}";
        $query = $this->_connexion->prepare($sql);
        $query->execute();
    }

    function deleteIncendies($data)
    {
        $data = json_decode($data, true);
        foreach ($data as $key => $val) {
            $sql = " DELETE FROM public.incendie WHERE id_incendie = {$data[$key]['id_incendie']} ";
            $query = $this->_connexion->prepare($sql);
            $query->execute();
        }
    }
}
