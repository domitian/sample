// for more details see: http://emberjs.com/guides/models/defining-models/

Familybook.User = DS.Model.extend({
    name: DS.attr('string'),
    errands: DS.hasMany('errand', {
        async: true
    }),
    record: DS.attr(''),
    group_name: DS.attr('string'),
    group: DS.belongsTo('group'),
    approval_list: DS.attr(''),
    is_approved: DS.attr('boolean'),
    approved_by: DS.attr('number'),
    location: DS.attr(''),
    location_set: DS.attr('boolean'),
    recordFormat: function() {
        var record = this.get('record');
        var colorList = ["#6C3BA1", "#F2101F", "#CEC1C2", "#2525C6", "#25BBC6", "#25C640", "#D05520", "#E6DC1C"]
        var userList = this.get('approval_list');
        var shortList = {}; //storing the userlist in a short form for easier access
        var colorOfUser = {};
        if (userList == null) {
            userList = [];
        }
        console.log('error at step1 rf');
        userList.forEach(function(user, index) {
            shortList[user.id] = user.name;
            colorOfUser[user.id] = colorList[index];
        });

        var b = [];
        if (record != null) {
            record.forEach(function(item) {
                if (typeof item.updated_at != 'object') {
                    item.updated_at = new Date(item.updated_at);
                }
                item.tag = item.tag.replace(/ /g, "");

                item.tag = item.tag.split(',');
                if (item.errand_type == 1) {
                    b.push({
                        'locate': true,
                        'written_by': shortList[item.user_id],
                        'errand': item,
                        'id': item.user_id,
                        "color": "color:" + colorOfUser[item.user_id] + ";"
                    });
                } else {
                    b.push({
                        'locate': false,
                        'written_by': shortList[item.user_id],
                        'errand': item,
                        'id': item.user_id,
                        "color": "color:" + colorOfUser[item.user_id] + ";"
                    });
                }
            });
        }
        console.log(' running inside recordformat')
        return b.reverse();
    }.property('record'),
    unApproved: function() {
        var userList = this.get('approval_list');
        var unApprovedList = [];
        if (userList != null) {
            userList.forEach(function(user) {
                if (user.is_approved == false) {
                    unApprovedList.pushObject(user);
                }
            });
        }
        return unApprovedList;
    }.property('approval_list'),
    uniqueUserList: function() {
        var userList = this.get('approval_list');
        var shortList = {}; //storing the userlist in a short form for easier access
        if (userList == null) {
            userList = [];
        }
        userList.forEach(function(user) {
            shortList[user.id] = user.name
        });
        return shortList;
    }.property('approval_list'),
    uniqueUserListHash: function() {
        var list = this.get('uniqueUserList');
        var arrlist = [];
        arrlist.push({
            id: 0,
            username: 'all'
        });
        for (var keyval in list) {
            arrlist.push({
                id: keyval,
                username: list[keyval]
            })
        }
        return arrlist;
    }.property('uniqueUserList')
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