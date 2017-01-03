/**
 * Cristi Citea (http://zend-form-generator.123easywebsites.com/)
 *
 * @link      https://github.com/patrioticcow/Zend-Form for the canonical source repository
 * @copyright Copyright (c) 2012 Cristi Citea
 * @license   http://framework.zend.com/license/new-bsd New BSD License
 * @package   Form_Generator
 */

$(document).ready(function() {
   if(!$('#myTab').length){
       return;
   }
    $('#myTab').find('a').click(function (e) {
        e.preventDefault();
        $(this).tab('show');
    });

    var formId = $('#form_id').html();

    t        = '    ';
    tt       = '        ';
    ttt      = '            ';
    tttt     = '                ';
    ttttt    = '                    ';
    tttttt   = '                        ';
    ttttttt  = '                            ';

    var form = JSON.parse(
        localStorage.getItem(formId)
    );

    var formElements = [];
    var formValidatorElements = [];

    for (var i = 0; i < form.length; i++){
        // form properties
        if(form[i].form_properties){
            var prop = form[i].form_properties[0];

            formElements.push(zfHead(prop));
            formValidatorElements.push(zfValidatorHead(prop));
        }

        // form line text
        if(form[i].line_text){
            var lineText = form[i].line_text[0];

            formElements.push(text(lineText));
            formValidatorElements.push(textValidator(lineText, 'text'));
        }

        // form number
        if(form[i].line_number){
            var lineNumber = form[i].line_number[0];

            formElements.push(text(lineNumber));
            formValidatorElements.push(textValidator(lineNumber, 'number'));
        }

        // form paragraph
        if(form[i].line_paragraph){
            var lineParagraph = form[i].line_paragraph[0];

            formElements.push(text(lineParagraph));
            formValidatorElements.push(textValidator(lineParagraph, 'paragraph'));
        }

        // form password
        if(form[i].line_password){
            var linePassword = form[i].line_password[0];

            formElements.push(text(linePassword));
            formValidatorElements.push(textValidator(linePassword, 'password'));
        }

        // form password_verify
        if(form[i].line_password_verify){
            var linePasswordVerify = form[i].line_password_verify[0];

            formElements.push(text(linePasswordVerify));
            formValidatorElements.push(textValidator(linePasswordVerify, 'password_verify'));
        }

        // form checkboxes
        if(form[i].line_checkbox ){
            var lineCheckboxes = form[i].line_checkbox[0];

            formElements.push(text(lineCheckboxes));
            formValidatorElements.push(textValidator(lineCheckboxes, 'checkboxes'));
        }

        // form dropdown
        if(form[i].line_dropdown ){
            var lineDropdown = form[i].line_dropdown[0];

            formElements.push(text(lineDropdown));
            formValidatorElements.push(textValidator(lineDropdown, 'dropdown'));
        }

        // form radio
        if(form[i].line_radio ){
            var lineRadio = form[i].line_radio[0];

            formElements.push(text(lineRadio));
            formValidatorElements.push(textValidator(lineRadio, 'radio'));
        }

        // form email
        if(form[i].line_email ){
            var lineEmail = form[i].line_email[0];

            formElements.push(text(lineEmail));
            formValidatorElements.push(textValidator(lineEmail, 'email'));
        }

        // form date
        if(form[i].line_date ){
            var lineDate = form[i].line_date[0];

            formElements.push(text(lineDate));
            formValidatorElements.push(textValidator(lineDate, 'date'));
        }

        // form upload
        if(form[i].line_upload ){
            var lineUpload = form[i].line_upload[0];

            formElements.push(text(lineUpload));
            formValidatorElements.push(textValidator(lineUpload, 'upload'));
        }

        // form credit card
        if(form[i].line_credit_card ){
            var lineCreditCard = form[i].line_credit_card[0];

            formElements.push(text(lineCreditCard));
            formValidatorElements.push(textValidator(lineCreditCard, 'credit_card'));
        }

        // form url
        if(form[i].line_url ){
            var lineUrl = form[i].line_url[0];

            formElements.push(text(lineUrl));
            formValidatorElements.push(textValidator(lineUrl, 'url'));
        }

        // form hidden
        if(form[i].line_hidden ){
            var lineHidden = form[i].line_hidden[0];

            formElements.push(text(lineHidden));
            //formValidatorElements.push(textValidator(lineHidden, 'hidden'));
        }

       //console.log(form[i]);
    }

    formElements.push(csrf());
    formElements.push(zfFooter());

    formValidatorElements.push(zfValidatorFooter());

    $('#form_file').html( formElements );

    $('#form_file_validator').html( formValidatorElements );

    $('#form_controller').html(zfController(form[0]));

    $('#form_view').html(zfView(form, 'view'));

    $('#form_row').text(zfView(form, 'row'));

    $('#form_view_helper').html(zfViewHelper());

    $('#form_model').html(zfModel(form));

    $('#form_repository').html(zfRepository(form[0]));

});



var csrf = function csrf (){
    var csrfForm =$.sprintf("%s$this->add([ <br>%s'name' => 'csrf', <br>%s'type' => 'Zend\\Form\\Element\\Csrf', <br>%s]);",
    tt,ttt,ttt,tt);
    return (csrfForm);
};

var hidden = function hidden (){
    var hiddenForm =$.sprintf("%s$this->add([ <br>%s'name' => 'hidden', <br>%s'type' => 'Zend\\Form\\Element\\Hidden', <br>%s]);",
    tt,ttt,ttt,tt);
    return (hiddenForm);
};

/**
 * text field
 * @param lineText
 * @return {String}
 */
var text = function text (lineText){

    var textForm =$.sprintf("%s$this->add([<br>",tt);
    textForm+=$.sprintf("%s'name' => '%s', <br>",ttt, lineText.name);
    textForm+=$.sprintf("%s'type' => '%s', <br>",ttt,lineText.type);
    textForm+=$.sprintf("%s'attributes' =>[ <br>",ttt);
    textForm+=formAttr(lineText.data);
    textForm+=$.sprintf("%s], <br>",ttt);
    textForm+=$.sprintf("%s'options' => [ <br>",ttt);
    textForm+=formOptions(lineText.data);
    textForm+=$.sprintf("%s], <br>",ttt);
    textForm+=$.sprintf("%s]); <br> <br>",tt);
    return (textForm);
};

/**
 * @param lineText
 * @param val
 * @return {String}
 */
var textValidator = function textValidator (lineText, val){

    var params = '';
    var hasRequired = lineText.data.required ? $.sprintf("%s'required' => %s, <br>",ttt,lineText.data.required) : '';

    if(val === 'email'){
        params = formValidatorEmail(lineText.data, 'EmailAddress') +
            formValidatorEmail(lineText.data, 'NotEmpty');
    }

    var textForm =$.sprintf("%s$this->add($this->factory->createInput([ <br>",tt);
    textForm+=$.sprintf("%s'name' => '%s', <br>",ttt, lineText.name);
    textForm+=hasRequired;
    textForm+=$.sprintf("%s'filters' => [ <br>",ttt);
    textForm+=$.sprintf("%s['name' => StripTags::class], <br>",tttt);
    textForm+=$.sprintf("%s['name' => StringTrim::class], <br>",tttt);
    textForm+=$.sprintf("%s], <br>",tttt);
    textForm+=$.sprintf("%s'validators' =>[ <br>",ttt);
    textForm+=formValidatorOther(lineText.data, 'StringLength::class');
    textForm+=params;
    textForm+=formValidatorNumber(lineText.data);
    textForm+=formValidatorToken(lineText.data);
    textForm+=formValidatorDate(lineText.data);
    textForm+=formValidatorDropdown(lineText.data);
    textForm+=formValidatorUpload(lineText.data);
    textForm+=formValidatorCreditCard(lineText.data);
    textForm+=$.sprintf("%s], <br>",ttt);
    textForm+=$.sprintf("%s])); <br> <br>",tt);
    return (textForm);
};

/**
 * @param d
 * @return {String}
 */
var formValidatorUpload = function formValidatorOther (d){

    var filesizeMin = '', filefilessizeMin = '', filecountMin = '', filewordcountMin = '',
        filesizeMax = '', filefilessizeMax = '', filecountMax = '', filewordcountMax = '',
        minheight = '', maxheight = '', minwidth = '', maxwidth = '',
        fileextension = '', fileexcludeextension = '', filemimetype = '',
        fileexcludemimetype = '', fileexists = '', fileiscompressed = '',
        fileisimage = '', toReturn = '';

    if(d.filesize){
        if(d.filesize.min && d.filesize.min != ''){
            filesizeMin = $.sprintf("%s'min' => '" + d.filesize.min  + "', <br>",tttttt);
        }
        if(d.filesize.max && d.filesize.max != ''){
            filesizeMax = $.sprintf("%s'max' => '" + d.filesize.max  + "', <br>",tttttt);
        }
    }

    if(d.filefilessize){
        if(d.filefilessize.min && d.filefilessize.min != ''){
            filefilessizeMin = tttttt + "'min' => '" + d.filefilessize.min  + "', <br>";
        }
        if(d.filefilessize.max && d.filefilessize.max != ''){
            filefilessizeMax = $.sprintf("%s'max' => '" + d.filefilessize.max  + "', <br>",tttttt);
        }
    }

    if(d.filecount){
        if(d.filecount.min && d.filecount.min != ''){
            filecountMin = $.sprintf("%s'min' => '" + d.filecount.min  + "', <br>",tttttt);
        }
        if(d.filefilessize.max && d.filefilessize.max != ''){
            filecountMax = $.sprintf("%s'max' => '" + d.filecount.max  + "', <br>",tttttt);
        }
    }

    if(d.filewordcount){
        if(d.filewordcount.min && d.filewordcount.min != ''){
            filewordcountMin = $.sprintf("%s'min' => '" + d.filewordcount.min  + "', <br>",tttttt);
        }
        if(d.filewordcount.max && d.filewordcount.max != ''){
            filewordcountMax = $.sprintf("%s'max' => '" + d.filewordcount.max  + "', <br>",tttttt);
        }
    }

    if(d.fileimagesize){
        if(d.fileimagesize.minheight && d.fileimagesize.minheight != ''){
            minheight = $.sprintf("%s'minwidth' => '" + d.fileimagesize.minheight  + "', <br>",tttttt);
        }
        if(d.filewordcount.maxheight && d.fileimagesize.maxheight != ''){
            maxheight = $.sprintf("%s'maxwidth' => '" + d.fileimagesize.maxheight  + "', <br>",tttttt);
        }
        if(d.filewordcount.minwidth && d.fileimagesize.minwidth != ''){
            minwidth = $.sprintf("%s'minheight' => '" + d.fileimagesize.minwidth  + "', <br>",tttttt);
        }
        if(d.filewordcount.maxwidth && d.fileimagesize.maxwidth != ''){
            maxwidth = $.sprintf("%s'maxheight' => '" + d.fileimagesize.maxwidth  + "', <br>",ttttttt);
        }
    }

    if(d.fileextension){
        if(d.fileextension && d.fileextension != ''){
            fileextension =$.sprintf("%s%s, <br>", tttttt,d.fileextension);
        }
    }

    if(d.fileexcludeextension){
        if(d.fileexcludeextension && d.fileexcludeextension != ''){
            fileexcludeextension = $.sprintf("%s%s, <br>", tttttt, d.fileexcludeextension);
        }
    }

    if(d.filemimetype){
        if(d.filemimetype && d.filemimetype != ''){
            filemimetype = $.sprintf("%s%s, <br>", tttttt, d.filemimetype);
        }
    }

    if(d.fileexcludemimetype){
        if(d.fileexcludemimetype && d.fileexcludemimetype != ''){
            fileexcludemimetype =$.sprintf("%s%s, <br>", tttttt, d.fileexcludemimetype);
        }
    }

    if(d.fileexists){
        if(d.fileexists && d.fileexists != ''){
            fileexists = $.sprintf("%s%s, <br>", tttttt, d.fileexists);
        }
    }

    if(d.fileiscompressed){
        if(d.fileiscompressed && d.fileiscompressed != ''){
            fileiscompressed = $.sprintf("%s%s, <br>", tttttt, d.fileiscompressed);
        }
    }

    if(d.fileisimage){
        if(d.fileisimage && d.fileisimage != ''){
            fileisimage = $.sprintf("%s%s, <br>", tttttt, d.fileisimage);
        }
    }


    toReturn += genericValidator('Size', 'array', [filesizeMin, filesizeMax], '');
    toReturn += genericValidator('FilesSize', 'array', [filefilessizeMin, filefilessizeMax], '');
    toReturn += genericValidator('Count', 'array', [filecountMin, filecountMax], '');
    toReturn += genericValidator('WordCount', 'array', [filewordcountMin, filewordcountMax], '');
    toReturn += genericValidator('ImageSize', 'multy_array', [minheight, maxheight, minwidth, maxwidth], '');
    toReturn += genericValidator('Extension', 'string', [], fileextension);
    toReturn += genericValidator('ExcludeExtension', 'string', [], fileexcludeextension);
    toReturn += genericValidator('MimeType', 'string', [], filemimetype);
    toReturn += genericValidator('ExcludeMimeType', 'string', [], fileexcludemimetype);
    toReturn += genericValidator('Exists', 'string', [], fileexists);
    toReturn += genericValidator('IsCompressed', 'string', [], fileiscompressed);
    toReturn += genericValidator('IsImage', 'string', [], fileisimage);

    return (toReturn);
};

/**
 * @param l
 * @param v
 * @return {String}
 */
var formValidatorOther = function formValidatorOther (l, v){

    var lMin = '',
        lMax = '',
        lengthForm = '';

    if(l.length){
        if(l.length.min && l.length.min != ''){
            lMin = $.sprintf("%s'min' => '%s', <br>",tttttt, l.length.min);
        }
        if(l.length.max && l.length.max != ''){
            lMax =$.sprintf( "%s'max' => '%s', <br>",ttttttt,l.length.max);
        }
    }

    if(lMin != '' || lMax != ''){
        lengthForm =tttt + "[ <br>";
        lengthForm +=$.sprintf("%s'name' => %s, <br>",ttttt ,v);
        lengthForm +=$.sprintf("%s'options' => [ <br>",ttttt);
        lengthForm +=$.sprintf("%s'encoding' => 'UTF-8', <br>",tttttt);
        lengthForm +=lMin + lMax;
        lengthForm +=$.sprintf("%s'messages' => [ <br>",tttttt);
        lengthForm +=$.sprintf("%sStringLength::TOO_SHORT => 'OPSS! Esse campo deve conter no min: %s caracteres', <br>",ttttttt,l.length.min);
        lengthForm +=$.sprintf("%sStringLength::TOO_LONG => 'OPSS! Esse campo deve conter no max: %s caracteres' <br>",ttttttt,l.length.max);
        lengthForm +=$.sprintf("%s], <br>",tttttt);
        lengthForm +=$.sprintf("%s], <br>",ttttt);
        lengthForm +=$.sprintf("%s], <br>",tttt);
    }
    return (lengthForm);
};

/**
 * @param d
 * @return {String}
 */
var formValidatorCreditCard = function formValidatorCreditCard (d){

    var institutes = '',
        cc = '';

    if(d.institutes){
        if(d.institutes && d.institutes != ''){
            institutes = $.sprintf("%s'type' => \\Zend\\Validator\\CreditCard::%s, <br>",tttttt, d.institutes );
        }
    }

    if(institutes != ''){
        cc =$.sprintf("%s[ <br>%s'name' => 'CreditCard', <br>%s'options' => [ <br>%s%s], <br>%s], <br>",tttt,ttttt,ttttt,institutes,ttttt,tttt);
    }
    return (cc);
};

/**
 * @param l
 * @return {String}
 */
var formValidatorDate = function formValidatorOther (l){
    var validation = '';
    if(l.date_validation){
        validation +=$.sprintf("%s[" + "<br>",tttt);
            validation +=$.sprintf("%s'name' => 'Between'," + "<br>",ttttt);
            validation +=$.sprintf("%s'options' => [" + "<br>",ttttt);
                if(l.date_validation.min != ''){
                    validation +=$.sprintf("%s'min' => '%s', <br>",tttttt, l.date_validation.min);
                }
                if(l.date_validation.max != ''){
                    validation +=$.sprintf("%s'max' => '%s', <br>",tttttt,l.date_validation.min);
                }
            validation += $.sprintf("%s]," + "<br>",ttttt);
        validation += $.sprintf("%s]," + "<br>",tttt);
    }
    return (validation);
};
/**
 *
 * @param l
 * @param v
 * @return {String}
 */
var formValidatorEmail = function formValidatorEmail (l, v){

    var lMessages = '';
    var lengthForm = '';

    if(l && v === 'EmailAddress'){
        lMessages = $.sprintf("%s'messages' => [ <br>",tttttt);
            lMessages +=$.sprintf("%sEmailAddress::INVALID_FORMAT => '%s', <br>",tttttt, l.messages.emailAddressInvalidFormat);
        lMessages +=$.sprintf("%s] <br>",tttttt);
    }
    if(l && v === 'NotEmpty'){
        lMessages = $.sprintf("%s'messages' => [ <br>",tttttt);
            lMessages += $.sprintf("%sNotEmpty::IS_EMPTY => '%s', <br>",tttttt,l.messages.isEmpty);
        lMessages += $.sprintf("%s] <br>",tttttt);
    }

    if(lMessages != ''){
        lengthForm =$.sprintf("%s[ <br>%s'name' => EmailAddress::class, <br>%s'options' => [ <br>%s%s], <br>%s], <br>",
            tttt,ttttt,ttttt,lMessages,ttttt,tttt);
    }
    return (lengthForm);
};

/**
 * @param p
 * @return {String}
 */
var formValidatorToken = function formValidatorToken (p){
    var tokenForm = '';

    if(p && p.token){
        tokenForm =$.sprintf("%s[ <br>",tttt);
        tokenForm +=$.sprintf("%s'name' => Identical::class, <br>",ttttt);
        tokenForm +=$.sprintf("%s'options' => [ <br>",tttttt);
        tokenForm +=$.sprintf("%s'token' => '%s', <br>",ttttt,p.token);
        tokenForm +=$.sprintf("%s'messages'=>[ <br>",ttttt);
        tokenForm +=$.sprintf("%sIdentical::NOT_SAME=>'A Senha Não Corresponde Com A Confirmação', <br>",ttttttt);
        tokenForm +=$.sprintf("%s], <br>",tttttt);
        tokenForm +=$.sprintf("%s], <br>",ttttt);
        tokenForm +=$.sprintf("%s],",tttt);
        tokenForm +="<br>";
    }
    return (tokenForm);
};

var formValidatorNumber = function formValidatorNumber (digits){
    var digitsName = '';
    if(digits.validators && digits.validators.html5 == 0 ){
        if(digits.validators.name){
            digitsName += $.sprintf("%s[ <br>%s'name' => '%s', <br>%s], <br><br>",
                tttt,ttttt,digits.validators.name,tttt);
        }
    }

    return (digitsName);
};

var formValidatorDropdown = function formValidatorDropdown (select){
    var tokenForm = '', key = [];

    if(select && select.dropdownValues){

        for(var i=0; i<select.dropdownValues.length; i++){
            key.push(i);
        }
        tokenForm =$.sprintf("%s[ <br>",tttt);
        tokenForm +=$.sprintf("%s'name' => InArray::class, <br>",ttttt)
        tokenForm +=$.sprintf("%s'options' => [ <br>",ttttt);
        tokenForm +=$.sprintf("%s'haystack' => [%s], <br>",ttttttt,key);
        tokenForm +=$.sprintf("%s'messages' => [ <br>",tttttt);
        tokenForm +=$.sprintf("%sNotEmpty::IS_EMPTY => '%s' <br>",tttttt,select.number_notinarray);
        tokenForm +=$.sprintf("%s], <br>",tttttt);
        tokenForm +=$.sprintf("%s], <br>",ttttt);
        tokenForm +=$.sprintf("%s], <br><br>",tttt);
    }
    return (tokenForm);
};

/**
 * form attr validator
 * @param attr
 * @return {String}
 */

var formAttr = function formAttr (attr){
    var attrs = '';

    if(attr.class != ''){
        attrs += $.sprintf("%s'class' => '%s', <br>",tttt,attr.class);
    }
    if(attr.id != ''){
        attrs +=$.sprintf("%s'id' => '%s', <br>",tttt,attr.id);
    }
    if(attr.placeholder && attr.placeholder != ''){
        attrs += $.sprintf("%s'placeholder' => '%s', <br>",tttt, attr.placeholder);
    }
    if(attr.required != 'false'){
        attrs +=$.sprintf("%s'required' => 'required', <br>",tttt);
    }
    if(attr.default && attr.default != 'false'){
        attrs +=$.sprintf("%s'value' => '%s', <br>",tttt,attr.default);
    }
    if(attr.date){
        if(attr.date.min != ''){
            attrs +=$.sprintf("%s'min' => '%s', <br>",tttt,attr.date.min);
        } else {
            attrs +=$.sprintf("%s'min' => '1970-01-01', <br>",tttt);
        }
        if(attr.date.max != ''){
            attrs +=$.sprintf("%s'max' => '%s', <br>",tttt, attr.date.max );
        } else {
            attrs +=$.sprintf("%s'max' => %s, <br>",tttt,date());
        }
        attrs +=$.sprintf("%s'step' => '1', <br>",tttt);
    }

    if(attr.length){
        if(attr.length.min_str){
            attrs += $.sprintf("%s'min' => '%s', <br>",tttt,attr.length.min_str);
        }
        if(attr.length.max_str ){
            attrs +=$.sprintf("%s'max' => '%s', <br>",tttt,attr.length.max_str);
        }
        if(attr.length.min_str || attr.length.max_str){
            attrs +=$.sprintf("%s'step' => '1', <br>",tttt);
        }
    }

    if(attr.validators){
        if(attr.validators.html5 == 1){
            attrs += $.sprintf("%s'type' => 'number', <br>",tttt);
        }
    }

    return (attrs);
};

var date = function date (){
    var d = new Date();
    var Ymd =$.sprintf("%s-%s-%s",d.getFullYear(), d.getMonth(), d.getDay());

    return Ymd;
};

/**
 * @param opt
 * @return {String}
 */
var formOptions = function formOptions (opt){
    var options = '';

    if(opt.label != ''){
        options += $.sprintf("%s'label' => '%s', <br>",tttt,opt.label);
    }

    if(opt.label_id || opt.label_class){
        options += $.sprintf("%s'label_attributes' => [ <br>",tttt);
            if(opt.label_class){
                options += $.sprintf("%s'class' => '%s', <br>",ttttt,opt.label_class );
            }
            if(opt.label_id){
                options +=$.sprintf("%s'id' => '%s', <br>",ttttt,opt.label_id);
            }
        options += $.sprintf("%s], <br>",tttt);
    }

    if(opt.innerData){
        options += $.sprintf("%s'value_options' => [ <br>",tttt);
            for(var i = 0; i < opt.innerData.length; i++){
                if(opt.innerData[i].label){
                    options +=$.sprintf("%s'%s' => '%s', <br>",ttttt,i, opt.innerData[i].label);
                }
            }
        options += $.sprintf("%s]," + "<br>",tttt);
    }

    if(opt.dropdownValues){
        options += $.sprintf("%s'value_options' => [ <br>",tttt);
            for(var i = 0; i < opt.dropdownValues.length; i++){
                if(opt.dropdownValues[i].dropdown_label){
                    options += $.sprintf("%s'%s' => '%s', <br>",tttt,i,opt.dropdownValues[i].dropdown_label);
                }
            }
        options += $.sprintf("%s],<br>",tttt);
    }

    return (options);
};




var genericValidator = function genericValidator (nameV, typeV, arrayV, stringV){
    var options = '';

    if(typeV == 'string'){
        options = stringV;
    }
    if(typeV == 'array'){
        options = arrayV[0] +  arrayV[1];
    }
    if(typeV == 'multy_array'){
        options = arrayV[0] + arrayV[1] + arrayV[2] + arrayV[3];
    }

    var validator =$.sprintf("%s[ <br>",tttt);
        validator+=$.sprintf("%s'name' => '%s', <br>",ttttt,nameV);
        validator+=$.sprintf("%s'options' => [ <br>",ttttt);
        validator+=options;
        validator+=$.sprintf("%s], <br>",ttttt);
        validator+=$.sprintf("%s], <br>",tttt);

    return options != '' ? validator : '';
}
