// For more information see: http://emberjs.com/guides/routing/

Familybook.Router.map(function() {
    // this.resource('posts');
    this.resource('same');
    this.resource('users', function() {
        this.resource('user', {
            path: ':user_id'
        });
    });
});