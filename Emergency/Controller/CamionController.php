<?php
require_once('BaseController.php');
require_once('./Model/CamionRepository.php');

class CamionController extends BaseController
{
    public function getAllCamions()
    {
        $camionRepository = new CamionRepository();
        $listeCamion = $camionRepository->getAllCamions();
        print json_encode($listeCamion);
    }
}
