<?php
class Route
{
	private $path;
	private $controller;
	private $action;
	private $method;
	private $param;

	public function __construct($route)
	{
		$this->path = $route->path;
		$this->controller = $route->controller;
		$this->action = $route->action;
		$this->method = $route->method;
		$this->param = $route->param;
	}

	public function getPath()
	{
		return $this->path;
	}

	public function getController()
	{
		return $this->controller;
	}

	public function getAction()
	{
		return $this->action;
	}

	public function getMethod()
	{
		return $this->method;
	}

	public function getParam()
	{
		return $this->param;
	}

	public function run($httpRequest, $config)
	{
		$controller = null;
		$controllerName = $this->controller . "Controller";
		if (class_exists($controllerName)) {

			$controller = new $controllerName($httpRequest, $config);
			if (method_exists($controller, $this->action)) {
				$controller->{$this->action}(...$httpRequest->getParam());
			} else {
				throw new Exception("Method " . $this->action . " not found in controller " . $controllerName);
			}
		} else {
			throw new Exception("Controller " . $controllerName . " not found");
		}
	}
}
