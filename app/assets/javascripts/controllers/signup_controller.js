// for more details see: http://emberjs.com/guides/controllers/

Familybook.SignupController = Ember.Controller.extend({
    group: [{
        name: 'Technology',
        id: 2
    }, {
        name: 'Corporate Delivery',
        id: 3
    }],
    joinGroup: false,
    getList: function() {
        var gr = this.get('content');
        var groupList = [];
        gr.forEach(function(group) {
            groupList.push(group.name);
        })
        console.log(groupList);
        this.set('groupList', groupName);
    },
    actions: {
        groupChoose: function() {
            var groupName = this.get('groupName');
            groupName = groupName.toLowerCase();
            var groupId = groupName + '?';
            var content = this.get('content');
            content.forEach(function(group) {
                if (group.get('name') == groupName) {
                    groupId = groupId + group.get('id');
                }
            })
            console.log('the gorupid is ' + groupId)
            var user = this.store.createRecord('user', {
                group_name: groupId
            });
            var self = this
            var onSuccess = function(user) {
                console.log('succes here');
                self.transitionToRoute('user', user);
            };
            var onFail = function(user) {
                console.log('failed');
            }
            user.save().then(onSuccess, onFail);

        },
        checkForGroup: function() {
            // this.get('getList');
            var gr = this.get('content');
            var groupList = [];
            gr.forEach(function(group) {
                groupList.push(group.get('name'));
            })
            if (groupList.contains(this.get('groupName').toLowerCase())) {
                this.set('joinGroup', true);
            } else {
                this.set('joinGroup', false);
            }
        },
        groupCreate: function() {
            var groupName = this.get('groupName');

        }
    }
});