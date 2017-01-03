<?php

namespace Make\Controller;

use App\Controller\AbstractController;
use Auth\Adapter\Authentication;
use Interop\Container\ContainerInterface;
use Make\Form\MakeForm;
use Make\Form\MakeValidator;
use Make\View\Helper\MakeHelper;
use Zend\View\Model\ViewModel;


class MakeController extends AbstractController
{
	/**
	 * AbstractController constructor.
	 * @param ContainerInterface $containerInterface
	 */
	public function __construct(ContainerInterface $containerInterface)
	{
		$this->containerInterface=$containerInterface;
		$this->setAuthenticate(Authentication::class);
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

    public function viewAction()
    {
       $formId = $this->params('form');
       return array('form_id' => $formId);
	}

	public function createAction()
    {
		$form = '';

		return array('form' => $form);
	}

	public function inputAction()
	{
		$result = $this->getAjax();
		return $result;
	}

	public function passwordAction()
	{
		$result = $this->getAjax();
		return $result;
	}

	public function passwordverifyAction()
	{
		$result = $this->getAjax();
		return $result;
	}

	public function numberAction()
	{
		$result = $this->getAjax();
		return $result;
	}

	public function phoneAction()
	{
		$result = $this->getAjax();
		return $result;
	}

	public function paragraphAction()
	{
	    $result = $this->getAjax();
	    return $result;
	}

    public function checkboxAction()
	{
	    $result = $this->getAjax();
	    return $result;
	}

    public function radioAction()
	{
	    $result = $this->getAjax();
	    return $result;
	}

    public function dropdownAction()
	{
	    $result = $this->getAjax();
	    return $result;
	}

    public function emailAction()
	{
	    $result = $this->getAjax();
	    return $result;
	}

    public function dateAction()
	{
	    $result = $this->getAjax();
	    return $result;
	}

    public function uploadAction()
	{
	    $result = $this->getAjax();
	    return $result;
	}

    public function creditcardAction()
	{
	    $result = $this->getAjax();
	    return $result;
	}

    public function urlAction()
	{
	    $result = $this->getAjax();
	    return $result;
	}

    public function hiddenAction()
	{
	    $result = $this->getAjax();
	    return $result;
	}

	public function getAjax() {
		$request = $this->getRequest ();
	    $results = $request->getQuery ();

	    $result = new ViewModel (array(
	        'result' => $results,
	    ));

	    $result->setTerminal ( true );

		return $result;
	}


}