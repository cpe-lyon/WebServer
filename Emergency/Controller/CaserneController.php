<?php
require_once('BaseController.php');
require_once('./Model/CaserneRepository.php');

class CaserneController extends BaseController
{
    public function getAllCasernes()
    {
        $caserneRepository = new CaserneRepository();
        $listeCaserne = $caserneRepository->getAllCasernes();
        print json_encode($listeCaserne);
    }
}
