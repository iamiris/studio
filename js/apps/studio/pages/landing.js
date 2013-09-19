define(['base','../widgets/designer','text!../templates/pages/landing.html'], function(Base, Designer, template){


    var PageView = Base.View.extend({
        template:template,
        views:{
            designer:{
                View:Designer.View,
                parentEl:'.designer'
            }
        }
    })

    var PageModel = Base.Model.extend({

    });

    return {
        Model:PageModel,
        View:PageView
    }

})