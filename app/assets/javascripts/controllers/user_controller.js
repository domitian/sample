// for more details see: http://emberjs.com/guides/controllers/

Familybook.UserController = Ember.ObjectController.extend({
    showadderrand: false,
    errandVar: '',
    recentAdded: [],
    newListOrder: [],
    defaultView: true,
    byTags: true,
    selectedUser: 0,
    toggleProp: function(prop) {
        this.toggleProperty(prop);
    },
    selectedUserChange: function() {

        var record = this.get('record');
        this.set('byTags', false);
        var shortList = this.get('uniqueUserList');
        var b = [];
        var self = this;
        var selectedUser = this.get('selectedUser')
        console.log('no problem here');
        if (record != null) {
            record.forEach(function(item) {
                if (selectedUser != 0) {
                    // console.log(sortItem);
                    self.set('defaultView', false);
                    if (item.user_id == selectedUser) {
                        b.push({
                            'written_by': shortList[item.user_id],
                            'errand': item,
                            'id': item.user_id
                        });
                    }
                } else {
                    self.set('defaultView', true);
                }
            });
        }
        this.set('newListOrder', b.reverse());
    }.observes('selectedUser'),

    actions: {
        errandAdd: function(user) {
            // this.toggleProperty('showadderrand');
            this.toggleProp('showadderrand');
            var a = this.store.createRecord('errand', {
                title: '',
                description: {
                    "attributes": [{
                        "label": '',
                        "value": ''
                    }]
                },
                user: user,
                privy: false,
                location: '',
                tag: '',
                errand_type: 0
            });
            this.set('errandVar', a);

        },
        addDescriptionAttributes: function(obj) {

            var errandVar = this.get('errandVar').get('description').attributes.insertAt(this.get('errandVar').get('description').attributes.indexOf(obj) + 1, {
                "label": '',
                "value": ''
            });

        },
        removeDescriptionAttributes: function(obj) {
            var errandVar = this.get('errandVar').get('description').attributes.removeAt(this.get('errandVar').get('description').attributes.indexOf(obj));
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
            this.set('byTags', true);
            if (this.get('recentAdded') != []) {
                user.reload();
                this.set('recentAdded', []);
            }
            var record = this.get('record');
            var shortList = this.get('uniqueUserList');
            var b = [];
            console.log('no problem here');
            if (record != null) {
                record.forEach(function(item) {
                    if (showType == 'tags') {
                        console.log(item.tag);
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
            this.set('newListOrder', b.reverse());
            // return b.reverse();
        },
        backToDefault: function(user) {
            this.set('defaultView', true);
            if (this.get('recentAdded') != []) {
                user.reload();
                this.set('recentAdded', []);
            }
        },
        geoFindMe: function(user) {
            var output = document.getElementById("out");
            // var recentAdded = this.get('recentAdded');
            // var errands = user.get('errands');
            // var locationErrand = null;
            // errands.forEach(function(errand) {
            //     if (errand.get('errand_type') == 1) {
            //         locationErrand = errand;
            //     }
            // })
            var self = this;
            if (!navigator.geolocation) {
                output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
                return;
            }


            function success(position) {
                var latitude = position.coords.latitude;
                var longitude = position.coords.longitude;
                user.location = {
                    "latitude": latitude,
                    "longitude": longitude
                };
                user.save();
                // var errandLocation = self.store.createRecord('errand', {
                //     title: user.get('name') + ' @',
                //     description: {
                //         "attributes": [{
                //             "label": '',
                //             "value": ''
                //         }]
                //     },
                //     user: user,
                //     privy: false,
                //     location: {
                //         "latitude": latitude,
                //         "longitude": longitude
                //     },
                //     tag: 'location',
                //     errand_type: 1
                // });
                // locationErrand.get('location') = {
                //     "latitude": latitude,
                //     "longitude": longitude
                // }

                // errands.addObject(errandLocation);
                // recentAdded.pushObject(errandLocation);
                // console.log('error here');
                // self.set('recentAdded', self.get('recentAdded').reverse());
                // errandLocation.save().then(function(use) {
                //     user.reload();
                //     self.set('recentAdded', []);
                // })
            };

            function error() {
                // output.innerHTML = "Unable to retrieve your location";
            };

            // output.innerHTML = "<p>Locating…</p>";

            navigator.geolocation.getCurrentPosition(success, error);
        }
    }
});