
zfModel=function(prop){
     var props = prop[0].form_properties[0];
    var file =$.sprintf("namespace %s\\Model\\%s; <br>",props.namespace,props.model_name);
        file +="<br>";
        file +="use App\\Model\\AbstractModel; <br>";
        file +="use Interop\\Container\\ContainerInterface; <br>";
        file +="<br>";
        file +=$.sprintf("class %s extends AbstractModel <br>",props.model_name);
        file +="{ <br>";
        file +=properts(prop);
        file +="<br>" ;
        file +=t +" /** <br>";
        file +=t +" * AbstractModel constructor. <br>" ;
        file +=t +" * @param ContainerInterface $container <br>";
        file +=t +" */ <br>";
        file +=t +"public function __construct(ContainerInterface $container) <br>";
        file +=tt +"{ <br>";
        file +=ttt +" $this->container = $container; <br>";
        file +=tt +"} <br>";
        file +="<br>";
        file +=attr(prop);
        file +="<br>";
        file +="} <br>";

    return (file);
}

var properts=function (model) {
    var textModel='';
    var field ='';
    for (var i = 0; i < model.length; i++){
        // form properties
        field=getName(model,i);
        if(field){
            textModel +=tt +$.sprintf("protected $%s;<br>",field);
        }
   }

    return (textModel);

}

var attr=function (model) {
    var textModel='';
    var field ='';

    for (var i = 0; i < model.length; i++){
        // form properties
        field=getName(model,i);
        if(field){
            var str =field.replace("_",' ');
            str = str.toLowerCase().replace(/\b[a-z]/g, function(letter) {
                return letter.toUpperCase();
            });
            var str =str.replace(" ",'');
            textModel +=$.sprintf("%spublic function get%s(){<br>%sreturn $this->%s; <br>%s}<br><br><br>%spublic function set%s($%s){<br>%s$this->%s=$%s; <br>%sreturn $this; <br>%s}<br>",
                    tt,str,ttt,field,tt,tt,str,field,ttt,field,field,ttt,tt);
        }
    }

    return (textModel);
}

function getName(model,i) {

    // form line text
    if(model[i].line_text){
        return model[i].line_text[0].name;
    }

    // form number
    if(model[i].line_number){
        return model[i].line_number[0].name;
    }

    // form paragraph
    if(model[i].line_paragraph){
        return model[i].line_paragraph[0].name;
    }

    // form password
    if(model[i].line_password){
        return model[i].line_password[0].name;
    }

    // form password_verify
    if(model[i].line_password_verify){
        return model[i].line_password_verify[0].name;
    }

    // form checkboxes
    if(model[i].line_checkbox ){
        return model[i].line_checkbox[0].name;
    }

    // form dropdown
    if(model[i].line_dropdown ){
        return model[i].line_dropdown[0].name;
    }

    // form radio
    if(model[i].line_radio ){
        return model[i].line_radio[0].name;
    }

    // form email
    if(model[i].line_email ){
        return model[i].line_email[0].name;
    }

    // form date
    if(model[i].line_date ){
        return model[i].line_date[0].name;
    }

    // form upload
    if(model[i].line_upload ){
        return model[i].line_upload[0].name;
    }

    // form credit card
    if(model[i].line_credit_card ){
        return model[i].line_credit_card[0].name;
    }

    // form url
    if(model[i].line_url ){
        return model[i].line_url[0].name;
    }

    // form hidden
    if(model[i].line_hidden ){
        return model[i].line_hidden[0].name;
    }
    return '';

}