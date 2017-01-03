<?php
namespace {$module}\Controller;

use App\Controller\AbstractController;
use Interop\Container\ContainerInterface;
use Zend\View\Model\ViewModel;

class {$module}Controller extends AbstractController
{
	/**
     * AbstractController constructor.
     * @param ContainerInterface $containerInterface
     */
    public function __construct(ContainerInterface $containerInterface)
    {
        $this->containerInterface=$containerInterface;
    }
}