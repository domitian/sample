// for more details see: http://emberjs.com/guides/models/defining-models/

Familybook.Group = DS.Model.extend({
    name: DS.attr('string'),
    users: DS.hasMany('user', {
        async: true
    })
});