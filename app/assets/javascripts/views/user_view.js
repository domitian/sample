// for more details see: http://emberjs.com/guides/views/

Familybook.UserView = Ember.View.extend({
    templateName: 'user',

    // didInsertElement: function() {
    //     this._super();
    //     $("#e2").select2({
    //         minimumInputLength: 0,
    //         placeholder: "Select a State",
    //         data: [{
    //                 id: 1,
    //                 text: 'bill'
    //             }, {
    //                 id: 2,
    //                 text: 'electricity'
    //             }

    //         ],
    //         allowClear: true

    //     });
    // },
    actions: {
        dragForPriority: function(errand, user) {
            var errandList = user.get('recordFormat');
            console.log(errandList.indexOf(errand));
        }
    },
    errandView: Ember.View.extend({
        templateName: 'adderrand',

    })
});