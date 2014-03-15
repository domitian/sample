// for more details see: http://emberjs.com/guides/models/defining-models/

Familybook.User = DS.Model.extend({
    name: DS.attr('string'),
    errands: DS.hasMany('errand', {
        async: true
    }),
    record: DS.attr(''),
    group_name: DS.attr('string'),
    group: DS.belongsTo('group'),
    recordFormat: function() {
        var record = this.get('record');
        var b = []
        record.forEach(function(item) {
            item.updated_at = new Date(item.updated_at);
            b.push(item);
        })
        return b;
    }.property('record')
    // dates: function() {
    //     var errands = this.get('errands');
    //     var record = this.get('recordFormat');
    //     var c = [];
    //     if (record.length != 0) {
    //         record.forEach(function(item) {
    //             // item.set('updated_at', new Date(item.updated_at));
    //             c.pushObject(item);
    //         });
    //     }
    //     if (errands.get('length') != 0) {
    //         errands.forEach(function(item) {
    //             c.pushObject(item);
    //         });
    //     }
    //     console.log(c);
    //     return c;
    // }.property('recordFormat.[]', 'errands.@each'),
    // sortedDates: function() {
    //     console.log(this.get('dates').sortBy('updated_at'));

    //     return this.get('dates').sortBy('updated_at').reverse();
    // }.property('dates.[]', 'errands.@each')

    // dates: function() {
    //     var ls = this.get('record');
    //     // console.log(this.get('errands'));
    //     var dat = [];
    //     ls.forEach(function(l, index) {
    //         l.updated_at = Date.parse(l.updated_at).toString();
    //         ls[index] = l;
    //     });
    //     return ls;
    // }.property('record')
    // errandlist: function() {

    //     var ls = this.get('errands');
    //     var ls1 = this.get('record');
    //     var ls2 = ls.concat(ls1);
    //     return ls2;
    // }.property('record', 'errands')
});