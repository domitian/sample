// For more information see: http://emberjs.com/guides/routing/

Familybook.SignupRoute = Ember.Route.extend({
    model: function(params) {
        return this.store.find('group');
    }
});