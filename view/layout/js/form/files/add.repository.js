zfRepository=function(prop){
    var props = prop.form_properties[0];
    var file =$.sprintf("namespace %s\\Controller; <br>",props.namespace);
    file+="<br>";
    file+="use App\\Mapper\\AbstractMapper; <br>";
    file+="<br>";
    file+=$.sprintf("class %sRepository extends AbstractMapper <br>",props.model_name) ;
    file+="{";
    file+="<br>";
    file+=t +"protected $table='nome da tabele'; <br>";
    file+="}";
    return (file);
}