<?php
namespace Make\Form;


use App\Form\AbstractForm;
use Interop\Container\ContainerInterface;

class MakeForm extends AbstractForm
{
    /**
     * MakeForm constructor.
     * @param ContainerInterface $container
     * @param int|null|string $name
     * @param array $options
     */
    public function __construct(ContainerInterface $container, $name="Make", array $options=[])
    {
        parent::__construct($container, $name, $options);
        $this->setInputFilter($container->get(MakeValidator::class));
        $this->add([
            'name' => 'module',
            'attributes' => [
                'type'  => 'text',
            ],
            'options' =>[
                'label' => 'Module name:',
                'required' => 'required',
            ],
        ]);

        $this->add([
            'name' => 'submit',
            'attributes' => [
                'type'  => 'submit',
                'value' => 'Create',
                'id' => 'submitbutton',
            ],
        ]);
    }

}
