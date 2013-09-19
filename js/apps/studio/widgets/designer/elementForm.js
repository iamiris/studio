define(['require','base', 'widgets/form','text!./elementForm.html'],function(require, Base, Form, formTemplate){
    var ElementFormView = Form.View.extend({
        template:formTemplate,
        actionHandler:function(){

        }
    });

    return {
        View:ElementFormView,
        Model:Form.Model
    }
})