// for more details see: http://emberjs.com/guides/views/

Familybook.SignupView = Ember.View.extend({
    templateName: 'signup'
    // didInsertElement: function() {
    //     this._super();
    //     $("#selectGroup").select2({
    //         minimumInputLength: 0,
    //         placeholder: "Choose or Create a group",
    //         data: [{
    //                 id: 2,
    //                 text: 'Technology'
    //             }, {
    //                 id: 3,
    //                 text: 'Corporate Delivery'
    //             }

    //         ],
    //         formatNoMatches: createGroupLink,
    //         allowClear: true,

    //     });

    //     $("#selectGroup").change(function() {
    //         console.log($('#selectGroup').select2('data').text);
    //     });
    //     $("#createGroup").click(function() {

    //     })

    //     function createGroupLink(term) {
    //         return "<a class='btn btn-default creategroup'>create group</a>"
    //     }
    // },

});