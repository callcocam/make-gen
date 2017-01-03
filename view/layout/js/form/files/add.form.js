

var zfHead = function zfHead (prop){
    var file =$.sprintf('namespace %s\\Form; <br>',prop.namespace);
    file+='<br>';
    file+='use Zend\\Captcha; <br>';
    file+='use Zend\\Form\\Element; <br>';
    file+='use App\\Form\\AbstractForm; <br>';
    file+='use Interop\\Container\\ContainerInterface; <br>';
    file+='//use Zend\\Form\\Form; <br>';
    file+='<br>';
    file+=$.sprintf('class %s extends AbstractForm <br>',prop.class_name);
    file+='<br>';
    file+='{ <br>';
    file+=$.sprintf("%spublic function __construct(ContainerInterface $container,$name = '%s',$options=[]) <br>",t,prop.namespace.toLowerCase());
    file+=t + "{ <br>";
    file+=tt + "parent::__construct($container,$name,$options); <br>";
    file+=tt + "<br>";
    file+=tt + "$this->setAttribute('method', 'post'); <br>";
    file+=tt + "<br>";

    return (file);
};


var zfFooter = function zfFooter (){
    var file =tt + "<br>";
    file+=t + "} <br>";
    file+='} <br>';
    return (file);
};




var zfValidatorHead = function zfValidatorHead (prop){
    var file =$.sprintf('namespace %s\\Form; <br>',prop.namespace);
    file+='<br>';
    file+='use App\\Form\\AbstractFilter;<br>';
    file+='use Interop\\Container\\ContainerInterface;<br>';
    file+='use Zend\\Filter\\StringTrim;<br>';
    file+='use Zend\\Filter\\StripTags;<br>';
    file+='use Zend\\Validator\\EmailAddress;<br>' ;
    file+='use Zend\\Validator\\NotEmpty;<br>';
    file+='use Zend\\Validator\\StringLength;<br>';
    file+='<br>';
    file+=$.sprintf('class %sValidator extends AbstractFilter <br>',prop.model_name);
    file+='<br>';
    file+='{ <br>';
    file+=t + "<br>";
    file+=t + "public function __construct(ContainerInterface $container) <br>";
    file+=t + "{ <br>";
    file+=t + "<br>";

    return (file);
};




var zfValidatorFooter = function zfFooter (){
    var file =ttt + "<br>";
    file+=t + "} <br>";
    file+='} <br>';
    return (file);
};