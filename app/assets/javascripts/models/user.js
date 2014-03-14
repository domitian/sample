// for more details see: http://emberjs.com/guides/models/defining-models/

Familybook.User = DS.Model.extend({
    name: DS.attr('string'),
    errands: DS.hasMany('errand', {
        async: true
    }),
    record: DS.attr(''),
    group_name: DS.attr('string')
});