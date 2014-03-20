        geoFindMe: function() {
            // var output = document.getElementById("out");

            // var self = this;
            if (!navigator.geolocation) {
                output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
                return;
            }


            function success(position) {
                var latitude = position.coords.latitude;
                var longitude = position.coords.longitude;


            };

            function error() {
                // output.innerHTML = "Unable to retrieve your location";
            };

            // output.innerHTML = "<p>Locating…</p>";

            navigator.geolocation.getCurrentPosition(success, error);
        }();