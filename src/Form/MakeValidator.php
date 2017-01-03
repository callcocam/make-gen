<?php
/**
 * Created by PhpStorm.
 * User: Ale
 * Date: 03/01/2017
 * Time: 00:40
 */

namespace Make\Form;

use App\Form\AbstractFilter;
use Interop\Container\ContainerInterface;
use Zend\Filter\StringTrim;
use Zend\Filter\StripTags;
use Zend\Validator\StringLength;

class MakeValidator extends AbstractFilter
{
    /**
     * MakeValidator constructor.
     * @param ContainerInterface $container
     */
    public function __construct(ContainerInterface $container)
    {
        parent::__construct($container);
        $this->add($this->factory->createInput([
            'name'     => 'module',
            'required' => true,
            'filters'  => [
                ['name' => StripTags::class],
                ['name' => StringTrim::class],
            ],
            'validators' => [
                [
                    'name'    => StringLength::class,
                    'options' =>[
                        'encoding' => 'UTF-8',
                        'min'      => 1,
                        'max'      => 100,
                    ],
                ],
                [
                    'name'    => 'Alnum',
                    'options' => [
                        'allowWhiteSpace' => false,
                    ],
                ],
            ],
        ]));
    }
}