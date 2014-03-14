// for more details see: http://emberjs.com/guides/views/

Familybook.UserView = Ember.View.extend({
    templateName: 'user',
    showadderrand: false,

    errandView: Ember.View.extend({
        templateName: 'adderrand'
    })
});