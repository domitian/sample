// For more information see: http://emberjs.com/guides/routing/

Familybook.UserRoute = Ember.Route.extend({
    model: function(params) {
        return this.store.find('user', params.user_id);
    }
    // setupController: function(controller,model){
    // 	this._super(controller,model);
    // 	controller.set('group',{})
    // }
});