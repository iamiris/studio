define(['base/view', './designer/elementList', './designer/elementForm', 'text!./designer/designer.html'],function(BaseView, ElementList, ElementForm, designerTemplate){



    var View = BaseView.extend({
        template:designerTemplate,
        actionHandler:function(action, e){
            switch(action){
                case 'addField':
                     addField.call(this);
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

    var idCounter=0;
    var addField = function(){
        var _this = this;
        var list = _this.getSubView('list');
        var listModel = list.model;
        var listCollection = listModel.get('items');
        listCollection.add({id:++idCounter, name:'name'+idCounter});
    }

    return {
        View:View
    }
});