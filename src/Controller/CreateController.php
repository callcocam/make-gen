<?php

namespace Make\Controller;



use App\Controller\AbstractController;
use Interop\Container\ContainerInterface;
use Make\Form\MakeForm;
use Make\Form\MakeValidator;
use Make\View\Helper\MakeHelper;
use Zend\View\Helper\ViewModel;

class CreateController extends AbstractController
{

    /**
     * AbstractController constructor.
     * @param ContainerInterface $containerInterface
     */
    public function __construct(ContainerInterface $containerInterface)
    {
        $this->containerInterface=$containerInterface;
        $this->setForm(MakeForm::class);
        $this->setFilter(MakeValidator::class);
    }
    
    public function createmoduleAction()
    {
       // Get success from URL query ('1' = module created, '0' = module not created)
        $success = $this->getRequest()->getQuery('success', '0');
        //echo "Success: ".$success;
        // Generate new module
        if($success != '1') {
            $request = $this->getRequest();
            if ($request->isPost()) {
                if($this->getForm()) {
                    $module = $request->getPost()->get('module');
                    if ($module != '') {
                        // First letter to uppercase, e.g. moDULe becomes Module
                        $module = ucfirst(strtolower($module));
                        if(is_dir('module/'.$module)) {
                            $success = 2; // Module already exists
                        } else {
                            $helper = new MakeHelper();
                            $helper->createModule($module);
                            $success = 1; // Success
                        }
                    }

                }
            }
            // Return variables to view
            return new ViewModel(array('success'=>$success, 'form' => $this->form));
        }


    }
}
