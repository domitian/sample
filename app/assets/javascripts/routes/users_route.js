// For more information see: http://emberjs.com/guides/routing/

Familybook.UsersRoute = Ember.Route.extend({
    model: function() {
        return this.store.find('user');
    }
});