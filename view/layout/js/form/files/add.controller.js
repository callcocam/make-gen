/**
 * @param prop
 * @return {String}
 */
function zfController(prop){
    var props = prop.form_properties[0];
    var file =$.sprintf("namespace %s\\Controller; <br>",props.namespace);
    file +="<br>";
    file +="use App\\Controller\\AbstractController;; <br>";
    file +="use Interop\\Container\\ContainerInterface; <br>";
    file +=$.sprintf("use %s\\Form\\%s; <br>",props.namespace, props.class_name);
    file +=$.sprintf("use %s\\Form\\%sValidator; <br>",props.namespace, props.model_name);
    file +=$.sprintf("use %s\\Model\\%s\\%sRepository; <br>",props.namespace, props.model_name, props.model_name);
    file +=$.sprintf("use %s\\Model\\%s\\%s; <br>",props.namespace, props.model_name, props.model_name);
    file +="<br>";
    file +=$.sprintf("class %sController extends AbstractController <br>",props.model_name);
    file +="{ <br>";
    file +="<br>";
    file +=t +" /** <br>";
    file +=t +" * AbstractController constructor. <br>";
    file +=t +" * @param ContainerInterface $containerInterface <br>";
    file +=t +" */ <br>";
    file +=t +"public function __construct(ContainerInterface $containerInterface) <br>";
    file +=tt +"{ <br>";
    file +=ttt +" $this->containerInterface=$containerInterface; <br>";
    file +=ttt + $.sprintf("$this->setRepository(%sRepository::class); <br>", props.model_name);
    file +=ttt + $.sprintf("$this->setModel(%s::class); <br>", props.model_name);
    file +=ttt + $.sprintf("$this->setForm(%sForm::class); <br>", props.model_name);
    file +=ttt + $.sprintf("$this->setFilter(%sValidator::class); <br>", props.model_name);
    file +=tt +"} <br>";
    file +="} <br>";
    return (file);
}