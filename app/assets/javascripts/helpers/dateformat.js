Handlebars.registerHelper('formatDate', function(datetime, format) {
    console.log(datetime);
    var date = Date.parse(datetime);
    console.log(date);
    return date.toString();
});