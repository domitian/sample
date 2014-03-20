Handlebars.registerHelper('formatDate', function(datetime, format) {
    console.log(datetime);
    var date = Date.parse(datetime);
    console.log(date);
    return date.toString();
});

Ember.Handlebars.registerBoundHelper('showLocation', function(url) {
    if ((url.latitude == undefined) || (url.latitude == null) || (url.latitude == '')) {
        return "";
    } else {
        var url = "http://maps.googleapis.com/maps/api/staticmap?center=" + url.latitude + "," + url.longitude + "&zoom=13&size=200x200&sensor=false";
        return new Handlebars.SafeString('<img src=' + url + ' >');
    }
})