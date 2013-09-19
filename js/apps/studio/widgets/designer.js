define(['base/view', './designer/elementList', './designer/elementForm', 'text!./designer/designer.html'],function(BaseView, ElementList, ElementForm, designerTemplate){
    var View = BaseView.extend({
        template:designerTemplate,
        actionHandler:function(action, e){
            switch(action){
                case 'addField':
                    break;
            }
            e.actionHandled=true;
        },
        views:{
            list:{
                View:ElementList.View,
                parentEl:'.element-list',
                Model:ElementList.Model
            },
            form:{
                View:ElementForm.View,
                parentEl:'.element-form',
                Model:ElementForm.Model
            }
        }
    })

    return {
        View:View
    }
});