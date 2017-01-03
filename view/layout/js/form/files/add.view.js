
function zfView(data, type){
    var fileView = '';
    for (var i = 0; i < data.length; i++){
        if(data[i].line_checkbox){
            var checkbox = data[i].line_checkbox[0].name;
            fileView += checkbox != '' ? toView(checkbox, type) : toView('checkbox field with no name', type);
        } else if (data[i].line_credit_card){
            var credit_card = data[i].line_credit_card[0].name;
            fileView += credit_card != '' ? toView(credit_card, type) : toView('credit_card field with no name', type);
        } else if (data[i].line_date){
            var date = data[i].line_date[0].name;
            fileView += line_date != '' ? toView(date, type) : toView('date field with no name', type);
        } else if (data[i].line_dropdown){
            var dropdown = data[i].line_dropdown[0].name;
            fileView += dropdown != '' ? toView(dropdown, type) : toView('dropdown field with no name', type);
        } else if (data[i].line_email){
            var email = data[i].line_email[0].name;
            fileView += email != '' ? toView(email, type) : toView('email field with no name', type);
        } else if (data[i].line_hidden){
            var hidden = data[i].line_hidden[0].name;
            fileView += hidden != '' ? toView(hidden, type) : toView('hidden field with no name', type);
        } else if (data[i].line_number){
            var number = data[i].line_number[0].name;
            fileView += number != '' ? toView(number, type) : toView('number field with no name', type);
        } else if (data[i].line_paragraph){
            var paragraph = data[i].line_paragraph[0].name;
            fileView += paragraph != '' ? toView(paragraph, type) : toView('paragraph field with no name', type);
        } else if (data[i].line_password){
            var password = data[i].line_password[0].name;
            fileView += password != '' ? toView(password, type) : toView('password field with no name', type);
        } else if (data[i].line_password_verify){
            var password_verify = data[i].line_password_verify[0].name;
            fileView += password_verify != '' ? toView(password_verify, type) : toView('password_verify field with no name', type);
        } else if (data[i].line_radio){
            var radio = data[i].line_radio[0].name;
            fileView += radio != '' ? toView(radio, type) : toView('radio field with no name', type);
        } else if (data[i].line_text){
            var text = data[i].line_text[0].name;
            fileView += text != '' ? toView(text, type) : toView('text field with no name', type);
        } else if (data[i].line_upload){
            var upload = data[i].line_upload[0].name;
            fileView += upload != '' ? toView(upload, type) : toView('upload field with no name', type);
        } else if (data[i].line_url){
            var url = data[i].line_url[0].name;
            fileView += url != '' ? toView(url, type) : toView('url field with no name', type);
        }
    }
    return fileView;
}

var toView = function toView (name, type)
{
    var form = '';
    if(type == 'view'){
        form ="echo $this->formLabel($form->get('" + name + "'));" + "<br>";
        form+="echo $this->formElement($form->get('" + name + "'));" + "<br>";
        form+="echo $this->formElementErrors($form->get('" + name + "'));";
        form+="<br>";
    } else if (type == 'row') {
        form = "echo $this->formElementErrors($form->get('" + name + "'));";
    }
    return form;
}


var zfViewHelper=function (){
    var file ='namespace Formgen\\View\\Helper; <br>';
    file+='<br>';
    file+='use Zend\\View\\Helper\\AbstractHelper; <br>';
    file+='<br>';
    file+='class RenderForm extends AbstractHelper <br>';
    file+='<br>';
    file+='{ <br>';
    file+='&nbsp; public function __invoke($form) <br>';
    file+='&nbsp; { <br>';
    file+="&nbsp; &nbsp; $form->prepare(); <br>";
    file+='&nbsp; &nbsp; <br>';
    file+="&nbsp; &nbsp; return $output; <br>";
    file+='&nbsp; } <br>';
    file+='} <br>';
    return (file);
}

