<?php
/**
 * Created by PhpStorm.
 * User: Ale
 * Date: 03/01/2017
 * Time: 01:08
 */

namespace Make\Form\Factory;


use Interop\Container\ContainerInterface;
use Make\Form\MakeValidator;
use Zend\ServiceManager\Factory\FactoryInterface;

class MakeValidatorFactory implements FactoryInterface
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
       return new MakeValidator($container);
    }
}