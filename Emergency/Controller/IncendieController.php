<?php
require_once('BaseController.php');
require_once('./Model/IncendieRepository.php');

class IncendieController extends BaseController
{
    public function getAllIncendies()
    {
        $incendieRepository = new IncendieRepository();
        $listeIncendie = $incendieRepository->getAllIncendies();
        print json_encode($listeIncendie);
    }
}