<?php
require_once('BaseController.php');
require_once('./Model/CapteurRepository.php');

class CapteurController extends BaseController
{
    public function getAllCapteurs()
    {
        $capteurRepository = new CapteurRepository();
        $listeCapteur = $capteurRepository->getAllCapteurs();
        print json_encode($listeCapteur);
    }
}