import { Template } from 'meteor/templating';
import { Stuff } from '../../api/stuff/stuff.js';

Template.Signup_Page.events({
  'submit form': function(event){
    event.preventDefault();
    const email = $('[name=email]').val();
    const password = $('[name=password]').val();
    Accounts.createUser({
      email: email,
      password: password
    });
    Router.go('Login_Page');
  }
});

FlowRouter.route('/signup', {
  name: 'Login_Page',
  action() {
    Accounts.createUser(username, password);
  },
})