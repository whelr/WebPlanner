import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';



FlowRouter.route('/', {
  name: 'Login_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Login_Page' });
  },
});

FlowRouter.route('/signup', {
  name: 'Signup_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Signup_Page' });
  },
});


FlowRouter.route('/calendar', {
  name: 'Calendar_Page',
  action() {
    BlazeLayout.render('App_Body', { main: 'Calendar_Page' });
  },
});
