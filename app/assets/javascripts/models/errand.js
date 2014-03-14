// for more details see: http://emberjs.com/guides/models/defining-models/

Familybook.Errand = DS.Model.extend({
    title: DS.attr('string'),
    user: DS.belongsTo('user'),
    description: DS.attr('string'),
    privy: DS.attr('boolean'),
    location: DS.attr('string')
});