// for more details see: http://emberjs.com/guides/models/defining-models/

Familybook.Errand = DS.Model.extend({
    title: DS.attr('string'),
    user: DS.belongsTo('user'),
    description: DS.attr('string'),
    privy: DS.attr('boolean'),
    location: DS.attr(''),
    tag: DS.attr('string'),
    updated_at: DS.attr('date'),
    created_at: DS.attr('date')
});