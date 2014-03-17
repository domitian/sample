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
            var self = this
            var onSuccess = function(user) {
                console.log('succes here');
                self.transitionToRoute('user', user);
            };
            var onFail = function(user) {
                console.log('failed');
            }
            user.save().then(onSuccess, onFail);

        }
    }
});