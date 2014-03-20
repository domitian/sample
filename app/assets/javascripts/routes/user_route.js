// For more information see: http://emberjs.com/guides/routing/

Familybook.UserRoute = Ember.Route.extend({
    model: function(params) {
        return this.store.find('user', params.user_id);
    },
    afterModel: function(user) {

        if (user.get('location_set')) {
            if (!navigator.geolocation) {
                output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
                return;
            }


            function success(position) {
                var latitude = position.coords.latitude;
                var longitude = position.coords.longitude;
                user.set('location', {
                    "latitude": latitude,
                    "longitude": longitude
                });
                console.log(user);
                user.save();

            };

            function error() {
                // output.innerHTML = "Unable to retrieve your location";
            };

            // output.innerHTML = "<p>Locating…</p>";

            navigator.geolocation.getCurrentPosition(success, error);
        }



    } // setupController: function(controller,model){
    // 	this._super(controller,model);
    // 	controller.set('group',{})
    // }
});