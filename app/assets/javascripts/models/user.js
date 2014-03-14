// for more details see: http://emberjs.com/guides/models/defining-models/

Familybook.User = DS.Model.extend({
    name: DS.attr('string'),
    errands: DS.hasMany('errand', {
        async: true
    }),
    record: DS.attr(''),
    group_name: DS.attr('string'),
    dates: function() {
        var ls = this.get('record');
        var dat = [];
        ls.forEach(function(l, index) {
            l.updated_at = Date.parse(l.updated_at).toString();
            ls[index] = l;
        });
        return ls;
    }.property('record')
});