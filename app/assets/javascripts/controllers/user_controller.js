// for more details see: http://emberjs.com/guides/controllers/

Familybook.UserController = Ember.ObjectController.extend({
    showadderrand: false,
    errandVar: '',
    recentAdded: [],
    toggleProp: function(prop) {
        this.toggleProperty(prop);
    },
    actions: {
        errandAdd: function(user) {
            // this.toggleProperty('showadderrand');
            this.toggleProp('showadderrand');
            var a = this.store.createRecord('errand', {
                title: '',
                description: '',
                user: user,
                privy: false,
                location: '',
                updated_at: Date(),
                created_at: Date()
            });
            console.log(a);
            this.set('errandVar', a);

        },
        errandCancel: function() {
            this.toggleProp('showadderrand');
            this.get('errandVar').deleteRecord();
        },
        errandStore: function(user) {

            this.get('errands').addObject(this.get('errandVar'));
            this.get('recentAdded').pushObject(this.get('errandVar'));
            this.set('recentAdded', this.get('recentAdded').reverse());
            this.get('errandVar').save();
            this.toggleProp('showadderrand');
            // this.reload();
            // this.
        }
    }
});