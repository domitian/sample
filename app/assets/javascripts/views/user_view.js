// for more details see: http://emberjs.com/guides/views/

Familybook.UserView = Ember.View.extend({
    templateName: 'user',
    duplicateDrag: [],
    // didInsertElement: function() {
    //     this._super();
    // },

    errandView: Ember.View.extend({
        templateName: 'adderrand',

    }),
    dashboardView: Ember.View.extend({
        templateName: 'dashboard',
        attributeBindings: 'draggable',
        draggable: 'true',
        dragStart: function(event) {
            console.log('draggable');
            console.log(event);
            var dataTransfer = event.originalEvent.dataTransfer;
            dataTransfer.setData('Text', this.get('elementId'));
            console.log(dataTransfer.getData('Text'));
            this.set('controller.defaultView', false);
            console.log(this.get('controller.content'));
            this.set('parentView.duplicateDrag', this.get('recordFormat'));
            console.log(this.get('parentView.duplicateDrag'));
            console.log(this.get('content'))
        }
        // actions: {
        //     dragForPriority: function(errand, user, event) {
        //         var errandList = user.get('recordFormat');

        //         console.log(errandList.indexOf(errand));
        //         var dataTransfer = event.originalEvent.dataTransfer;
        //         dataTransfer.setData('Text', this.get('elementId'));
        //     }
        // }

    }),
    testingView: Ember.View.extend({
        templateName: 'testing',

        attributeBindings: 'draggable',
        draggable: 'true',
        dragStart: function(event) {
            console.log('draggable');
            var dataTransfer = event.originalEvent.dataTransfer;
            dataTransfer.setData('Text', this.get('elementId'));
            console.log(dataTransfer);

        }
    }),
    testing1View: Ember.View.extend({
        templateName: 'testing1',
        dragOver: function(evt) {
            evt.preventDefault();
            console.log('dragover');
            return false;
        },
        dragEnter: function(evt) {
            evt.preventDefault();
            console.log('dragEnter');
            return false;
        },
        dragLeave: function(evt) {
            evt.preventDefault();
            this.set('controller.defaultView', true);
            console.log('dragLeave');
            return false;
        },
        drop: function(evt) {
            console.log('dropped');
            return false;
        }
    })
});