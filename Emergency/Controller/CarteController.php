<?php

require_once "BaseController.php";

class CarteController extends BaseController
{
    public function carte()
    {
        echo $this->view('carte')->render();
    }
}