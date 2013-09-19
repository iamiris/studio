define(['base', 'list/singleSelect'],function(Base, SingleSelect){
    var ElementListView = SingleSelect.View.extend({

    });

    var ElementListModel = SingleSelect.Model;

    return {
        View:ElementListView,
        Model:ElementListModel
    }
})