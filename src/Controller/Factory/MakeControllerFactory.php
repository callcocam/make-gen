<?php
/**
 * Created by PhpStorm.
 * User: Ale
 * Date: 02/01/2017
 * Time: 23:50
 */

namespace Make\Controller\Factory;


use Interop\Container\ContainerInterface;
use Make\Controller\MakeController;
use Zend\ServiceManager\Factory\FactoryInterface;

class MakeControllerFactory implements FactoryInterface
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
      return new MakeController($container);
    }
}