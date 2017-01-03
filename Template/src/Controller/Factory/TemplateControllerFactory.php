<?php

namespace {$module}\Controller\Factory;


use Interop\Container\ContainerInterface;
use {$module}\Controller\{$module}Controller;
use Zend\ServiceManager\Factory\FactoryInterface;

class {$module}ControllerFactory implements FactoryInterface
{

    /**
     * Create an object
     *
     * @param  ContainerInterface $container
     * @param  string $requestedName
     * @param  null|array $options
     * @return object
     */
    public function __invoke(ContainerInterface $container, $requestedName, array $options = null)
    {
        return new {$module}Controller($container);
    }
}