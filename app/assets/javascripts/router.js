// For more information see: http://emberjs.com/guides/routing/

Familybook.Router.map(function() {
    // this.resource('posts');
    this.route('login', {
        path: '/'
    });
    this.resource('users');
    this.resource('user', {
        path: '/user/:user_id'
    });
    this.route('signup');
    this.route('startup');

});