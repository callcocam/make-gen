<?php
/**
 * Created by PhpStorm.
 * User: Ale
 * Date: 03/01/2017
 * Time: 00:59
 */

namespace Make\Controller\Factory;


use Interop\Container\ContainerInterface;
use Make\Controller\CreateController;
use Zend\ServiceManager\Factory\FactoryInterface;

class CreateControllerFactory implements FactoryInterface
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
        return new CreateController($container);
    }
}