// for more details see: http://emberjs.com/guides/controllers/

Familybook.UserController = Ember.ObjectController.extend({
    showadderrand: false,
    errandVar: '',
    recentAdded: [],
    newListOrder: [],
    defaultView: true,
    toggleProp: function(prop) {
        this.toggleProperty(prop);
    },

    actions: {
        errandAdd: function(user) {
            // this.toggleProperty('showadderrand');
            this.toggleProp('showadderrand');
            var a = this.store.createRecord('errand', {
                title: '',
                description: '',
                user: user,
                privy: false,
                location: '',
                tag: ''
            });
            console.log(a);
            this.set('errandVar', a);

        },
        errandCancel: function() {
            this.toggleProp('showadderrand');
            this.get('errandVar').deleteRecord();
        },
        errandStore: function(user) {

            this.get('errands').addObject(this.get('errandVar'));
            this.get('recentAdded').pushObject(this.get('errandVar'));
            this.set('recentAdded', this.get('recentAdded').reverse());
            this.get('errandVar').save();
            this.toggleProp('showadderrand');
            // this.reload();
            // this.
        },
        refreshRec: function(user) {
            user.reload();
            this.set('recentAdded', []);
        },
        approveUser: function(user) {
            var approvalUser = this.store.push('user', {
                id: user.id,
                is_approved: true,
                approved_by: this.get('id')

            });
            approvalUser.save();

        },
        showBy: function(sortItem, user, showType) {
            this.set('defaultView', false);
            if (this.get('recentAdded') != []) {
                user.reload();
                this.set('recentAdded', []);
            }
            var record = this.get('record');
            var userList = this.get('approval_list');
            var shortList = {}; //storing the userlist in a short form for easier access
            userList.forEach(function(user) {
                shortList[user.id] = user.name
            });
            var b = [];
            console.log('no problem here');
            if (record != null) {
                record.forEach(function(item) {
                    if (showType == 'tags') {
                        if (item.tag.contains(sortItem)) {
                            b.push({
                                'written_by': shortList[item.user_id],
                                'errand': item,
                                'id': item.user_id
                            });
                        }
                    } else if (showType == 'user') {
                        console.log(sortItem);
                        if (item.user_id == Number(sortItem)) {
                            b.push({
                                'written_by': shortList[item.user_id],
                                'errand': item,
                                'id': item.user_id
                            });
                        }
                    }
                });
            }
            this.set('newListOrder', b);
            // return b.reverse();
        },
        backToDefault: function(user) {
            this.set('defaultView', true);
            if (this.get('recentAdded') != []) {
                user.reload();
                this.set('recentAdded', []);
            }
        }
    }
});