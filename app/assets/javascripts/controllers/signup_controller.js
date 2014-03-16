// for more details see: http://emberjs.com/guides/controllers/

Familybook.SignupController = Ember.Controller.extend({
    group: [{
        name: 'Technology',
        id: 2
    }],
    actions: {
        groupchoose: function(group) {
            var user = this.store.createRecord('user', {
                group_name: group
            });
            user.save();
            this.transitionTo('startup');
        }
    }
});