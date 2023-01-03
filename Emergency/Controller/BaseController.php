<?php

require_once __DIR__ . "/../../vendor/autoload.php";

class BaseController
{
	private $_httpRequest;
	private $_param;

	public function __construct($httpRequest)
	{
		$this->_httpRequest = $httpRequest;
	}

	protected function view($filename)
	{
		try {
			$loader = new Twig\Loader\FilesystemLoader('View');
			$twig = new Twig\Environment($loader);
			$template = $twig->load($filename . '.html.twig');
			return $template;
		} catch (Exception $e) {
			die('ERROR: ' . $e->getMessage());
		}
	}
}
