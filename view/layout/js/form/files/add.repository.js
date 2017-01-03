zfRepository=function(prop){
    var props = prop.form_properties[0];
    var file =$.sprintf("namespace %s\\Model\\%s; <br>",props.namespace,props.model_name);
    file+="<br>";
    file+="use App\\Mapper\\AbstractMapper; <br>";
    file+="<br>";
    file+=$.sprintf("class %sMapper extends AbstractMapper <br>",props.model_name) ;
    file+="{";
    file+="<br>";
    file+=t +"protected $table='nome da tabele'; <br>";
    file+="}";
    return (file);
}