// for more details see: http://emberjs.com/guides/models/defining-models/

Familybook.Errand = DS.Model.extend({
    title: DS.attr('string'),
    user: DS.belongsTo('user')
});