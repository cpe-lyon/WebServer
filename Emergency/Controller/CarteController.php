<?php

require_once "BaseController.php";
// require_once "Model/Repository/PathologyRepository.php";
// require_once "Model/Repository/MeridianRepository.php";
// require_once "Model/Repository/SymptomRepository.php";
// require_once "Service/PathologyService.php";


class CarteController extends BaseController
{

    public function carte()
    {
        // $logged=false;
        // $pathologyRepository = new PathologyRepository();
        // $meridianRepository = new MeridianRepository();
        // $symptomRepository = new SymptomRepository();
        // $pathologyService = new PathologyService();
        // session_start();
        // if(isset($_SESSION["connect"])){
        //     $logged=true;
        // }
//TODO tester cookie de session
        echo $this->view('carte')->render(
            // array(
            //     "pathologies" => $pathologyService->rawText($pathologyRepository->getAllPathologies()),
            //     "symptoms" => $symptomRepository->getAllSymptomes(),
            //     "meridians" => $meridianRepository->getAllMeridians(),
            //     "types" => $pathologyRepository->getPathologyTypes(),
            //     'logged' =>$logged
            // )

        );
    }

    // public function getAllSymptomesByPathoId()
    // {
    //     $symptomRepository = new SymptomRepository();
    //     if (isset($_POST["idPatho"])) {
    //         $symptoms = $symptomRepository->getAllSymptomesByPathoId($_POST["idPatho"]);
    //         echo json_encode($symptoms);
    //     }
    // }


}