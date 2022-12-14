<?php
// use Model\Repository\PathologyRepository;
// use Service\PathologyService;

require_once "BaseController.php";
require_once "./model/IncendieRepository.php";

class IncendieController extends BaseController
{
    public function getAllIncendies()
    {
        $incendieRepository = new IncendieRepository();
        $listeIncendie = $incendieRepository->getAllIncendies();
        return $listeIncendie;
    }
}