// for more details see: http://emberjs.com/guides/controllers/

Familybook.UserController = Ember.ObjectController.extend({
    showadderrand: false,
    errandVar: '',
    actions: {
        errandAdd: function(user) {
            this.toggleProperty('showadderrand');
            var a = this.store.createRecord('errand', {
                title: '',
                description: '',
                user: user,
                privy: false,
                location: ''
            });
            console.log(a);
            this.set('errandVar', a);
        },
        errandCancel: function() {
            this.toggleProperty('showadderrand');
            this.get('errandVar').deleteRecord();
        },
        errandStore: function() {
            // this.get('errandVar').save();
        }
    }
});